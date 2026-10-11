# Universal links: why obizee.com has to serve one file, and the two console steps

**Status 2026-10-11:** the file is committed, and it does **not** serve yet.
Two Amplify Console changes are needed and neither can be made from this repo.

## What this is for

The merchant app declares `applinks:*.obizee.com`. For a **wildcard**, iOS
strips the wildcard and fetches the association file from the **apex** —
`obizee.com` — and that one file then authorises every `*.obizee.com` host.
That is what makes a nudge email linking to `test.obizee.com/merchant/orders`
open the app instead of Safari, for all 231 merchant subdomains at once.

Proved on a device. `swcd` logged:

```
Beginning data task { domain: *.obizee.com, route: cdn }
Request for 'https://app-site-association.cdn-apple.com/a/v1/obizee.com'
  denied because the CDN told us to stop with HTTP status 404
```

Android is unaffected — it verifies per host, and those files are already live
and verified by Google's checker.

## Two blockers, both in the console

### 1. The apex does not serve this app

`obizee.com` answers 404/405 from a redirect-only host; only `www.obizee.com`
serves the build. Apple asks the apex and nothing is there.

> **Amplify Console → Hosting → Custom domains → obizee.com**
> Serve the branch on the apex rather than redirecting it to www — or, at
> minimum, route `/.well-known/*` on the apex to this app.

### 2. `trailingSlash: true` turns the file into a 301

`next.config.js` sets `output: 'export'` with `trailingSlash: true`, so an
**extensionless** path is treated as a directory:

```
GET https://www.obizee.com/.well-known/apple-app-site-association
  -> 301  location: /.well-known/apple-app-site-association/
```

`llms.txt` in the same folder serves fine because it has an extension. **Apple
refuses an association file that redirects**, so no `customHeaders` entry can
fix this — the content-type header in `amplify.yml` is necessary but not
sufficient.

> **Amplify Console → Hosting → Rewrites and redirects → Add rule**
>
> | Source | Target | Type |
> |---|---|---|
> | `/.well-known/apple-app-site-association` | `/.well-known/apple-app-site-association` | **200 (Rewrite)** |
>
> It must be a **200 rewrite**, not a 301/302.

## Verifying once both are done

```bash
curl -sI https://obizee.com/.well-known/apple-app-site-association
```

Must be `200`, `content-type: application/json`, **no `location` header**.
Then Apple's CDN, which is what the device actually reads:

```bash
curl -s https://app-site-association.cdn-apple.com/a/v1/obizee.com
```

Apple's CDN caches; allow up to a few hours, or test a debug build with
`applinks:*.obizee.com?mode=developer`, which bypasses the CDN and fetches
from the host directly.

## Until then

Nothing is broken. The email links to the merchant's own portal and opens in
the browser — exactly where it went before any of this existed. Only the
"opens the app instead" part is waiting.

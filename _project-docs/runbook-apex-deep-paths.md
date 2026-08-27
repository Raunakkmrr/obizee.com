# Runbook — fix the apex 404 on every path but `/`

**Written 2026-08-27 10:25 IST. Console work — needs your AWS login, I cannot do it.**

## The symptom

| URL | Now | Should be |
|---|---|---|
| `https://obizee.com/` | 301 → `https://www.obizee.com/` | same |
| `https://obizee.com/pricing/` | **404** | 301 → `https://www.obizee.com/pricing/` |
| `https://obizee.com/blog/` | **404** | 301 → `https://www.obizee.com/blog/` |

Every inbound link written without `www` dies unless it points at the bare root.
That is most links people type by hand, most links in WhatsApp forwards, and any
press or directory listing that drops the `www`.

## The cause

`www.obizee.com` resolves to `d1r7rhbxsmd0hi.cloudfront.net` — the Amplify
CloudFront distribution, which serves the site (`server: AmazonS3`,
`x-cache: Hit from cloudfront`).

`obizee.com` resolves to `3.33.251.168` and `15.197.225.128`. Those are a
registrar URL-forwarding service, not your distribution. That service answers
the bare root with a 301 and has no idea what `/pricing/` is, so everything
else falls through — the apex never reaches your origin at all.

This is why no change in this repository can fix it. The request is answered
before it gets anywhere near the build.

## The fix

In **AWS Amplify Console → your app → Hosting → Custom domains**:

1. Open the entry for `obizee.com`.
2. Ensure **both** are present as managed subdomains:
   - `www` → your branch (this already works)
   - the **root/apex** → set to **Redirect to `www.obizee.com`**
   Amplify's redirect is path-preserving, which the registrar forwarder is not.
3. Save, and let Amplify reissue the certificate — it covers `obizee.com` and
   `*.obizee.com`. Expect **15–45 minutes** while it validates.

Then in **Route 53 (or wherever `obizee.com` DNS lives)**:

4. **Delete** the apex `A` records pointing at `3.33.251.168` and
   `15.197.225.128`. These are the forwarding service and they win over
   anything Amplify sets while they exist.
5. Confirm the apex now has the **ALIAS/A record Amplify created**, pointing at
   the CloudFront distribution.
6. If the registrar has a separate "URL forwarding" or "domain redirect"
   toggle for `obizee.com`, **turn it off**. It is the thing answering today.

## Verify

Run this once DNS has propagated. All three must be `301` to the `www` URL with
the path intact:

```bash
for p in / /pricing/ /blog/ /how-to-create-online-store/; do printf "%-34s " "$p"; curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" "https://obizee.com$p"; done
```

## Afterwards

- Re-submit `https://www.obizee.com/sitemap.xml` in Search Console.
- Nothing in the repo needs changing: every canonical tag and every sitemap URL
  already points at `www`, so the apex only ever needs to redirect.

## Why it is worth doing

Not for ranking — `www` is already canonical everywhere. It is for the links
you do not control. Every one of them currently 404s, and a 404 from a
prospective merchant's first click costs the whole visit.

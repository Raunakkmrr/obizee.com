@.claude/obizee-cloud.md

# obizee.com — marketing site (Next.js, `output: export`)

## Hosting facts that decide most changes
- AWS Amplify app `d18rnjzeli4yk6` (ap-south-1), auto-builds on push to `main`.
- Static export: `next.config.js` cannot do redirects and `vercel.json` is not read.
  Redirects live only in the Amplify Console — moving a URL is a two-part job (code + a
  console step for Raunak). Env vars are compiled in at build time.
- A rebuilt page takes over the existing canonical URL; never ship a `-2` beside it.

## Verify
```bash
npm ci
npm run lint:eslint; echo "lint exit=$?"
npm run build; echo "build exit=$?"
npm run test:content-release; echo "content exit=$?"
```
Cloud sessions open PRs only.

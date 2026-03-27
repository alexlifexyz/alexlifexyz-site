# Deployment

## Deployment Target

Primary deployment target:

- `Cloudflare Pages`

Repo:

- `https://github.com/alexlifexyz/alexlifexyz-site`

## Current Deployment Model

This site is currently a static Astro site.

That means:

- build command generates static files into `dist/`
- Cloudflare Pages serves the built static output
- no backend service is required right now

## Recommended Path

Use `Git integration` first.

Reason:

- auto-deploy on every push to `main`
- simplest long-term workflow
- easiest to continue across multiple computers

## Cloudflare Pages Settings

When creating the Pages project in the Cloudflare dashboard, use:

- Framework preset: `Astro` if available, otherwise `None`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

## Node Version

This repo pins Node with:

- `.node-version`

Current value:

- `22.17.0`

Cloudflare Pages supports setting Node versions via `.node-version` or `NODE_VERSION`.

## Site URL

`astro.config.mjs` reads:

- `SITE_URL`

Current fallback:

- `https://alexai.top`

After your real domain is connected, set:

- `SITE_URL=https://alexai.top`

Recommended place:

- Cloudflare Pages project
- `Settings -> Environment variables`

## Git Integration Flow

### 1. Create the Pages project

In Cloudflare dashboard:

1. Go to `Workers & Pages`
2. `Create application`
3. `Pages`
4. `Import an existing Git repository`
5. Pick `alexlifexyz-site`

### 2. Configure build settings

Use:

- build command: `npm run build`
- output directory: `dist`

### 3. First deploy

Cloudflare will build from GitHub and create:

- `https://<project>.pages.dev`

### 4. Add custom domain

Then go to:

- `Pages project -> Custom domains`

For this project, use:

- primary domain: `alexai.top`
- optional redirect domain: `www.alexai.top`

If using:

- apex domain like `example.com`
  - the domain should be on Cloudflare
  - Cloudflare recommends the zone nameservers point to Cloudflare

- subdomain like `www.example.com` or `blog.example.com`
  - you can point a CNAME to `<project>.pages.dev`

## Direct Upload Fallback

If you do not want to wait for Git integration, use direct upload:

```bash
npm run cf:deploy
```

This runs:

1. `npm run build`
2. `npx wrangler pages deploy dist --project-name alexlifexyz-site`

Preview branch deploy:

```bash
npm run cf:deploy:branch
```

## Wrangler Config

This repo includes:

- `wrangler.jsonc`

Purpose:

- define the Pages project name
- define build output dir
- keep deploy configuration in source control

## What Is Still Manual

The following still requires Cloudflare account access:

- connecting GitHub repo to Pages
- first Pages project creation
- adding custom domain
- setting `SITE_URL`

## Deployment Checklist

- `npm install`
- `npm run check`
- `npm run build`
- connect repo in Cloudflare Pages
- verify `pages.dev` deployment
- add `alexai.top`
- optionally add `www.alexai.top`
- set `SITE_URL=https://alexai.top`
- redeploy once

## Useful Commands

```bash
npm run check
npm run build
npm run cf:deploy
npm run cf:deploy:branch
```

## References

- Astro deploy to Cloudflare:
  `https://docs.astro.build/en/guides/deploy/cloudflare/`
- Cloudflare Pages Astro guide:
  `https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/`
- Cloudflare Pages build configuration:
  `https://developers.cloudflare.com/pages/configuration/build-configuration/`
- Cloudflare Pages build image:
  `https://developers.cloudflare.com/pages/configuration/build-image/`
- Cloudflare Pages custom domains:
  `https://developers.cloudflare.com/pages/configuration/custom-domains/`
- Cloudflare Pages Git integration:
  `https://developers.cloudflare.com/pages/get-started/git-integration/`
- Cloudflare Pages Direct Upload:
  `https://developers.cloudflare.com/pages/get-started/direct-upload/`
- Cloudflare Pages Wrangler configuration:
  `https://developers.cloudflare.com/pages/functions/wrangler-configuration/`

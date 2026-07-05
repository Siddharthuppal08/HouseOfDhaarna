# Deploying to houseofdhaarna.com

This site deploys automatically via **GitHub Pages** when you push to `main`.

## DNS setup (one-time)

Point your domain to GitHub Pages. In your domain registrar (where you bought houseofdhaarna.com), update DNS:

### Apex domain (`houseofdhaarna.com`)

Add these **A records**:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### WWW (optional)

| Type | Name | Value |
|------|------|-------|
| CNAME | www | Siddharthuppal08.github.io |

## GitHub repo settings

1. Open https://github.com/Siddharthuppal08/HouseOfDhaarna/settings/pages
2. Source: **GitHub Actions**
3. Custom domain: **houseofdhaarna.com**
4. Enable **Enforce HTTPS**

The `public/CNAME` file in this repo tells GitHub Pages which domain to use.

## Manual deploy trigger

Push to `main`, or run the workflow manually from the Actions tab.

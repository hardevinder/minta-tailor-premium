# Google Indexing Checklist — Minta Tailor

Canonical domain: `https://mintatailor.com`

## Already implemented in code

- Index/follow metadata on public pages
- Self-referencing canonical URLs
- `robots.txt` allowing crawlers
- `sitemap.xml` with all public routes
- LocalBusiness JSON-LD structured data
- Open Graph/Twitter metadata
- Permanent redirect from `www.mintatailor.com` to `mintatailor.com`
- Optional Google Search Console HTML-tag verification through an environment variable

## Production environment

Set:

```bash
NEXT_PUBLIC_SITE_URL=https://mintatailor.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=PASTE_TOKEN_HERE
```

For `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, paste only the token from Google's `content="..."` value.

## After deployment

Confirm these pages open successfully:

- `https://mintatailor.com/`
- `https://mintatailor.com/robots.txt`
- `https://mintatailor.com/sitemap.xml`

Then in Google Search Console:

1. Add/verify the `mintatailor.com` property.
2. Submit `https://mintatailor.com/sitemap.xml`.
3. Inspect `https://mintatailor.com/` and click **Request indexing**.
4. Repeat URL Inspection for the main Services, Gallery, About and Contact pages if desired.
5. Monitor Page Indexing for crawl/indexing issues.

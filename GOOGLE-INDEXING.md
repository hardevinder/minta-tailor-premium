# Google Indexing Checklist — Minta Tailor

Canonical domain: `https://mintatailor.in`

## Already implemented in code

- Index/follow metadata on public pages
- Self-referencing canonical URLs
- `robots.txt` allowing crawlers
- `sitemap.xml` with all public routes
- LocalBusiness + WebSite JSON-LD structured data
- Service + Breadcrumb JSON-LD on service pages
- Local-search-focused page titles, H1s and visible content
- Open Graph/Twitter metadata
- Permanent redirects from `mintatailor.com`, `www.mintatailor.com` and `www.mintatailor.in` to `mintatailor.in`
- Optional Google Search Console HTML-tag verification through an environment variable
- `/seo-check` internal diagnostic page (noindex and intentionally excluded from sitemap)

## Production environment

Set:

```bash
NEXT_PUBLIC_SITE_URL=https://mintatailor.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=PASTE_TOKEN_HERE
```

For `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, paste only the token from Google's `content="..."` value.

## After deployment

Confirm these URLs open successfully:

- `https://mintatailor.in/`
- `https://mintatailor.in/robots.txt`
- `https://mintatailor.in/sitemap.xml`
- `https://mintatailor.in/seo-check` (internal diagnostic; it is noindex)

Then in Google Search Console:

1. Add/verify the `mintatailor.in` property.
2. Submit `https://mintatailor.in/sitemap.xml`.
3. Inspect `https://mintatailor.in/` and click **Request indexing**.
4. Request indexing for the strongest service pages:
   - `/services/bespoke-pant-coat`
   - `/services/wedding-sherwani`
   - `/services/kurta-pajama`
   - `/services/shirts-trousers`
5. Monitor Performance > Search results for actual queries, impressions, clicks and average position.

## Important

The `meta keywords` tag is kept as a diagnostic/reference field, but Google Search does not use it for ranking. Ranking work in this patch is therefore focused on page titles, H1s, visible local content, internal links, structured data, crawlability and service-specific pages.

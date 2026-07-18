# Trio Renseriet backlog

This backlog records real planned outcomes and intentionally deferred SEO work. Generated audit reports, browser captures, build output, and local logs do not belong in the repository.

Status: `open` means work remains, `deferred` means it is intentionally postponed, and `done` means the repository implementation is complete. Deployment-specific items must still be checked against the live site after publishing.

## Open

### Publish and verify the static site

- [ ] Publish the current `out/` export and verify `/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, both price pages, and representative service pages on `https://www.trio-renseri.dk`.
- [ ] Confirm the host serves trailing-slash directory routes, a real 404, correct text/XML MIME types, HTTPS redirects, and suitable security headers such as HSTS, CSP, `X-Content-Type-Options`, and `Referrer-Policy`.
- [ ] Submit `/sitemap.xml` in Google Search Console and validate deployed metadata, JSON-LD, indexability, and canonical URLs.
- [ ] Collect production Lighthouse, Core Web Vitals, Search Console, and CrUX data after deployment; local timings are not production field data.

### Validate business facts and local SEO

- [ ] Verify the business name, address, phone, email, opening hours, coordinates, service areas, map link, social profiles, and the `1954`/`30 years of experience` claims against the current business facts and Google Business Profile.
- [ ] Recheck NAP consistency and the corrected contact links in the deployed HTML.
- [ ] Add practical visit, parking, accessibility, drop-off, or delivery details only when the business can substantiate them.

### Decide the service-hub architecture

- [ ] Decide whether `/services/` and `/tojrens/` should remain as distinct hubs with clearly different search intent, or whether one should become canonical and the other should be redirected or removed from the sitemap.
- [ ] If both hubs remain, keep their internal links and content intent clearly differentiated.

### Keep schema and content data aligned

- [ ] Add a stable business logo/schema image only if the correct asset is available and can be kept current.
- [ ] Add `Offer`/`OfferCatalog` data only if it remains synchronized with the visible YAML-driven prices.
- [ ] Validate the deployed structured data with Google’s Rich Results Test.

## Deferred

These items are intentionally postponed by the site owner:

- [ ] Expand the thin service-page copy with verifiable materials, process, limitations, turnaround, pricing/estimate guidance, service area, preparation advice, and calls to action.
- [ ] Further compress or replace the homepage hero video; keep the current poster fallback.
- [ ] Add reviews or testimonials. Do not add aggregate-rating schema without genuine, attributable evidence and permission.

## Done

### Technical SEO and discovery

- [x] Added route-specific titles, descriptions, canonical URLs, Open Graph metadata, Danish language metadata, local-business JSON-LD, and aligned visible headings.
- [x] Added direct internal discovery for `/tojrens/`, `/services/daabskjolevask/`, and `/services/sofa/` from the services hub.
- [x] Replaced the duplicate checked-in sitemap with a build-generated sitemap sourced from the route manifest.
- [x] Added and verified static `robots.txt` and `llms.txt`.
- [x] Removed breadcrumb JSON-LD that was not represented by visible breadcrumbs.

### Images, accessibility, and copy

- [x] Added `<picture>`/`srcSet` delivery and committed 480/768/1200 WebP variants for referenced content images.
- [x] Corrected the identified Danish spelling, naming, image-alt, NAP, and malformed `mailto:` issues.
- [x] Added explicit contact-form labels and safe `noopener noreferrer` handling for new-tab links.

### Contact conversion

- [x] Replaced the placeholder contact-form alert with a static POST to Static Forms, including a honeypot field and build-time API-key configuration.
- [x] Documented the Static Forms setup in `README.md` and added `.env.example` without committing a real key.
- [x] Built locally with the account API key and completed a successful test submission through Static Forms.

## Maintenance rules

- Keep completed, open, and intentionally deferred SEO outcomes here rather than in generated audit output.
- Keep implementation detail in code and verification scripts; update this backlog when an outcome changes state.
- Regenerate `out/` locally when needed, but do not commit it or other generated audit/browser artifacts.

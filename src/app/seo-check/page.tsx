import type { Metadata } from "next";
import Link from "next/link";
import { business, services } from "@/data/site";
import { defaultKeywords, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "SEO Check",
  description: "Internal SEO diagnostics for Minta Tailor and Drapers.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/seo-check" },
};

const pages = [
  {
    path: "/",
    title: `${business.name} | Gents Tailor in Kharar`,
    h1: "Premium Gents Tailor in Kharar.",
    targets: ["gents tailor in Kharar", "tailor in Kharar", "pant coat tailor Kharar", "sherwani tailor Kharar"],
  },
  {
    path: "/services",
    title: `Gents Tailoring Services in Kharar | ${business.shortName}`,
    h1: "Made around your measurements, not a standard size.",
    targets: ["tailoring services Kharar", "gents tailoring Kharar", "custom stitching Kharar"],
  },
  ...services.map((service) => ({
    path: `/services/${service.slug}`,
    title: `${service.seoTitle} | ${business.shortName}`,
    h1: service.seoHeading,
    targets: service.seoKeywords,
  })),
];

export default function SeoCheckPage() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <p className="eyebrow">Internal diagnostic · noindex</p>
        <h1 className="font-display mt-4 text-5xl md:text-6xl">SEO check</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#6f685f]">
          This page is intentionally excluded from Google. Use it after deployment to verify the target phrase, H1, title and canonical URL for the main local-search pages.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="border border-black/10 bg-white p-6"><p className="eyebrow">Canonical domain</p><p className="mt-3 break-all font-semibold">{siteUrl}</p></div>
          <div className="border border-black/10 bg-white p-6"><p className="eyebrow">Business</p><p className="mt-3 font-semibold">{business.name}</p><p className="mt-2 text-sm text-[#746e64]">{business.address}</p></div>
          <div className="border border-black/10 bg-white p-6"><p className="eyebrow">Base target phrases</p><p className="mt-3 text-sm leading-7 text-[#746e64]">{defaultKeywords.join(" · ")}</p></div>
        </div>

        <div className="mt-12 overflow-x-auto border border-black/10 bg-white">
          <table className="w-full min-w-[980px] border-collapse text-left text-sm">
            <thead className="bg-[#171512] text-white">
              <tr><th className="p-4">Page</th><th className="p-4">Title</th><th className="p-4">H1</th><th className="p-4">Target phrases</th><th className="p-4">Canonical</th></tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.path} className="border-t border-black/10 align-top">
                  <td className="p-4 font-semibold"><Link href={page.path} className="text-[#8f6833] underline">{page.path}</Link></td>
                  <td className="p-4">{page.title}</td>
                  <td className="p-4">{page.h1}</td>
                  <td className="p-4 text-[#746e64]">{page.targets.join(" · ")}</td>
                  <td className="p-4 break-all text-[#746e64]">{siteUrl}{page.path === "/" ? "" : page.path}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 border border-[#b78a46]/30 bg-[#efe8dc] p-7">
          <h2 className="font-display text-3xl">After deployment</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#5f594f]">
            <li>Open /robots.txt and confirm the sitemap points to mintatailor.in.</li>
            <li>Open /sitemap.xml and confirm the service pages are listed.</li>
            <li>Submit sitemap.xml in Google Search Console.</li>
            <li>Use URL Inspection for the homepage and top service pages, then request indexing.</li>
            <li>Track real impressions and queries in Search Console instead of relying on the meta-keywords tag.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/seo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#BBD5DA]/60 bg-[#F5F5F5] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.legalName}</p>
          <p className="mt-1 text-sm text-slate-600">
            {siteConfig.title} · {siteConfig.location.city}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            © {year} {siteConfig.name}
          </p>
        </div>

        <nav aria-label="Дополнительные ссылки" className="flex flex-wrap gap-4 text-sm">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#FF0000]"
          >
            GitHub
          </a>
          <Link href="/seo-check" className="text-slate-600 hover:text-[#FF0000]">
            SEO-проверка
          </Link>
          <a href={getSiteUrl("/sitemap.xml")} className="text-slate-600 hover:text-[#FF0000]">
            Sitemap
          </a>
        </nav>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/site";
import { buildPageMetadata, getSeoChecklist, getSiteUrl } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "SEO-проверка",
  description:
    "Чеклист SEO-оптимизации сайта Kabakov Studio: что настроено, что проверить вручную и ссылки на инструменты мониторинга.",
  path: "/seo-check",
});

const statusLabels = {
  ok: { label: "Готово", className: "bg-emerald-100 text-emerald-800" },
  manual: { label: "Проверить", className: "bg-amber-100 text-amber-800" },
  config: { label: "Настроить", className: "bg-red-100 text-red-800" },
};

export default function SeoCheckPage() {
  const checklist = getSeoChecklist();
  const categories = [...new Set(checklist.map((item) => item.category))];

  const okCount = checklist.filter((i) => i.status === "ok").length;
  const total = checklist.length;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#F5F5F5] py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link href="/" className="text-sm font-medium text-[#FF0000] hover:underline">
            ← На главную
          </Link>

          <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">SEO-проверка</h1>
          <p className="mt-4 text-lg text-slate-600">
            Эта страница помогает отслеживать состояние SEO. Автоматически настроено{" "}
            <strong>{okCount} из {total}</strong> пунктов.
          </p>

          <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-[#BBD5DA]/60">
            <h2 className="text-lg font-semibold text-slate-900">Текущая конфигурация</h2>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-slate-500">Домен</dt>
                <dd className="font-mono font-medium text-slate-900">{siteConfig.url}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Sitemap</dt>
                <dd>
                  <a href={getSiteUrl("/sitemap.xml")} className="font-mono text-[#FF0000] hover:underline">
                    {getSiteUrl("/sitemap.xml")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Robots</dt>
                <dd>
                  <a href={getSiteUrl("/robots.txt")} className="font-mono text-[#FF0000] hover:underline">
                    {getSiteUrl("/robots.txt")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Язык</dt>
                <dd className="font-medium text-slate-900">{siteConfig.language}</dd>
              </div>
            </dl>
          </div>

          {categories.map((category) => (
            <section key={category} className="mt-10" aria-labelledby={`cat-${category}`}>
              <h2 id={`cat-${category}`} className="text-xl font-bold text-slate-900">
                {category}
              </h2>
              <ul className="mt-4 space-y-4">
                {checklist
                  .filter((item) => item.category === category)
                  .map((item) => {
                    const status = statusLabels[item.status];
                    return (
                      <li
                        key={item.id}
                        className="rounded-2xl border border-[#BBD5DA]/60 bg-white p-5"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h3 className="font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-1 text-slate-600">{item.description}</p>
                            {item.hint && (
                              <p className="mt-2 text-sm text-slate-500">{item.hint}</p>
                            )}
                          </div>
                          <span
                            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
                          >
                            {status.label}
                          </span>
                        </div>
                        {item.href && (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="mt-3 inline-block text-sm font-semibold text-[#FF0000] hover:underline"
                          >
                            Открыть инструмент →
                          </a>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </section>
          ))}

          <section className="mt-12 rounded-2xl bg-[#DFF1F1]/60 p-6" aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="text-xl font-bold text-slate-900">
              Внешние инструменты для регулярной проверки
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Google Search Console", "https://search.google.com/search-console"],
                ["Яндекс Вебмастер", "https://webmaster.yandex.ru/"],
                ["PageSpeed Insights", "https://pagespeed.web.dev/"],
                ["Rich Results Test", "https://search.google.com/test/rich-results"],
                ["Schema Validator", "https://validator.schema.org/"],
                ["Open Graph Preview", "https://www.opengraph.xyz/"],
              ].map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-800 ring-1 ring-[#BBD5DA] hover:ring-[#FF0000]"
                  >
                    {name} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

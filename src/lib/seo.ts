import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function getSiteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return path ? `${base}${normalizedPath}` : base;
}

export function buildPageMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const title = options.title
    ? `${options.title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`;
  const description = options.description ?? siteConfig.description;
  const url = getSiteUrl(options.path ?? "");
  const keywords = options.keywords ?? [...siteConfig.keywords];

  return {
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.owner, url: siteConfig.url }],
    creator: siteConfig.owner,
    publisher: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    category: "technology",
  };
}

export type SeoCheckItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  status: "ok" | "manual" | "config";
  href?: string;
  hint?: string;
};

export function getSeoChecklist(): SeoCheckItem[] {
  const siteUrl = siteConfig.url;

  return [
    {
      id: "ssr",
      category: "Техническое",
      title: "Server-Side Rendering (SSR)",
      description: "Страницы рендерятся на сервере — контент доступен поисковикам без JavaScript.",
      status: "ok",
    },
    {
      id: "title",
      category: "Meta",
      title: "Title и Description",
      description: "Уникальные title и meta description на каждой странице.",
      status: "ok",
      href: siteUrl,
    },
    {
      id: "canonical",
      category: "Meta",
      title: "Canonical URL",
      description: "Тег link rel=canonical предотвращает дублирование контента.",
      status: "ok",
    },
    {
      id: "robots",
      category: "Индексация",
      title: "robots.txt",
      description: "Файл robots.txt управляет доступом краулеров к сайту.",
      status: "ok",
      href: getSiteUrl("/robots.txt"),
    },
    {
      id: "sitemap",
      category: "Индексация",
      title: "sitemap.xml",
      description: "Карта сайта помогает поисковикам находить все страницы.",
      status: "ok",
      href: getSiteUrl("/sitemap.xml"),
    },
    {
      id: "jsonld",
      category: "Structured Data",
      title: "JSON-LD разметка",
      description: "Schema.org: Person, ProfessionalService, WebSite — для rich snippets.",
      status: "ok",
      href: "https://search.google.com/test/rich-results",
      hint: "Проверьте URL сайта в Google Rich Results Test",
    },
    {
      id: "semantic",
      category: "Контент",
      title: "Семантическая HTML-разметка",
      description: "header, main, section, article, nav, footer и иерархия h1–h3.",
      status: "ok",
    },
    {
      id: "lang",
      category: "Локализация",
      title: "Атрибут lang=ru",
      description: "Язык страницы указан для корректной индексации русскоязычного контента.",
      status: "ok",
    },
    {
      id: "og",
      category: "Social",
      title: "Open Graph и Twitter Cards",
      description: "Мета-теги для корректного отображения при шаринге в соцсетях.",
      status: "ok",
      href: "https://www.opengraph.xyz/",
      hint: "Вставьте URL сайта для проверки превью",
    },
    {
      id: "manifest",
      category: "PWA",
      title: "Web App Manifest",
      description: "manifest.json для мобильных устройств и PWA.",
      status: "ok",
      href: getSiteUrl("/manifest.webmanifest"),
    },
    {
      id: "performance",
      category: "Core Web Vitals",
      title: "Производительность",
      description: "LCP, INP, CLS — метрики Google Page Experience.",
      status: "manual",
      href: "https://pagespeed.web.dev/",
      hint: "Запустите PageSpeed Insights после деплоя",
    },
    {
      id: "search-console",
      category: "Мониторинг",
      title: "Google Search Console",
      description: "Подключите сайт для отслеживания индексации и ошибок.",
      status: "manual",
      href: "https://search.google.com/search-console",
      hint: "Добавьте свойство и отправьте sitemap.xml",
    },
    {
      id: "yandex-webmaster",
      category: "Мониторинг",
      title: "Яндекс Вебмастер",
      description: "Обязательно для продвижения в Яндексе (Россия).",
      status: "manual",
      href: "https://webmaster.yandex.ru/",
      hint: "Добавьте сайт и загрузите sitemap",
    },
    {
      id: "verification",
      category: "Мониторинг",
      title: "Коды верификации",
      description: "Google / Yandex verification через env-переменные.",
      status: "config",
      hint: "Задайте GOOGLE_SITE_VERIFICATION и YANDEX_VERIFICATION в .env",
    },
    {
      id: "domain",
      category: "Конфигурация",
      title: "Домен (NEXT_PUBLIC_SITE_URL)",
      description: "Canonical URL и sitemap строятся от реального домена.",
      status: siteConfig.url.includes("example.com") ? "config" : "ok",
      hint:
        siteConfig.url.includes("example.com")
          ? "Замените example.com на ваш домен в .env"
          : `Текущий домен: ${siteConfig.url}`,
    },
  ];
}

export function buildJsonLd() {
  const siteUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteUrl,
        email: siteConfig.contacts.email,
        telephone: siteConfig.contacts.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        sameAs: [siteConfig.links.github],
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.owner,
        jobTitle: "Fullstack-разработчик",
        url: siteUrl,
        worksFor: { "@id": `${siteUrl}/#organization` },
        sameAs: [siteConfig.links.github],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteUrl,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: {
          "@type": "Country",
          name: siteConfig.location.countryName,
        },
        serviceType: siteConfig.services.map((s) => s.name),
        priceRange: "$$",
      },
    ],
  };
}

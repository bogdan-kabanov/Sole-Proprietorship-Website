import { siteConfig } from "@/config/site";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-[#F5F5F5] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Частые вопросы
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Ответы на то, что обычно спрашивают перед заказом разработки.
        </p>

        <dl className="mt-10 space-y-4">
          {siteConfig.faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-[#BBD5DA]/60 bg-white p-6"
            >
              <dt className="text-lg font-semibold text-slate-900">{item.question}</dt>
              <dd className="mt-2 text-slate-600">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import { siteConfig } from "@/config/site";

export function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-heading" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="benefits-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Почему заказывают у нас
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Не просто «сделать сайт», а решить бизнес-задачу: привлечь клиентов, автоматизировать
          процессы, продавать онлайн.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-[#BBD5DA]/60 bg-[#F5F5F5] p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from "@/config/site";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-[#F5F5F5] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 id="services-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Услуги
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Разрабатываю программы любой сложности — под задачи вашего бизнеса, а не «для галочки».
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {siteConfig.services.map((service) => (
            <article
              key={service.name}
              className="flex flex-col rounded-2xl border border-[#BBD5DA]/60 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{service.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Входит в услугу: ${service.name}`}>
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-[#DFF1F1] px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-[#FF0000] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Обсудить ваш проект →
          </a>
        </p>
      </div>
    </section>
  );
}

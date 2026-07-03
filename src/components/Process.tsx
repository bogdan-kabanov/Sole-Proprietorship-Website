import { siteConfig } from "@/config/site";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-[#DFF1F1]/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="process-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Как проходит работа
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Простой и понятный процесс — без лишней бюрократии.
        </p>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.process.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#BBD5DA]/60"
            >
              <span className="text-3xl font-bold text-[#FF0000]/30">{item.step}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

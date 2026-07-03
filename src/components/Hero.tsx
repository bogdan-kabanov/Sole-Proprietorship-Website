import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F5] via-[#DFF1F1] to-[#BBD5DA]/40"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-[#BBD5DA]">
            {siteConfig.location.city} и вся Россия · Работа по договору
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {siteConfig.title}{" "}
            <span className="text-[#FF0000]">для вашего бизнеса</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            Создам сайт, веб-приложение или Telegram-магазин под ваши задачи — от идеи до
            запуска. Один специалист, полный цикл, SEO из коробки.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#FF0000] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Получить расчёт стоимости
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-[#BBD5DA] bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400"
            >
              Смотреть услуги
            </a>
          </div>
        </div>

        <aside className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-[#BBD5DA]/50 backdrop-blur-sm lg:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Что вы получаете
          </h2>
          <ul className="mt-4 space-y-3 text-slate-800">
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 text-[#FF0000]">●</span>
              Готовый продукт, а не «шаблон с доработками»
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 text-[#FF0000]">●</span>
              SEO и быстрая загрузка с первого дня
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 text-[#FF0000]">●</span>
              Адаптив под телефоны и планшеты
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 text-[#FF0000]">●</span>
              Поддержка после запуска
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

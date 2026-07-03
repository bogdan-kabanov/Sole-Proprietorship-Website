import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[#DFF1F1]/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#BBD5DA]/60 sm:p-12">
          <h2 id="contact-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Обсудим ваш проект
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Опишите задачу — отвечу с оценкой сроков и стоимости в течение рабочего дня.
            Первая консультация бесплатная. Работаем удалённо по всей России.
          </p>

          <address className="mt-8 not-italic">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li className="rounded-2xl bg-[#F5F5F5] p-4">
                <span className="block text-sm font-medium text-slate-500">Email</span>
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="mt-1 block font-semibold text-slate-900 hover:text-[#FF0000]"
                >
                  {siteConfig.contacts.email}
                </a>
              </li>
              <li className="rounded-2xl bg-[#F5F5F5] p-4">
                <span className="block text-sm font-medium text-slate-500">Телефон</span>
                <a
                  href={`tel:${siteConfig.contacts.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="mt-1 block font-semibold text-slate-900 hover:text-[#FF0000]"
                >
                  {siteConfig.contacts.phone}
                </a>
              </li>
              <li className="rounded-2xl bg-[#F5F5F5] p-4">
                <span className="block text-sm font-medium text-slate-500">Telegram</span>
                <a
                  href={siteConfig.contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-semibold text-slate-900 hover:text-[#FF0000]"
                >
                  Написать в Telegram
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
}

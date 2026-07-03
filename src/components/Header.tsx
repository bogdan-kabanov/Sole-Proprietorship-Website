import Link from "next/link";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#process", label: "Как работаем" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#BBD5DA]/60 bg-[#F5F5F5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex flex-col">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            {siteConfig.name}
          </span>
          <span className="text-xs text-slate-600">{siteConfig.legalName}</span>
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#FF0000]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#FF0000] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Заказать
        </a>
      </div>
    </header>
  );
}

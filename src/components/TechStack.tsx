import { siteConfig } from "@/config/site";

export function TechStack() {
  return (
    <section aria-labelledby="tech-heading" className="border-y border-[#BBD5DA]/40 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="tech-heading" className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Технологии в работе
        </h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {siteConfig.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-[#F5F5F5] px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-[#BBD5DA]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

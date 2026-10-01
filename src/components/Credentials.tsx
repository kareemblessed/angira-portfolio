import { ArrowUpRight, BadgeCheck, GraduationCap } from "lucide-react";
import Section, { Reveal } from "@/components/Section";
import { certifications, education } from "@/data/portfolio";

const Credentials = () => {
  return (
    <Section
      id="credentials"
      index="04"
      label="Credentials"
      title="Certifications & education"
      intro="Every certification links to its public verification page."
    >
      <div className="group/list grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.url} delay={(i % 2) * 0.06}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="surface group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:border-primary/40 lg:group-hover/list:opacity-60 lg:hover:!opacity-100"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="eyebrow">{cert.issuer}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-4 flex-1 text-pretty font-display text-base font-semibold leading-snug">{cert.title}</h3>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-foreground/75">
                  {cert.code}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Verify
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-4">
        <div className="surface rounded-2xl p-6 md:p-8">
          <div className="flex flex-wrap items-start gap-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="eyebrow">Education · {education.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{education.degree}</h3>
              <p className="mt-1 text-muted-foreground">
                {education.specialisation} · <span className="text-foreground/85">{education.school}</span>
              </p>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 border-t border-border pt-6 md:grid-cols-3">
            {education.points.map((p) => (
              <li key={p} className="relative pl-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-primary" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
};

export default Credentials;

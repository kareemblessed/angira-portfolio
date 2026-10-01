import { ArrowUpRight, GraduationCap } from "lucide-react";
import Section, { Reveal } from "@/components/Section";
import { certifications, education } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Credentials = () => {
  return (
    <Section
      id="credentials"
      index="04"
      label="Credentials"
      title="Certifications & education"
      intro="Every certification links to its public verification page."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.url} delay={(i % 3) * 0.06}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5",
                cert.featured
                  ? "border-border bg-card hover:border-primary/40"
                  : "border-dashed border-border hover:border-foreground/25 hover:bg-card"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="eyebrow">{cert.issuer}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-6 flex-1 text-pretty font-display text-lg font-semibold leading-snug tracking-tight">
                {cert.title}
              </h3>
              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {cert.code}
                </span>
                <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                  Verify credential
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Education */}
      <Reveal className="mt-6">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-12 md:p-10">
          <div className="md:col-span-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <p className="eyebrow mt-6">Education · {education.period}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{education.degree}</h3>
            <p className="mt-1 text-muted-foreground">{education.specialisation}</p>
            <p className="mt-4 font-medium">{education.school}</p>
          </div>
          <ul className="space-y-4 self-end md:col-span-7">
            {education.points.map((p) => (
              <li key={p} className="relative border-t border-border pl-5 pt-4 text-pretty leading-relaxed text-muted-foreground">
                <span className="absolute left-0 top-[1.7em] h-px w-2.5 bg-primary" />
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

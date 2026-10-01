import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section, { Reveal } from "@/components/Section";
import { experience, type Experience as ExperienceItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const VISIBLE = 4;

const Role = ({ item, current }: { item: ExperienceItem; current: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const hidden = item.highlights.length - VISIBLE;
  const shown = expanded ? item.highlights : item.highlights.slice(0, VISIBLE);

  return (
    <article className="grid gap-4 rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] sm:grid-cols-[10.5rem_1fr] sm:gap-8 md:p-7 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
      <div className="pt-1">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:whitespace-nowrap">{item.period}</p>
        {current && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Current
          </span>
        )}
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold leading-snug">
          {item.role} <span className="text-primary">·</span> <span className="text-foreground/80">{item.company}</span>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {item.location}
          {item.type && <> · {item.type}</>}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.metrics.map((m) => (
            <span key={m} className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              {m}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2.5">
          {shown.map((h) => (
            <li key={h} className="relative pl-5 text-pretty text-[15px] leading-relaxed text-muted-foreground">
              <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-primary" />
              {h}
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : `Show ${hidden} more`}
            <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
          </button>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.stack.map((s) => (
            <span key={s} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <Section id="experience" index="02" label="Experience" title="Work experience">
      <div className="group/list -mx-5 space-y-2 md:-mx-7">
        {experience.map((item, i) => (
          <Reveal key={item.company + item.period} delay={i * 0.05}>
            <Role item={item} current={item.period.includes("Present")} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

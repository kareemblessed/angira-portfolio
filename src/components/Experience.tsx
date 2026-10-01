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
    <article className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
      {/* Meta */}
      <div className="md:col-span-4">
        <p className="text-sm font-medium text-muted-foreground">{item.period}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight">{item.company}</h3>
        <p className="mt-1.5 text-muted-foreground">
          {item.location}
          {item.type && <> · {item.type}</>}
        </p>
        {current && (
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Current
          </span>
        )}
      </div>

      {/* Body */}
      <div className="md:col-span-8">
        <p className="font-display text-lg font-semibold">{item.role}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.metrics.map((m) => (
            <span
              key={m}
              className="rounded-md border border-border bg-card px-2.5 py-1 text-[13px] text-foreground/90"
            >
              {m}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-3">
          {shown.map((h) => (
            <li key={h} className="relative pl-5 text-pretty leading-relaxed text-muted-foreground">
              <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-primary" />
              {h}
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : `Show ${hidden} more`}
            <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
          </button>
        )}

        <p className="mt-6 text-[13px] text-muted-foreground/80">{item.stack.join("  ·  ")}</p>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Work experience"
    >
      <div className="border-b border-border">
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

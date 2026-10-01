import Section, { Reveal } from "@/components/Section";
import { skillGroups } from "@/data/portfolio";

const Skills = () => {
  return (
    <Section
      id="toolkit"
      index="05"
      label="Skills"
      title="Skills"
    >
      <div className="border-b border-border">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.03}>
            <div className="grid gap-4 border-t border-border py-6 md:grid-cols-12 md:gap-10">
              <h3 className="font-display text-lg font-medium tracking-tight md:col-span-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2 md:col-span-9">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

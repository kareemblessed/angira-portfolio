import Section, { Reveal } from "@/components/Section";
import { skillGroups } from "@/data/portfolio";

const Skills = () => {
  return (
    <Section id="toolkit" index="05" label="Skills" title="Skills">
      <div className="divide-y divide-border border-y border-border">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.03}>
            <div className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <h3 className="pt-1 font-display text-[15px] font-semibold">{group.label}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-[13px] text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary"
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

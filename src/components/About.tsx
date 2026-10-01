import { Bot, Network, Workflow } from "lucide-react";
import Section, { Reveal } from "@/components/Section";
import { focusAreas, profile } from "@/data/portfolio";

const icons = [Workflow, Network, Bot];

const About = () => {
  return (
    <Section id="about" index="01" label="About" title="About me">
      <Reveal>
        <p className="text-pretty text-lg leading-relaxed text-foreground/85 md:text-xl md:leading-relaxed">
          {profile.summary}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-3">
        {focusAreas.map((area, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={area.title} delay={i * 0.08}>
              <div className="surface group grid gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40 sm:grid-cols-[2.5rem_1fr] md:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                <h3 className="font-display text-lg font-semibold">{area.title}</h3>
                <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-muted-foreground">{area.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {area.tools.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-foreground/75">
                      {t}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default About;

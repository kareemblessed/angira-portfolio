import { Bot, Network, Workflow } from "lucide-react";
import Section, { Reveal } from "@/components/Section";
import { focusAreas, profile } from "@/data/portfolio";

const icons = [Workflow, Network, Bot];

const About = () => {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="About me"
    >
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-pretty text-xl leading-relaxed text-foreground/90 md:text-[1.35rem]">{profile.summary}</p>
        </Reveal>

        <div className="md:col-span-7">
          <div className="divide-y divide-border border-y border-border">
            {focusAreas.map((area, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={area.title} delay={i * 0.08}>
                  <div className="group grid gap-4 py-7 sm:grid-cols-[3rem_1fr]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-primary transition-colors group-hover:border-primary/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-tight">{area.title}</h3>
                      <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{area.body}</p>
                      <p className="mt-4 font-mono text-xs text-muted-foreground/80">{area.tools.join("  ·  ")}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

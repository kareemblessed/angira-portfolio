import { ArrowUpRight, Github } from "lucide-react";
import Section, { Reveal } from "@/components/Section";
import { featuredProjects, otherProjects, type FeaturedProject } from "@/data/portfolio";

const Spec = ({ project }: { project: FeaturedProject }) => (
  <div className="overflow-hidden rounded-xl border border-border bg-background font-mono text-[12.5px]">
    <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
      <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
      <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
      <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
      <span className="ml-2 truncate text-[11px] text-muted-foreground">
        {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.spec
      </span>
    </div>
    <dl className="divide-y divide-border">
      {project.spec.map((row) => (
        <div key={row.label} className="flex items-baseline justify-between gap-4 px-4 py-3">
          <dt className="text-muted-foreground">{row.label}</dt>
          <dd className="text-right text-foreground">{row.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const Featured = ({ project, index }: { project: FeaturedProject; index: number }) => (
  <article className="surface group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-primary/40 md:p-8">
    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
    <div className="relative">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <p className="eyebrow">
          <span className="text-primary">0{index + 1}</span>
          <span className="mx-2 opacity-40">—</span>
          {project.kind}
        </p>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3.5 text-xs font-medium transition-colors hover:bg-secondary"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-3.5 text-xs font-medium text-background transition-opacity hover:opacity-90"
            >
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold md:text-3xl">{project.title}</h3>
      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-7 grid gap-6 md:grid-cols-2">
        <ul className="space-y-3">
          {project.outcomes.map((o) => (
            <li key={o} className="relative pl-5 text-pretty text-[15px] leading-relaxed text-foreground/85">
              <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-primary" />
              {o}
            </li>
          ))}
        </ul>
        <Spec project={project} />
      </div>

      <div className="mt-7 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
            {s}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <Section id="work" index="03" label="Projects" title="Projects">
      <div className="space-y-5">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.title}>
            <Featured project={p} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-5 mt-14 flex items-end justify-between gap-6">
        <h3 className="font-display text-xl font-semibold">More projects</h3>
        <p className="eyebrow">{otherProjects.length} projects</p>
      </Reveal>

      <div className="group/list grid gap-4 sm:grid-cols-2">
        {otherProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.06}>
            <article className="surface flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 lg:group-hover/list:opacity-60 lg:hover:!opacity-100">
              <div className="flex items-baseline gap-2">
                <p className="font-display text-2xl font-semibold text-primary">{p.metric}</p>
                <p className="text-sm text-muted-foreground">{p.metricLabel}</p>
              </div>
              <h4 className="mt-5 font-display text-base font-semibold">{p.title}</h4>
              <p className="mt-1.5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-foreground/75">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

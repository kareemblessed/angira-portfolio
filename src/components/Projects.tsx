import { ArrowUpRight, Github } from "lucide-react";
import Section, { Reveal } from "@/components/Section";
import { featuredProjects, otherProjects, type FeaturedProject } from "@/data/portfolio";

const Spec = ({ project }: { project: FeaturedProject }) => (
  <div className="overflow-hidden rounded-2xl border border-border bg-background font-mono text-[13px]">
    <div className="flex items-center gap-2 border-b border-border px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
      <span className="ml-3 text-xs text-muted-foreground">
        {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.spec
      </span>
    </div>
    <dl className="divide-y divide-border">
      {project.spec.map((row) => (
        <div key={row.label} className="flex items-baseline justify-between gap-6 px-4 py-3.5">
          <dt className="text-muted-foreground">{row.label}</dt>
          <dd className="text-right text-foreground">{row.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const Featured = ({ project, index }: { project: FeaturedProject; index: number }) => (
  <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 md:p-10">
    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100 md:opacity-60" />
    <div className="relative grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="eyebrow">
          <span className="text-primary">0{index + 1}</span>
          <span className="mx-2 opacity-40">—</span>
          {project.kind}
        </p>
        <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h3>
        <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-8 space-y-3">
          {project.outcomes.map((o) => (
            <li key={o} className="relative pl-5 text-pretty leading-relaxed text-foreground/85">
              <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-primary" />
              {o}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 lg:col-span-5">
        <Spec project={project} />
        <div className="flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              Source code
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <Section
      id="work"
      index="03"
      label="Projects"
      title="Projects"
    >
      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.title}>
            <Featured project={p} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-8 mt-20 flex items-end justify-between gap-6">
        <h3 className="font-display text-2xl font-semibold tracking-tight">More projects</h3>
        <p className="eyebrow hidden sm:block">{otherProjects.length} projects</p>
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.06} className="bg-background">
            <article className="group flex h-full flex-col p-7 transition-colors hover:bg-card">
              <p className="font-display text-3xl font-semibold tracking-tight text-primary">{p.metric}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.metricLabel}</p>
              <h4 className="mt-8 font-display text-lg font-semibold tracking-tight">{p.title}</h4>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <p className="mt-6 text-xs text-muted-foreground/80">{p.stack.join("  ·  ")}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

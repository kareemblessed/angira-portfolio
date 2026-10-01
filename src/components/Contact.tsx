import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, MapPin, PenLine, Phone } from "lucide-react";
import { Reveal } from "@/components/Section";
import { profile } from "@/data/portfolio";

const links = [
  { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.links.github, label: "GitHub", icon: Github },
  { href: profile.links.devto, label: "Writing on DEV", icon: PenLine },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,black,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,hsl(var(--glow)),transparent_70%)]" />
      </div>

      <div className="container max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="text-primary">06</span>
            <span className="mx-2 opacity-40">/</span>
            Contact
          </p>
          <h2 className="max-w-4xl text-balance font-display text-5xl font-medium leading-[1.02] tracking-[-0.035em] md:text-7xl">
            Get in touch
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I'm open to AI engineering and automation roles and to project work.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {profile.email}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
            aria-label="Copy email address"
          >
            {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          </button>
        </Reveal>

        <Reveal delay={0.15} className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex items-center gap-3 bg-background p-5 lg:col-span-1">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">{profile.location}</span>
          </div>
          <a href={profile.phoneHref} className="flex items-center gap-3 bg-background p-5 transition-colors hover:bg-card lg:col-span-1">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm">{profile.phone}</span>
          </a>
          {links.map(({ href, label, icon: Icon }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between gap-3 bg-background p-5 transition-colors hover:bg-card ${i === links.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="flex items-center gap-3 text-sm">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

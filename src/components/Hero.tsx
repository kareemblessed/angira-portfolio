import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, Github, Linkedin, PenLine } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.webp";
import { certifiers, profile, stats } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const roles = ["AI/ML Engineer", "Automation Specialist", "IoT Developer", "Prompt Engineer"];

const TypingRoles = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let delay = isDeleting ? 45 : 90;
    if (!isDeleting && text === role) delay = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < role.length) setText(role.slice(0, text.length + 1));
        else setIsDeleting(true);
      } else if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const article = /^[aeiou]/i.test(roles[roleIndex]) ? "an" : "a";

  return (
    <p className="text-base text-muted-foreground md:text-lg" aria-label={`I am ${article} ${roles.join(", ")}`}>
      <span aria-hidden="true">
        I am {article} <span className="text-primary">{text}</span>
        <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] animate-pulse bg-primary" />
      </span>
    </p>
  );
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const socials = [
  { href: profile.links.github, label: "GitHub", icon: Github },
  { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.links.devto, label: "Writing on DEV", icon: PenLine },
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade" />
        <div className="absolute inset-0 bg-glow" />
      </div>

      <div className="container max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0)} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 py-1.5 pl-2 pr-4 text-xs text-muted-foreground backdrop-blur">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
                <BadgeCheck className="h-3.5 w-3.5" />
                AWS Certified
              </span>
              {profile.role} · {profile.location}
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="text-balance font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]"
            >
              AI Engineer specialising in{" "}
              <span className="text-primary">production</span>{" "}
              automation.
            </motion.h1>

            <motion.div {...fadeUp(0.12)} className="mt-6 h-7">
              <TypingRoles />
            </motion.div>

            <motion.p {...fadeUp(0.16)} className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Designing end-to-end workflows that integrate OpenAI/LLM capabilities, CRM systems and enrichment APIs into
              real business processes.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="ml-1 flex items-center gap-1">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-5"
          >
            <figure className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card">
                <img
                  src={profilePhoto}
                  alt={`Portrait of ${profile.name}`}
                  className="aspect-[4/5] w-full object-cover object-[50%_20%] grayscale"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                  <div>
                    <p className="font-display text-lg font-semibold">{profile.name}</p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">AI Engineer</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 backdrop-blur">
                    UTC+3
                  </span>
                </figcaption>
              </div>
              {/* Floating credential card */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease }}
                className="absolute -right-6 -top-[5.75rem] hidden rounded-2xl border border-border bg-background/85 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl lg:block"
              >
                <p className="eyebrow mb-2">Certified</p>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    AWS AI Practitioner
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    Microsoft Applied Skills ×2
                  </li>
                </ul>
              </motion.div>
            </figure>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          {...fadeUp(0.4)}
          className="mt-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-border shadow-[var(--surface-shadow)] md:mt-28 md:grid-cols-4 [&>div]:bg-card"
          style={{ gap: "1px" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 md:p-8">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{stat.value}</dd>
              <dd className="mt-3 max-w-[16rem] text-sm leading-snug text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>

        {/* Certifier strip */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col items-center justify-between gap-4 border-b border-border py-10 md:flex-row"
        >
          <p className="eyebrow">Certified by</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {certifiers.map((c) => (
              <li key={c} className="font-display text-base font-semibold tracking-tight text-muted-foreground/80 md:text-lg">
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

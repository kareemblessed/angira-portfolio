import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, index, label, title, intro, children, className }: SectionProps) => (
  <section id={id} className={cn("relative py-16 md:py-24", className)}>
    <div className="container grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
      <Reveal className="self-start lg:sticky lg:top-28 lg:col-span-4">
        <p className="eyebrow mb-4">
          <span className="text-primary">{index}</span>
          <span className="mx-2 opacity-40">/</span>
          {label}
        </p>
        <h2 className="text-balance font-display text-3xl font-semibold md:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-xs text-pretty text-[15px] leading-relaxed text-muted-foreground">{intro}</p>}
      </Reveal>
      <div className="min-w-0 lg:col-span-8">{children}</div>
    </div>
  </section>
);

export default Section;

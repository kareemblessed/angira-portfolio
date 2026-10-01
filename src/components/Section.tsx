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
  <section id={id} className={cn("relative py-24 md:py-32", className)}>
    <div className="container max-w-6xl">
      <Reveal className="mb-14 md:mb-20 grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow mb-5">
            <span className="text-primary">{index}</span>
            <span className="mx-2 opacity-40">/</span>
            {label}
          </p>
          <h2 className="text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        </div>
        {intro && (
          <p className="text-pretty text-muted-foreground md:col-span-5 md:text-right md:text-[15px] leading-relaxed">
            {intro}
          </p>
        )}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;

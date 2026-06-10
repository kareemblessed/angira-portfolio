import { motion } from "framer-motion";
import { Brain, Zap, Cpu, Rocket, FileText } from "lucide-react";

const About = () => {
  const paragraphs = [
    {
      icon: Brain,
      text: "AI/ML Engineer with 4+ years of experience in intelligent automation, IoT, and production AI systems.",
      highlights: ["AI/ML Engineer", "4+ years", "intelligent automation", "production AI systems"],
      gradientLight: "from-violet-100/80 to-purple-100/80",
      gradientDark: "dark:from-violet-900/40 dark:to-purple-800/30",
      glowColor: "dark:shadow-violet-500/20",
      iconColor: "text-violet-500 dark:text-violet-400",
      iconBg: "bg-violet-100 dark:bg-violet-500/20",
    },
    {
      icon: Zap,
      text: "Experienced in building end-to-end pipelines using n8n, Make.com, OpenAI, and Google Cloud.",
      highlights: ["end-to-end pipelines", "n8n", "Make.com", "OpenAI", "Google Cloud"],
      gradientLight: "from-cyan-100/80 to-blue-100/80",
      gradientDark: "dark:from-cyan-900/40 dark:to-blue-800/30",
      glowColor: "dark:shadow-cyan-500/20",
      iconColor: "text-cyan-500 dark:text-cyan-400",
      iconBg: "bg-cyan-100 dark:bg-cyan-500/20",
    },
    {
      icon: Cpu,
      text: "Proficient in ML model training and deployment, LLM integrations, and RPA workflows.",
      highlights: ["ML model training and deployment", "LLM integrations", "RPA workflows"],
      gradientLight: "from-emerald-100/80 to-teal-100/80",
      gradientDark: "dark:from-emerald-900/40 dark:to-teal-800/30",
      glowColor: "dark:shadow-emerald-500/20",
      iconColor: "text-emerald-500 dark:text-emerald-400",
      iconBg: "bg-emerald-100 dark:bg-emerald-500/20",
    },
    {
      icon: Rocket,
      text: "Passionate about turning complex engineering problems into reliable, automated software.",
      highlights: ["complex engineering problems", "reliable, automated software"],
      gradientLight: "from-rose-100/80 to-orange-100/80",
      gradientDark: "dark:from-rose-900/40 dark:to-orange-800/30",
      glowColor: "dark:shadow-rose-500/20",
      iconColor: "text-rose-500 dark:text-rose-400",
      iconBg: "bg-rose-100 dark:bg-rose-500/20",
    },
  ];

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach((highlight) => {
      result = result.replace(
        highlight,
        `<span class="highlight-phrase">${highlight}</span>`
      );
    });
    return result;
  };

  // Floating decorative elements
  const floatingElements = [
    { size: 80, x: "5%", y: "20%", delay: 0 },
    { size: 60, x: "90%", y: "15%", delay: 1 },
    { size: 50, x: "85%", y: "70%", delay: 0.5 },
    { size: 70, x: "8%", y: "75%", delay: 1.5 },
    { size: 40, x: "50%", y: "5%", delay: 2 },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:via-transparent dark:to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      {/* Floating Accent Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6 + index,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className={`w-full h-full rounded-full ${
              index % 2 === 0 
                ? "bg-gradient-to-br from-violet-400/20 to-purple-500/10 dark:from-violet-500/30 dark:to-purple-600/20" 
                : "bg-gradient-to-br from-cyan-400/20 to-blue-500/10 dark:from-cyan-500/30 dark:to-blue-600/20"
            } border border-primary/10 dark:border-primary/20`}
          />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-6"
          >
            <FileText className="w-4 h-4 text-primary dark:text-primary" />
            <span className="text-sm font-medium text-primary dark:text-primary">Profile</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            About{" "}
            <span className="text-gradient">Me</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </motion.div>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {paragraphs.map((para, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${para.gradientLight} ${para.gradientDark} backdrop-blur-sm border border-border/50 dark:border-white/10 shadow-soft dark:shadow-lg ${para.glowColor} transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/40`}>
                {/* Glow effect on hover - enhanced for dark mode */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Inner glow for dark mode */}
                <div className="absolute inset-0 rounded-2xl dark:bg-gradient-to-br dark:from-white/5 dark:to-transparent opacity-0 dark:opacity-100" />
                
                {/* Icon - brighter in dark mode */}
                <div className={`absolute -left-3 md:-left-4 top-6 md:top-8 w-10 h-10 md:w-12 md:h-12 rounded-xl ${para.iconBg} border border-border dark:border-white/20 shadow-lg dark:shadow-xl flex items-center justify-center ${para.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <para.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                {/* Paragraph number */}
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/30 border border-primary/20 dark:border-primary/50 flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-primary dark:text-primary">0{index + 1}</span>
                </div>

                {/* Text content - higher contrast in dark mode */}
                <p
                  className="text-base md:text-lg text-muted-foreground dark:text-gray-200 leading-relaxed pl-6 md:pl-8 relative z-10"
                  dangerouslySetInnerHTML={{ __html: highlightText(para.text, para.highlights) }}
                />
              </div>

              {/* Connecting line between cards */}
              {index < paragraphs.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "24px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="w-0.5 h-6 bg-gradient-to-b from-primary/30 dark:from-primary/50 to-transparent mx-auto"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12 gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/40 dark:bg-primary/60"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* CSS for animated underlines - enhanced for dark mode */}
      <style>{`
        .highlight-phrase {
          position: relative;
          font-weight: 600;
          color: hsl(var(--foreground));
          background: linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.15));
          padding: 2px 6px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .dark .highlight-phrase {
          color: #fff;
          background: linear-gradient(135deg, hsl(var(--primary) / 0.35), hsl(var(--accent) / 0.35));
          text-shadow: 0 0 20px hsl(var(--primary) / 0.5);
        }
        
        .highlight-phrase::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)));
          border-radius: 2px;
          transition: width 0.4s ease;
          box-shadow: 0 0 8px hsl(var(--primary) / 0.5);
        }
        
        .dark .highlight-phrase::after {
          height: 2px;
          box-shadow: 0 0 12px hsl(var(--primary) / 0.8), 0 0 24px hsl(var(--accent) / 0.6);
        }
        
        .group:hover .highlight-phrase::after {
          width: 100%;
        }
        
        .group:hover .highlight-phrase {
          background: linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2));
        }
        
        .dark .group:hover .highlight-phrase {
          background: linear-gradient(135deg, hsl(var(--primary) / 0.45), hsl(var(--accent) / 0.45));
          text-shadow: 0 0 30px hsl(var(--primary) / 0.8);
        }
      `}</style>
    </section>
  );
};

export default About;

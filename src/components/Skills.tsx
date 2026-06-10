import { motion, useInView } from "framer-motion";
import { Brain, Zap, Code, Cpu, Cloud, BarChart3, RotateCcw, Sparkles, Wrench, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef, useCallback } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "C++", proficiency: 85 },
      { name: "Kotlin", proficiency: 84 },
      { name: "TypeScript", proficiency: 88 },
      { name: "Java", proficiency: 86 },
    ],
  },
  {
    title: "AI & Integrations",
    icon: Brain,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    skills: [
      { name: "OpenAI API", proficiency: 94 },
      { name: "Gemini API", proficiency: 92 },
      { name: "Azure AI", proficiency: 87 },
      { name: "Google Cloud AI", proficiency: 88 },
      { name: "LangChain", proficiency: 86 },
      { name: "RAG Pipelines", proficiency: 88 },
      { name: "Prompt Engineering", proficiency: 95 },
      { name: "Hugging Face", proficiency: 85 },
      { name: "Vector Embeddings", proficiency: 87 },
      { name: "LLM Fine-tuning", proficiency: 84 },
    ],
  },
  {
    title: "Machine Learning",
    icon: Sparkles,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    skills: [
      { name: "TensorFlow", proficiency: 92 },
      { name: "PyTorch", proficiency: 88 },
      { name: "Scikit-Learn", proficiency: 90 },
      { name: "Pandas", proficiency: 94 },
      { name: "NumPy", proficiency: 92 },
      { name: "OpenCV", proficiency: 89 },
      { name: "Model Training & Evaluation", proficiency: 90 },
      { name: "Supervised & Unsupervised Learning", proficiency: 88 },
      { name: "NLP", proficiency: 87 },
      { name: "Computer Vision", proficiency: 89 },
      { name: "Feature Engineering", proficiency: 86 },
      { name: "Hyperparameter Tuning", proficiency: 85 },
    ],
  },
  {
    title: "Automation & RPA",
    icon: Zap,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    skills: [
      { name: "n8n", proficiency: 94 },
      { name: "Make.com", proficiency: 91 },
      { name: "UiPath", proficiency: 87 },
      { name: "Power Automate", proficiency: 89 },
      { name: "Zapier", proficiency: 88 },
      { name: "Webhook Integrations", proficiency: 92 },
      { name: "REST APIs", proficiency: 94 },
      { name: "Google Apps Script", proficiency: 89 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    skills: [
      { name: "Azure", proficiency: 87 },
      { name: "Google Cloud Run", proficiency: 86 },
      { name: "Docker", proficiency: 88 },
      { name: "Git", proficiency: 94 },
      { name: "CI/CD Pipelines", proficiency: 85 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    skills: [
      { name: "Power BI", proficiency: 91 },
      { name: "MATLAB", proficiency: 86 },
      { name: "Pandas", proficiency: 94 },
      { name: "Predictive Analytics", proficiency: 89 },
      { name: "Data Pipeline Development", proficiency: 90 },
    ],
  },
  {
    title: "IoT & Embedded Systems",
    icon: Cpu,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    skills: [
      { name: "Arduino", proficiency: 93 },
      { name: "ESP32", proficiency: 91 },
      { name: "Raspberry Pi", proficiency: 89 },
      { name: "KiCad", proficiency: 85 },
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    gradient: "from-slate-500 via-gray-500 to-zinc-500",
    skills: [
      { name: "VS Code", proficiency: 95 },
      { name: "Postman", proficiency: 90 },
      { name: "Google Cloud Console", proficiency: 87 },
      { name: "Azure Portal", proficiency: 86 },
    ],
  },
  {
    title: "Databases & Integration",
    icon: Database,
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    skills: [
      { name: "Google Sheets API", proficiency: 92 },
      { name: "Google Drive API", proficiency: 90 },
      { name: "ClickUp API", proficiency: 88 },
      { name: "Apollo.io API", proficiency: 85 },
      { name: "Webhook-based ETL", proficiency: 89 },
    ],
  },
];

// Easing function for smooth count animation (easeOutExpo)
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

// Typing animation hook
const useTypingAnimation = (
  text: string,
  isActive: boolean,
  delay: number = 0,
  speed: number = 60
) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const reset = useCallback(() => {
    setDisplayText("");
    setIsComplete(false);
    setShowCursor(false);
  }, []);

  useEffect(() => {
    if (!isActive) {
      reset();
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setTimeout>;
    let cursorIntervalId: ReturnType<typeof setInterval>;

    // Start cursor blinking after delay
    timeoutId = setTimeout(() => {
      setShowCursor(true);
      let currentIndex = 0;

      // Cursor blink
      cursorIntervalId = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530);

      // Typing animation with variable speed for realism
      const typeNextChar = () => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
          
          if (currentIndex <= text.length) {
            // Variable speed for more natural typing (50-80ms)
            const variance = Math.random() * 30;
            intervalId = setTimeout(typeNextChar, speed + variance);
          } else {
            setIsComplete(true);
            clearInterval(cursorIntervalId);
            setShowCursor(false);
          }
        }
      };

      typeNextChar();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, [isActive, text, delay, speed, reset]);

  return { displayText, isComplete, showCursor, reset };
};

// Counting animation hook
const useCountAnimation = (
  target: number,
  isActive: boolean,
  delay: number = 0,
  duration: number = 1800
) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const reset = useCallback(() => {
    setCount(0);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!isActive) {
      reset();
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;

    const delayTimeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Apply easing
        const easedProgress = easeOutExpo(progress);
        const currentCount = Math.round(easedProgress * target);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setIsComplete(true);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, target, delay, duration, reset]);

  return { count, isComplete, reset };
};

// Individual skill badge with animations
const AnimatedSkillBadge = ({
  skill,
  gradient,
  index,
  isInView,
  onReplay,
}: {
  skill: { name: string; proficiency: number };
  gradient: string;
  index: number;
  isInView: boolean;
  onReplay?: () => void;
}) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const baseDelay = index * 200; // Stagger each skill by 200ms
  const shouldAnimate = isInView && !hasAnimated;

  const { displayText, isComplete: typingComplete, showCursor } = useTypingAnimation(
    skill.name,
    shouldAnimate || animationKey > 0,
    baseDelay,
    55
  );

  const { count, isComplete: countComplete } = useCountAnimation(
    skill.proficiency,
    shouldAnimate || animationKey > 0,
    baseDelay + skill.name.length * 30, // Start counting slightly after typing begins
    1800
  );

  useEffect(() => {
    if (typingComplete && countComplete && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [typingComplete, countComplete, hasAnimated]);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
    setHasAnimated(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleReplay}
      className="relative group cursor-pointer"
    >
      <div
        className={`
          relative px-4 py-2.5 rounded-xl
          bg-gradient-to-r ${gradient}
          text-white text-sm font-medium
          shadow-lg hover:shadow-xl
          transform hover:scale-105 hover:-translate-y-1
          transition-all duration-300 ease-out
          overflow-hidden min-w-[140px]
        `}
      >
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-xl pointer-events-none" />
        
        {/* Shimmer effect on hover */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
            transform -skew-x-12 transition-transform duration-700 ease-out
            ${isHovered ? 'translate-x-[200%]' : '-translate-x-[200%]'}
          `}
        />
        
        {/* Replay indicator */}
        {hasAnimated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute top-1 right-1 z-20"
          >
            <RotateCcw className="w-3 h-3 text-white/70" />
          </motion.div>
        )}
        
        <div className="relative z-10 flex items-center justify-between gap-3">
          {/* Typing text with cursor */}
          <span className="font-medium flex items-center min-w-[80px]">
            {displayText || (hasAnimated ? skill.name : "")}
            {showCursor && (
              <span className="ml-0.5 w-0.5 h-4 bg-white inline-block animate-pulse" />
            )}
          </span>
          
          {/* Counting percentage */}
          <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-lg min-w-[45px] text-center">
            <span className="font-mono font-bold text-xs">
              {hasAnimated ? skill.proficiency : count}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Skill card component
const SkillCard = ({
  category,
  categoryIndex,
}: {
  category: typeof skillCategories[0];
  categoryIndex: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [replayKey, setReplayKey] = useState(0);

  const handleReplayAll = () => {
    setReplayKey((prev) => prev + 1);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm group relative overflow-hidden">
        {/* Card glow effect */}
        <div 
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
            bg-gradient-to-br ${category.gradient}
          `}
        />
        
        <CardHeader className="pb-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div 
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg relative overflow-hidden`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glossy effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                <category.icon className="w-7 h-7 text-white relative z-10" />
              </motion.div>
              <div>
                <CardTitle className="text-xl font-display group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1">
                  {category.skills.length} technologies
                </p>
              </div>
            </div>
            
            {/* Replay all button */}
            <motion.button
              onClick={handleReplayAll}
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100"
              whileHover={{ rotate: -180 }}
              transition={{ duration: 0.3 }}
              title="Replay animations"
            >
              <RotateCcw className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          </div>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-2" key={replayKey}>
            {category.skills.map((skill, skillIndex) => (
              <AnimatedSkillBadge
                key={`${skill.name}-${replayKey}`}
                skill={skill}
                gradient={category.gradient}
                index={skillIndex}
                isInView={isInView}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-500/5 to-rose-500/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-medium text-sm border border-primary/20">
              Technical Expertise
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build intelligent, scalable solutions
          </p>
          <p className="text-muted-foreground/60 text-sm mt-2">
            Click any skill badge to replay its animation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard
              key={category.title}
              category={category}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <div className="flex -space-x-1">
              {[Brain, Code, Cloud].map((Icon, i) => (
                <div 
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                    i === 0 ? 'from-violet-500 to-purple-500' : 
                    i === 1 ? 'from-cyan-500 to-blue-500' : 
                    'from-emerald-500 to-teal-500'
                  } flex items-center justify-center border-2 border-background`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              30+ Technologies & Growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

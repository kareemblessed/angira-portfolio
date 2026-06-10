import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Forge AI — Collaborative AI Study Platform",
    description: "AI study platform with PDF/YouTube ingestion, Gemini-powered study plans, live AI voice tutor, and collaborative study rooms with quiz battles.",
    impact: "Live at forge-ai-vzy4.vercel.app",
    tags: ["TypeScript", "Next.js", "Gemini API", "Supabase"],
    color: "from-violet-500 to-purple-400",
    link: "https://forge-ai-vzy4.vercel.app",
  },
  {
    title: "Smart HR Selection System",
    description: "Automated candidate evaluation using Gemini AI for intelligent resume screening.",
    impact: "Reduced hiring time by 60%",
    tags: ["n8n", "Gemini API", "REST", "Automation"],
    color: "from-cyan-500 to-teal-400",
  },
  {
    title: "Self-Healing Parking Detection",
    description: "Production-grade CV system with autonomous retraining pipeline for real-time parking monitoring.",
    impact: "93.2% accuracy with zero manual intervention",
    tags: ["Flask", "n8n", "Computer Vision"],
    color: "from-emerald-600 to-green-400",
  },
  {
    title: "AI Job Finder",
    description: "Intelligent job discovery platform with automated matching and personalized recommendations.",
    impact: "3x more relevant job matches",
    tags: ["n8n", "Apify", "Gemini", "Web Scraping"],
    color: "from-violet-500 to-purple-400",
  },
  {
    title: "Unit Evaluation System",
    description: "Enterprise data integration platform with advanced validation rules and quality checks.",
    impact: "95% reduction in data errors",
    tags: ["n8n", "REST APIs", "JavaScript", "ETL"],
    color: "from-sky-500 to-blue-400",
  },
  {
    title: "Zoom Meeting Summarizer",
    description: "Automated meeting insights extraction with action item tracking and ClickUp integration.",
    impact: "Saved 5+ hours per week",
    tags: ["OpenAI", "Zoom API", "ClickUp", "NLP"],
    color: "from-amber-500 to-yellow-400",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const navigate = useCallback((direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => navigate("right"), 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, navigate]);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i, originalIndex: index });
    }
    return visible;
  };

  // Simple horizontal layout with slight arc
  const getCardStyle = (position: number) => {
    const absPos = Math.abs(position);
    
    // Horizontal spacing
    const xOffset = position * 340;
    
    // Slight downward offset for side cards
    const yOffset = absPos * 30;
    
    // Scale decreases for side cards
    const scale = position === 0 ? 1 : 0.9;
    
    // Opacity
    const opacity = position === 0 ? 1 : 0.7;
    
    // Z-index for proper layering
    const zIndex = 10 - absPos;
    
    // Subtle rotation
    const rotation = position * 5;

    return {
      x: xOffset,
      y: yOffset,
      scale,
      opacity,
      zIndex,
      rotateZ: rotation,
    };
  };

  return (
    <section id="projects" className="pt-24 pb-16 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-80"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">Key highlights of my work</p>
        </motion.div>
      </div>

      {/* Arc Carousel with Navigation */}
      <div 
        className="relative h-[580px] flex items-start justify-center pt-8"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Left Navigation Arrow */}
        <motion.div
          className="absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("left")}
            className="rounded-full w-14 h-14 border-2 border-primary/40 bg-background/80 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
        </motion.div>

        {/* Right Navigation Arrow */}
        <motion.div
          className="absolute right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("right")}
            className="rounded-full w-14 h-14 border-2 border-primary/40 bg-background/80 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center px-20">
          <AnimatePresence initial={false} mode="sync">
            {getVisibleProjects().map((project) => (
              <motion.div
                key={project.originalIndex}
                initial={{ 
                  x: project.position > 0 ? 500 : -500, 
                  opacity: 0, 
                  scale: 0.8 
                }}
                animate={getCardStyle(project.position)}
                exit={{ 
                  x: project.position > 0 ? -500 : 500, 
                  opacity: 0, 
                  scale: 0.8 
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute cursor-pointer"
                onClick={() => {
                  if (project.position < 0) navigate("left");
                  if (project.position > 0) navigate("right");
                }}
                style={{ transformOrigin: "center bottom" }}
              >
                <div
                  className={`w-[280px] h-[400px] rounded-3xl p-5 flex flex-col bg-gradient-to-br ${project.color} shadow-2xl overflow-hidden relative transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]`}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute bottom-20 left-0 w-40 h-40 rounded-full bg-white/5 blur-3xl" />
                  <div className="absolute top-1/4 right-0 w-1 h-20 bg-white/20 rounded-full" />

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between relative z-10 pt-2">
                    {/* Tags at top */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          className="text-[10px] bg-white/20 text-white border-0 hover:bg-white/30 backdrop-blur-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Main content area */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-white mb-3 leading-tight">
                        {project.title}
                      </h3>

                      {/* Description - removed line-clamp for full visibility */}
                      <p className="text-white/85 text-sm mb-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Impact */}
                      <p className="text-white/95 text-xs font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                        {project.impact}
                      </p>
                    </div>

                    {/* View button - only on center card */}
                    {project.position === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                      >
                        <Button
                          size="sm"
                          className="gap-2 bg-white/20 text-white hover:bg-white/30 border-0 backdrop-blur-sm mt-4"
                          asChild
                        >
                          <a href={(project as { link?: string }).link ?? "https://dev.to/kareemblessed"} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

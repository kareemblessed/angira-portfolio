import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const roles = ["AI/ML Engineer", "Automation Specialist", "IoT Developer", "Prompt Engineer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const bubbles = [
    { size: 120, x: "10%", y: "15%", duration: 20, delay: 0 },
    { size: 80, x: "85%", y: "20%", duration: 25, delay: 2 },
    { size: 60, x: "70%", y: "70%", duration: 18, delay: 1 },
    { size: 100, x: "15%", y: "75%", duration: 22, delay: 3 },
    { size: 40, x: "50%", y: "10%", duration: 15, delay: 0.5 },
    { size: 70, x: "30%", y: "50%", duration: 28, delay: 4 },
    { size: 50, x: "90%", y: "50%", duration: 20, delay: 2.5 },
    { size: 90, x: "5%", y: "40%", duration: 24, delay: 1.5 },
    { size: 35, x: "60%", y: "85%", duration: 16, delay: 3.5 },
    { size: 55, x: "40%", y: "30%", duration: 21, delay: 0.8 },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.x,
              top: bubble.y,
              background: index % 2 === 0 
                ? "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))"
                : "radial-gradient(circle at 30% 30%, hsl(var(--accent) / 0.12), hsl(var(--accent) / 0.03))",
              boxShadow: index % 2 === 0
                ? "inset 0 0 20px hsl(var(--primary) / 0.1), 0 0 40px hsl(var(--primary) / 0.05)"
                : "inset 0 0 20px hsl(var(--accent) / 0.1), 0 0 40px hsl(var(--accent) / 0.05)",
              border: "1px solid hsl(var(--primary) / 0.1)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-primary">Angira Ronan</span>
            </h1>
            
            <div className="text-xl text-muted-foreground flex items-center gap-2">
              <span>I am {roles[currentRole]?.charAt(0).match(/[aeiouAEIOU]/) ? 'an' : 'a'}</span>
              <span className="text-primary font-semibold min-w-[220px]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I design, build, and deploy intelligent automation systems that bridge data science and real-world application. From self-healing AI models to complete workflow automation, I create scalable solutions that solve operational problems.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" className="font-semibold" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" className="font-semibold gap-2" asChild>
                <a href="https://github.com/kareemblessed" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="font-semibold gap-2" asChild>
                <a href="https://dev.to/kareemblessed" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5" />
                  Dev Blog
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Ronan Angira"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full" />
              {/* Initials badge */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                AR
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "Dedan Kimathi University of Technology",
    degree: "BSc. Electrical & Electronic Engineering — AI & Automation Specialization",
    period: "Graduation: July 2025",
    details: [
      "Specialization in AI-driven electrical systems and automation",
      "Completed coursework in Neural Networks, Computer Vision, and NLP",
      "Research on transformer insulation health monitoring using fuzzy logic",
      "Developed IoT-based smart systems, circuit designs, and control automation projects",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">Background</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-xl">{item.institution}</h3>
                  <p className="text-primary font-medium mt-1">{item.degree}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                  <ul className="mt-3 space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

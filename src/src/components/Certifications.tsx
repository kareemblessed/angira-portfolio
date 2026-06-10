import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "BSc. Electrical & Electronic Engineering — AI & Automation Specialization",
    issuer: "Dedan Kimathi University of Technology",
    year: "2025",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg">Credentials & qualifications</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg">{cert.title}</h3>
                <p className="text-primary font-medium mt-1">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mt-1">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
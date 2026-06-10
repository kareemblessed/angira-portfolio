import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground text-lg">Let's connect</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Details */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl mb-6">Details</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:blessedronan@gmail.com" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    blessedronan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+254716262700" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +254 716 262700
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl mb-6">Links</h3>
              
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="justify-start gap-3 h-12" asChild>
                  <a href="https://www.linkedin.com/in/ronan-angira-27965924b/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 text-primary" />
                    LinkedIn
                  </a>
                </Button>

                <Button variant="outline" className="justify-start gap-3 h-12" asChild>
                  <a href="https://github.com/kareemblessed" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-primary" />
                    GitHub
                  </a>
                </Button>

                <Button variant="outline" className="justify-start gap-3 h-12" asChild>
                  <a href="https://dev.to/kareemblessed" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Professional Blog
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

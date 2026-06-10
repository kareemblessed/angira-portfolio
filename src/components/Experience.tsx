import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Workflow Automation & AI Specialist",
    company: "Objective Recruiting",
    period: "Jan 2026 — Present (Part-time)",
    location: "Remote",
    highlights: [
      "Built AI-powered CV screening pipelines using n8n, Make.com, OpenAI API, and Google Drive",
      "Developed and maintained Google Apps Script automations for ATS/LTS recruitment tracking systems",
      "Engineered multi-step prompt chains and OpenAI Assistant integrations for automated resume assessment",
      "Connected Google Sheets, n8n, Make.com, and ClickUp via webhooks for end-to-end recruitment workflows",
      "Integrated LLM-based classification and extraction models into recruitment pipelines",
      "Wrote Python scripts for data processing and AI pipeline support",
      "Created SOPs and technical documentation for all automation systems",
    ],
  },
  {
    title: "Contributing Technical Content Creator (AI & Engineering)",
    company: "DEV",
    period: "July 2023 — Present",
    location: "Remote",
    highlights: [
      "Wrote AI, IoT, and automation blogs increasing traffic by 60%",
      "Implemented SEO improving rankings and organic traffic by 40%",
      "Created AI technical content increasing engagement by 30%",
      "Simplified complex technology topics for broader tech audiences",
    ],
  },
  {
    title: "IoT & AI Developer",
    company: "The Atego",
    period: "Jan 2025 — April 2025",
    location: "Nairobi, Kenya",
    highlights: [
      "Built and trained supervised learning models for anomaly detection and predictive maintenance",
      "Applied NLP techniques for automated data parsing and classification",
      "Created predictive analytics models reducing downtime by 20%",
      "Designed and deployed UiPath RPA bots to automate repetitive business processes",
      "Implemented predictive maintenance and automated scheduling improving efficiency by 30%",
      "Applied Microsoft automation streamlining data processing response time by 15%",
    ],
  },
  {
    title: "Junior IoT & AI Developer",
    company: "Centre for Development of Electronic Devices",
    period: "November 2022 — March 2024",
    location: "Nairobi, Kenya",
    highlights: [
      "Designed microcontroller-based automation systems with AI-driven features using Microsoft Power Automate, improving system efficiency by 30%",
      "Created an AI-enhanced smart shopping app with automated recommendations using Power BI for real-time analytics",
      "Developed and deployed ML models using TensorFlow and Scikit-Learn for real-time inference on edge devices",
      "Reduced processing time by 25% through Power Automate workflow optimization",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">What I've done</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-l-4 border-l-primary bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-display flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

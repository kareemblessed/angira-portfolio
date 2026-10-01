// Single source of truth for portfolio content. Update here, not in components.

export const profile = {
  name: "Angira Ronan",
  role: "AI Engineer",
  location: "Nairobi, Kenya",
  email: "blessedronan@gmail.com",
  phone: "+254 716 262700",
  phoneHref: "tel:+254716262700",
  links: {
    github: "https://github.com/kareemblessed",
    linkedin: "https://www.linkedin.com/in/ronan-angira-27965924b/",
    devto: "https://dev.to/kareemblessed",
  },
  summary:
    "AI Engineer specialising in production automation: end-to-end workflows that put OpenAI and LLM capabilities, CRM systems and enrichment APIs to work inside real business processes. AWS Certified AI Practitioner and Microsoft Applied Skills certified in Azure AI, with a track record of turning manual, repetitive operations into scalable pipelines.",
};

export const stats = [
  { value: "4+", label: "Years shipping AI, IoT & automation systems" },
  { value: "~70%", label: "Less manual CV review with LLM screening pipelines" },
  { value: "300", label: "Candidates a month processed by AI workflows" },
  { value: "6", label: "Industry certifications from AWS, Microsoft & more" },
];

export const certifiers = ["Amazon Web Services", "Microsoft", "HubSpot Academy", "Great Learning"];

export const focusAreas = [
  {
    title: "Production automation",
    body: "End-to-end n8n, Make.com and Apps Script systems that replace manual operations across recruitment and sales, documented with SOPs so teams can run them.",
    tools: ["n8n", "Make.com", "Apps Script", "UiPath", "Power Automate"],
  },
  {
    title: "LLM & retrieval systems",
    body: "Prompt chains, OpenAI Assistants and RAG pipelines grounded in cited sources, with classification and extraction built into live business workflows.",
    tools: ["OpenAI", "Gemini", "RAG", "Embeddings", "LangChain"],
  },
  {
    title: "Applied ML & edge AI",
    body: "Supervised models for anomaly detection and predictive maintenance, NLP parsing, and real-time inference on microcontroller-based devices.",
    tools: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "ESP32"],
  },
];

export type Experience = {
  role: string;
  company: string;
  type?: string;
  period: string;
  location: string;
  metrics: string[];
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Workflow Automation & AI Specialist",
    company: "Objective Recruiting",
    type: "Part-time",
    period: "Jan 2026 — Present",
    location: "Remote",
    metrics: ["~70% less manual review", "60% less data entry", "6 ATS instances"],
    highlights: [
      "Built AI-powered CV screening workflows with n8n, Make.com, OpenAI and Google Drive, processing 100–300 candidates a month and cutting manual review time by ~70%.",
      "Engineered an n8n automation syncing leads from Google Sheets to HubSpot CRM, reducing manual data entry by 60%.",
      "Designed end-to-end n8n workflows across recruitment and sales operations, replacing manual processes with scalable pipelines.",
      "Integrated OpenAI multi-step prompt chains and Assistant integrations for automated resume assessment, structuring 5+ data fields per candidate.",
      "Built API integrations between Google Sheets, HubSpot, ClickUp and Apollo.io, managing data flows and automation logic across connected systems.",
      "Automated B2B lead sourcing and decision-maker enrichment with Apollo.io for outbound sales campaigns.",
      "Developed and maintained Google Apps Script and Python automations for ATS/LTS recruitment tracking across 6 instances.",
      "Wrote SOPs and technical documentation for every automation system.",
    ],
    stack: ["n8n", "Make.com", "OpenAI API", "HubSpot", "Apollo.io", "ClickUp", "Apps Script", "Python"],
  },
  {
    role: "Technical Content Creator — AI & Engineering",
    company: "DEV Community",
    period: "Jul 2023 — Present",
    location: "Remote",
    metrics: ["+60% traffic", "+40% organic", "+30% engagement"],
    highlights: [
      "Write about AI, IoT and automation, growing blog traffic by 60%.",
      "Applied an SEO strategy that improved rankings and organic traffic by 40%.",
      "Turn complex engineering topics into clear, practical writing for a broad technical audience, lifting engagement by 30%.",
    ],
    stack: ["Technical writing", "SEO", "AI", "IoT"],
  },
  {
    role: "IoT & AI Developer",
    company: "The Atego",
    period: "Jan 2025 — Apr 2025",
    location: "Nairobi, Kenya",
    metrics: ["−20% downtime", "−15% response time"],
    highlights: [
      "Built and trained supervised learning models for anomaly detection and predictive maintenance, reducing downtime by 20%.",
      "Designed and deployed UiPath RPA bots to automate repetitive business processes across operational workflows.",
      "Applied NLP techniques for automated data parsing and classification.",
      "Used Microsoft automation tooling to cut data-processing response time by 15%.",
    ],
    stack: ["Python", "Scikit-Learn", "UiPath", "NLP", "Power Automate"],
  },
  {
    role: "Junior IoT & AI Developer",
    company: "Centre for Development of Electronic Devices",
    period: "Nov 2022 — Mar 2024",
    location: "Nairobi, Kenya",
    metrics: ["+30% efficiency", "−25% processing time"],
    highlights: [
      "Designed microcontroller-based automation systems with AI-driven features, improving system efficiency by 30%.",
      "Developed and deployed TensorFlow and Scikit-Learn models for real-time inference on edge devices.",
      "Created an AI-enhanced smart shopping app with automated recommendations and Power BI analytics.",
      "Optimised app processes with Power Automate, reducing processing time by 25%.",
    ],
    stack: ["TensorFlow", "Scikit-Learn", "Arduino", "ESP32", "Power BI", "Power Automate"],
  },
];

export type FeaturedProject = {
  kind: string;
  title: string;
  summary: string;
  outcomes: string[];
  spec: { label: string; value: string }[];
  stack: string[];
  github?: string;
  live?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    kind: "Personal project · RAG platform",
    title: "ForgeAI",
    summary:
      "A real-time collaborative study platform with a custom retrieval pipeline. Upload text, PDFs, images or audio and get answers grounded in cited excerpts from your own sources.",
    outcomes: [
      "Custom RAG pipeline with multi-modal ingestion via Gemini, embedded with gemini-embedding-001",
      "Cosine-similarity retrieval over normalised embeddings, grounding every chat answer in cited source excerpts",
      "Real-time collaboration on React, TypeScript and Supabase for auth, data and live sync",
    ],
    spec: [
      { label: "ingestion", value: "text · pdf · image · audio" },
      { label: "embeddings", value: "gemini-embedding-001" },
      { label: "retrieval", value: "cosine similarity" },
      { label: "realtime", value: "supabase" },
    ],
    stack: ["React", "TypeScript", "Supabase", "Gemini API", "RAG"],
    github: "https://github.com/kareemblessed/ForgeAI",
    live: "https://forge-ai-vzy4.vercel.app",
  },
  {
    kind: "Personal project · ML from first principles",
    title: "Neural Embedding & Retrieval Engine",
    summary:
      "A neural network written from scratch in NumPy and validated against PyTorch, whose learned embeddings power a semantic search engine over news articles.",
    outcomes: [
      "100% train and test accuracy on a 5-topic news classifier",
      "Learned embeddings turned into a semantic search engine with perfect precision@5",
      "PCA analysis confirming the model learned real topic structure",
    ],
    spec: [
      { label: "accuracy", value: "100% train / test" },
      { label: "precision@5", value: "1.00" },
      { label: "framework", value: "numpy, from scratch" },
      { label: "validated", value: "against pytorch" },
    ],
    stack: ["Python", "NumPy", "PyTorch", "PCA", "Embeddings"],
    github: "https://github.com/kareemblessed/Neural-retrieval-engine",
  },
];

export const otherProjects = [
  {
    title: "Self-Healing Parking Detection",
    summary: "Production computer-vision system with an autonomous retraining pipeline for real-time parking monitoring.",
    metric: "93.2%",
    metricLabel: "accuracy, no manual retraining",
    stack: ["Computer Vision", "Flask", "n8n"],
  },
  {
    title: "Smart HR Selection System",
    summary: "Automated candidate evaluation using Gemini for intelligent resume screening.",
    metric: "−60%",
    metricLabel: "time to hire",
    stack: ["n8n", "Gemini API", "REST"],
  },
  {
    title: "Sheets → HubSpot Lead Sync",
    summary: "n8n automation keeping CRM leads in sync with sourcing sheets, with Apollo.io enrichment.",
    metric: "−60%",
    metricLabel: "manual data entry",
    stack: ["n8n", "HubSpot", "Apollo.io"],
  },
  {
    title: "Zoom Meeting Summarizer",
    summary: "Extracts meeting insights and action items automatically and files them in ClickUp.",
    metric: "5+ hrs",
    metricLabel: "saved every week",
    stack: ["OpenAI", "Zoom API", "ClickUp"],
  },
  {
    title: "AI Job Finder",
    summary: "Job discovery pipeline with automated scraping, matching and personalised recommendations.",
    metric: "3×",
    metricLabel: "more relevant job matches",
    stack: ["n8n", "Apify", "Gemini"],
  },
  {
    title: "Unit Evaluation System",
    summary: "Data integration platform with validation rules and automated quality checks.",
    metric: "−95%",
    metricLabel: "data errors",
    stack: ["n8n", "REST APIs", "ETL"],
  },
];

export const certifications = [
  {
    title: "AWS Certified AI Practitioner",
    code: "AIF-C01",
    issuer: "Amazon Web Services",
    featured: true,
    url: "https://www.credly.com/badges/21ce4734-616f-4104-ad74-48aa590ef266/public_url",
  },
  {
    title: "Build AI-powered solutions using Azure Database for PostgreSQL",
    code: "Applied Skills",
    issuer: "Microsoft",
    featured: true,
    url: "https://learn.microsoft.com/api/credentials/share/en-gb/AngiraRonan-3353/B94AF60EF2F53D65?sharingId=7005F12C6BFA5F2C",
  },
  {
    title: "Secure AI solutions in the cloud",
    code: "Applied Skills",
    issuer: "Microsoft",
    featured: true,
    url: "https://learn.microsoft.com/api/credentials/share/en-gb/AngiraRonan-3353/F664C9EA6438100F?sharingId=7005F12C6BFA5F2C",
  },
  {
    title: "Content Hub Software Certified",
    code: "Certification",
    issuer: "HubSpot Academy",
    url: "https://app-eu1.hubspot.com/academy/achievements/47t130zk/en/1/ronan-na/content-hub-software-certified",
  },
  {
    title: "Artificial Intelligence with Python",
    code: "Certificate",
    issuer: "Great Learning Academy",
    url: "https://www.mygreatlearning.com/certificate/HBKRNJJM",
  },
  {
    title: "Python for Machine Learning",
    code: "Certificate",
    issuer: "Great Learning Academy",
    url: "https://www.mygreatlearning.com/certificate/ICABLZTB",
  },
];

export const skillGroups = [
  { label: "AI & LLMs", items: ["OpenAI API", "Gemini API", "Azure AI", "Google Cloud AI", "LangChain", "RAG pipelines", "Prompt engineering", "Vector embeddings", "Hugging Face", "LLM fine-tuning"] },
  { label: "Machine learning", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "NumPy", "Pandas", "OpenCV", "NLP", "Computer vision", "Feature engineering", "Hyperparameter tuning"] },
  { label: "Automation & RPA", items: ["n8n", "Make.com", "UiPath", "Power Automate", "Zapier", "Google Apps Script", "Webhooks", "REST APIs"] },
  { label: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud Run", "Docker", "Git", "CI/CD"] },
  { label: "Languages", items: ["Python", "TypeScript", "React", "Java", "C++", "Kotlin"] },
  { label: "Data & analytics", items: ["Power BI", "MATLAB", "Predictive analytics", "Data pipelines", "Webhook-based ETL"] },
  { label: "Integrations", items: ["HubSpot", "Apollo.io", "ClickUp", "Google Sheets API", "Google Drive API"] },
  { label: "IoT & embedded", items: ["Arduino", "ESP32", "Raspberry Pi", "KiCad"] },
];

export const education = {
  degree: "BSc. Electrical & Electronic Engineering",
  specialisation: "AI & Automation specialisation",
  school: "Dedan Kimathi University of Technology",
  period: "Graduated Jul 2025",
  points: [
    "Specialised in AI-driven electrical systems and automation",
    "Coursework in Neural Networks, Computer Vision and Natural Language Processing",
    "Research on transformer insulation health monitoring using fuzzy logic",
  ],
};

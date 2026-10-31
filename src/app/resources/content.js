import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Raja Simha Reddy",
  lastName: "Bolla",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Applied AI & Security Automation Engineer",
  avatar: "/images/raja.jpeg",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Telugu"],
};

const newsletter = {
  display: true,
  title: <>Let's Connect</>,
  description: (
    <>
      Feel free to reach out with engineering opportunities, collaborations, or technical discussions.
      I'm always open to connecting with fellow engineers, founders, and security researchers.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Rajasimhareddybolla",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raja-simha-reddy-bolla/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Raja230505",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rajasimhabolla@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Engineering Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>Applied AI & Security Automation Engineer</>,
  subline: (
    <>
      Ex-CSIRT SWE Intern at <InlineCode>Docusign</InlineCode> and AI Engineer at <InlineCode>Pinoxio</InlineCode>.
      <br />
      I engineer multi-agent security pipelines, low-latency LLM inference architectures, and distributed edge network defenses.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from Bengaluru, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Raja is a Computer Science and Engineering student at BMSCE specializing in scalable AI architectures, automated security pipelines, and low-latency distributed backend systems. With enterprise experience at Docusign CSIRT and Pinoxio, he builds resilient agentic workflows, fine-tunes specialized domain models, and designs distributed defenses across GCP, AWS, and Azure.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Docusign",
        timeframe: "May 2026 - August 2026",
        role: "CSIRT Software Engineer Intern",
        achievements: [
          <>
            Architected and deployed <strong>TriageX</strong>, an autonomous multi-agent AI pipeline (Endpoint, Threat Intel, and Synthesis agents) automating manual CSIRT triage protocols.
          </>,
          <>
            Engineered a parallelized prefetch pipeline across 7+ enterprise systems (Sentinel, Cortex XDR, Jira), normalizing 60k+ words of context into structured JSON and eliminating AI agent cold starts.
          </>,
          <>
            Slashed Mean Time to Triage (MTTT) from 2+ hours to under 3 minutes per alert, saving 140+ engineering hours/month with a 94% true-positive accuracy rate.
          </>,
          <>
            Enforced strict SOP guardrails and hardened agents against OWASP prompt injection, hallucination, and data extraction risks, reducing triage infrastructure costs to &lt;$1.00/alert.
          </>,
        ],
        images: [],
      },
      {
        company: "Pinoxio",
        timeframe: "December 2024 - February 2026",
        role: "AI & Backend Engineer (YC Technical Lead)",
        achievements: [
          <>
            Co-architected core platform infrastructure from scratch alongside a Senior Walmart Engineer, serving as technical lead on the Y Combinator application.
          </>,
          <>
            Developed an adaptive, real-time SAT math tutoring agent orchestrating dynamic prompt pipelines, knowledge graph traversal, and stateful evaluation loops.
          </>,
          <>
            Curated and fine-tuned a proprietary dataset of 1,000+ domain-specific instruction-response pairs, boosting mathematical reasoning accuracy by 9% while drastically lowering compute overhead.
          </>,
          <>
            Optimized streamed inference pipelines using distributed Redis caching and WebSockets, cutting streaming latency by 75% (40s down to 10s) and driving edge inference latency to 0.3s.
          </>,
        ],
        images: [],
      },
      {
        company: "Vignesh Agencies",
        timeframe: "January 2026 - February 2026",
        role: "Software Engineer (Contract)",
        achievements: [
          <>
            Architected an end-to-end field service and e-commerce platform using Flutter, Firebase Firestore, and Node.js Cloud Functions.
          </>,
          <>
            Designed fault-tolerant order checkout state machines with atomic transactions to eliminate inventory race conditions across simultaneous sessions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "B. M. S. College of Engineering (BMSCE)",
        description: <>Bachelor of Engineering in Computer Science and Engineering (2023 - 2027) · Current GPA: <strong>9.0 / 10.0</strong>.</>,
      },
      {
        name: "Narayana Junior College",
        description: <>Senior Secondary Education in Mathematics, Physics, and Chemistry with a score of <strong>97.5%</strong>.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI Security & Threat Evaluation",
        description: <>Autonomous red teaming, OWASP LLM Top 10 mitigation, MITRE ATLAS mapping, PyRIT adversarial crescendo attacks, and Garak vulnerability scanning.</>,
        images: [],
      },
      {
        title: "Agentic Systems & LLMs",
        description: <>Multi-agent orchestration (CrewAI, LangChain), Model Context Protocol (MCP), tool-calling agents, stateful evaluation loops, RAG, and domain instruction fine-tuning.</>,
        images: [],
      },
      {
        title: "Distributed Systems & Cloud Backend",
        description: <>High-throughput microservices using FastAPI, Flask, and Node.js; Linux socket-level telemetry (/proc/net/tcp); Docker, Kubernetes, AWS (EC2, VPC), GCP, and distributed Redis caching.</>,
        images: [],
      },
      {
        title: "Full-Stack & Mobile Development",
        description: <>Modern responsive web applications with Next.js 14, React, TypeScript, and Once UI; cross-platform mobile development with Flutter and reactive Firebase stores.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about AI, Systems & Security...",
  description: `Read technical writing and architecture breakdowns by ${person.name}`,
};

const work = {
  label: "Work",
  title: "Engineering Projects",
  description: `Showcase of production systems, research testbeds, and hackathon wins by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "Certificates & Achievements",
  description: `A collection of hackathon wins, honors, and technical certifications by ${person.name}`,
  images: [
    {
      src: "/images/gallery/gal/sophia.png",
      alt: "Sophia AI podcast generator",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/ml.png",
      alt: "Machine Learning certification",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/hack_win.png",
      alt: "Hackathon 1st place victory",
      orientation: "vertical",
      width: 9,
      height: 16,
    },
    {
      src: "/images/gallery/gal/pers.png",
      alt: "Harvard CS50x certification",
      orientation: "vertical",
      width: 9,
      height: 16,
    },
    {
      src: "/images/gallery/gal/IBM.png",
      alt: "IBM certification",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/db.png",
      alt: "Database design certification",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/cs50w.png",
      alt: "Harvard CS50W certification",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/sophia2.png",
      alt: "Sophia dynamic audio synthesis",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/DL.png",
      alt: "Deep Learning certification",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/lumi.png",
      alt: "Lumi project",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/cer.png",
      alt: "Nutanix Certified Associate",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
    {
      src: "/images/gallery/gal/cs50x.png",
      alt: "CS50x certification",
      orientation: "horizontal",
      width: 16,
      height: 9,
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

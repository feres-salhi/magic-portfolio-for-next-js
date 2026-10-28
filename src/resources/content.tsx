import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Fares",
  lastName: "Salhi",
  name: `Fares Salhi`,
  role: "Computer Science Student · AI Security · Software Development",
  avatar: "/images/avatar.jpg",
  email: "feressalhi425@gmail.com",
  location: "Europe/Berlin",
  city: "Darmstadt, Germany",
  languages: ["German (C1)", "English (C1)", "French (C1)"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/feres-salhi",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fares-salhi-03b53530a",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/fares-salhi-portfolio.jpg",
  label: "Home",
  title: `${person.name} – Cybersecurity & AI Security Portfolio`,
  description: `Portfolio of ${person.name}, computer science student at TU Darmstadt working in cybersecurity and AI security`,
  headline: <>Securing AI systems and the infrastructure behind them</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SÜSIE: Futury Build Days hackathon</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest project
        </Text>
      </Row>
    ),
    href: "/work/susie-ai-compliance-review",
  },
  subline: (
    <>
      I'm {person.firstName}, a computer science student at TU Darmstadt working in cybersecurity
      and AI security: threat detection and SIEM, system hardening and access control, data
      protection, and red-teaming of AI agents.
      <br /> Every project is tested, documented and backed by measurable results.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, computer science student at TU Darmstadt focused on AI security, based in Darmstadt, Germany`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a third-semester computer science student at TU Darmstadt, looking for a working
        student role in AI security, security engineering or software development. I learn by
        building: I set up hands-on labs in my own accounts, attack my own systems, fix what
        breaks, and document every step, including what went wrong and where the limits are.
      </>
    ),
  },
  highlights: {
    display: true,
    items: [
      { value: "6", label: "security projects published on GitHub" },
      { value: "0 / 224", label: "personal values leaked in my hackathon privacy test" },
      { value: "100%", label: "spoofed aircraft caught, 1.6% false alarms" },
      { value: "430 ms", label: "for my watchdog to stop a hijacked AI agent" },
    ],
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Technische Universität Darmstadt",
        description: (
          <>
            B.Sc. Computer Science, since 10/2025 (expected 2028). Coursework includes
            programming, algorithms and data structures, digital systems, logic and mathematics.
          </>
        ),
      },
      {
        name: "INSAT, Tunis",
        description: (
          <>
            Cycle Préparatoire (MPI), 2023–2024. A demanding preparatory program in mathematics,
            physics and computer science (algorithms, data structures, C).
          </>
        ),
      },
      {
        name: "Baccalauréat",
        description: <>2023, with honors, ranked in the top 0.7% of students nationwide.</>,
      },
    ],
  },
  participations: {
    display: true,
    title: "Hackathons & Competitions",
    items: [
      {
        name: "Futury Build Days 2026 – AI Edition",
        timeframe: "10/2026 · Frankfurt",
        role: "Team 10 · security and trust layer · by Futury, hessian.AI, MAINGAU and ITSG",
        status: "Certificate of Completion",
        points: [
          <>
            32-hour team hackathon. We built SÜSIE, an AI assistant for ITSG's legally required
            review of payroll software (§ 95b SGB IV).
          </>,
          <>
            I built the input guard (14/14 attacks stopped, 0 false alarms), quote-checked
            retrieval over 1,219 rulebook sections, a privacy airlock (0 of 224 planted personal
            values leaked) and tamper-evident report receipts. 167 tests pass.
          </>,
        ],
        images: [
          {
            src: "/images/projects/susie/certificate-full.jpg",
            alt: "Certificate of Completion, Futury Build Days 2026 AI Edition",
            width: 16,
            height: 22.7,
          },
        ],
        link: { label: "Read the project write-up", href: "/work/susie-ai-compliance-review" },
        internal: true,
      },
      {
        name: "Gray Swan Arena – AI Red-Teaming Competition",
        timeframe: "10/2026 · Online",
        role: "Individual participant",
        points: [
          <>
            Competed in Gray Swan's $300,000 indirect prompt injection challenge, sponsored by
            Anthropic, Meta, Google DeepMind and Reflection AI: hiding instructions in content
            that AI agents read, to make them act against their users.
          </>,
          <>Hands-on practice in the attack techniques I defend against in my own projects.</>,
        ],
        link: { label: "Gray Swan Arena", href: "https://app.grayswan.ai/arena" },
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AI Security",
        description: (
          <>
            Direct and indirect prompt injection, agent red-teaming, AI agent containment, RAG
            source verification and LLM privacy guards, tested against the OWASP Top 10 for LLM
            and Agentic Applications.
          </>
        ),
        tags: [
          { name: "promptfoo" },
          { name: "Anthropic API" },
          { name: "OWASP LLM / Agentic Top 10" },
          { name: "Adversarial ML" },
        ],
        images: [],
      },
      {
        title: "Security Engineering",
        description: (
          <>
            Sandboxing, deny-by-default policies with unit tests, input validation and integrity
            checks, monitored with dashboards defined as code.
          </>
        ),
        tags: [
          { name: "Docker" },
          { name: "Open Policy Agent (Rego)" },
          { name: "SHA-256 / HMAC" },
          { name: "Grafana" },
          { name: "Loki" },
        ],
        images: [],
      },
      {
        title: "Security Operations",
        description: (
          <>
            A working mini SOC on AWS: endpoint monitoring, a custom detection rule mapped to
            MITRE ATT&amp;CK and automated AI alert triage.
          </>
        ),
        tags: [
          { name: "Elastic Security (SIEM/EDR)" },
          { name: "KQL" },
          { name: "MITRE ATT&CK" },
          { name: "Tines (SOAR)" },
          { name: "AWS EC2" },
        ],
        images: [],
      },
      {
        title: "Security Fundamentals",
        description: (
          <>Risk assessment, security controls and frameworks, networking and GDPR basics.</>
        ),
        tags: [
          { name: "NIST CSF" },
          { name: "NIST RMF" },
          { name: "GDPR" },
          { name: "TCP/IP" },
          { name: "Firewalls & VPNs" },
        ],
        images: [],
      },
      {
        title: "Software Development",
        description: (
          <>
            Python since high school, Java and C through university. Tested code with CI on every
            push.
          </>
        ),
        tags: [
          { name: "Python" },
          { name: "Java" },
          { name: "C" },
          { name: "pytest" },
          { name: "scikit-learn" },
          { name: "GitHub Actions" },
          { name: "Git" },
        ],
        images: [],
      },
      {
        title: "Data & Automation",
        description: <>Dashboards and workflow automation for non-technical users.</>,
        tags: [{ name: "Power BI" }, { name: "Power Automate" }],
        images: [],
      },
    ],
  },
  certificates: {
    display: true,
    title: "Certificates",
    items: [
      {
        name: "Certificate of Completion – Futury Build Days 2026",
        issuer: "Futury, hessian.AI, MAINGAU and ITSG",
        date: "10/2026",
        description: <>32-hour AI hackathon, ITSG challenge.</>,
        link: { label: "View certificate", href: "/images/projects/susie/certificate-full.jpg" },
      },
      {
        name: "The Cybersecurity Threat Landscape",
        issuer: "LinkedIn Learning",
        date: "11/2024",
        description: <>Cybersecurity fundamentals and threat and vulnerability management.</>,
      },
    ],
  },
  lessons: {
    display: true,
    title: "What I've learned",
    items: [
      {
        title: "Deny by default beats blocklists",
        description: (
          <>
            The one place I used a list of forbidden files was exactly where the bypass happened.
          </>
        ),
        source: "AgentWarden",
      },
      {
        title: "Trust needs proof, not promises",
        description: (
          <>
            An AI answer should only be accepted when its source can be found word for word.
            Privacy belongs in front of the model: once data reaches an AI call, it's too late.
          </>
        ),
        source: "SÜSIE hackathon",
      },
      {
        title: "Breaking your own system is the real work",
        description: (
          <>
            A 100% headline number hid two real blind spots that only subtle, step-by-step
            attacks exposed.
          </>
        ),
        source: "ADS-B Spoofing Detector",
      },
      {
        title: "Trust the log, not the agent",
        description: (
          <>
            Models resist attacks silently and can confidently invent reasons. Without an audit
            log, nobody would know what really happened.
          </>
        ),
        source: "AgentWarden · AI Agent Permission Audit",
      },
      {
        title: "AI triage must stay advisory",
        description: (
          <>
            A "TEST" note inside a fake alert made the AI call it benign. Alert content can steer
            an AI, so its input must be treated as untrusted.
          </>
        ),
        source: "Mini SOC in the Cloud",
      },
      {
        title: "Keyword filters don't stop prompt injection",
        description: <>The attack that leaked the secret contained no suspicious word at all.</>,
        source: "AI Jailbreak Lab",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Security and AI security projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

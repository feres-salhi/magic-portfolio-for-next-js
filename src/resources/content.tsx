import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Fares",
  lastName: "Salhi",
  name: `Fares Salhi`,
  role: "Computer Science Student",
  avatar: "/images/avatar.jpg",
  email: "feressalhi425@gmail.com",
  location: "Europe/Berlin",
  languages: ["French", "German", "English", "Arabic"],
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I work on AI and AI security</>,
   featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AI Jailbreak Lab</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/ai-jailbreak-lab",
  },
  subline: (
    <>
      I'm {person.firstName}, a computer science student at TU Darmstadt, focused on AI and AI security. <br /> I like probing how systems break and building ones that hold up.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Darmstadt, Germany`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
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
        I'm a computer science student at TU Darmstadt, focused on AI and AI security.
        I like taking on hard problems, probing how systems break, and building things
        that actually run. Right now I'm learning mostly by building — small AI and
        security projects I can understand end to end.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Technische Universität Darmstadt",
        description: (
          <>Computer Science, 2025–2028. Two semesters in — working through Java, data structures, and the theoretical foundations of CS.</>
        ),
      },
      {
        name: "INSAT — Institut National des Sciences Appliquées et de Technologie",
        description: (
          <>2023–2024. A demanding année préparatoire (MPI): algorithms, data structures, C, and heavy math and physics theory.</>
        ),
      },
      {
        name: "The Cybersecurity Threat Landscape — LinkedIn Learning",
        description: (
          <>Certificate, Nov 2024. Cybersecurity fundamentals and threat & vulnerability management.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming",
        description: (
          <>Python (since high school), Java and C through university. Comfortable reading and writing real code.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Data structures & algorithms",
        description: (
          <>Built up through INSAT's prep year and two semesters at TU Darmstadt.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Machine learning (learning)",
        description: (
          <>The basics, applied hands-on — currently using ML in my Sentinel project.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Security (learning)",
        description: (
          <>Basic security tools and hands-on lab work, including my AI Jailbreak Lab.</>
        ),
        tags: [],
        images: [],
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
  description: `Design and dev projects by ${person.name}`,
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

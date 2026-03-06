import Image from "next/image";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";
import { Button } from "../components/button";
import { Link } from "../components/link";
import { ExpandableRole } from "../components/expandable-role";

const skillCategories = [
  {
    label: "Frontend & Frameworks",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "SSR/SSG",
      "Component-Driven Architecture",
      "Storybook",
    ],
  },
  {
    label: "AI & Automation",
    skills: [
      "AI Agents",
      "Prompt Engineering",
      "LLM Integration",
      "GitHub Copilot",
      "LangChain-Style Orchestration",
      "RAG",
      "Pipeline Automation",
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js",
      "REST",
      "GraphQL",
      "Microservices",
      "API Orchestration",
      "Schema Design",
    ],
  },
  {
    label: "DevOps & CMS",
    skills: [
      "GitHub Actions",
      "Docker",
      "Vercel",
      "CI/CD",
      "Observability",
      "Sanity.io",
      "MCP/Connector Integrations",
      "Content Schemas",
    ],
  },
];

const experience = [
  {
    title: "Staff Frontend Engineer",
    company: "Gladly",
    dates: "October 2021 – Present",
    description:
      "Leading AI-enabled developer workflows and marketing platform architecture for inbound growth.",
    bullets: [
      "Led design and delivery of AI-enabled developer workflows and production AI agents that automate page generation, content population, and template scaffolding via schema-aware MCP connections to our headless CMS.",
      "Built orchestration layer and agent framework to access CMS schemas, validate content, and perform safe CRUD operations, reducing content build time and manual QA by 50% and increasing team efficiency by 40\u201350%.",
      "Integrated prompt-driven front-end experiences allowing end-users to trigger content/feature builds; implemented RAG and schema validation to ensure accuracy and governance across generated pages.",
      "Architected and shipped Next.js + TypeScript marketing platforms with SSR/SSG strategies, achieving 95+ Core Web Vitals and a 40% increase in organic traffic.",
      "Migrated enterprise from WordPress to Sanity.io headless CMS with MCP connectors and real-time preview; cut content deployment cycles by 60%.",
      "Automated repetitive engineering tasks using LLM assistants, eliminating 1,000+ lines of boilerplate and accelerating feature delivery ~50%.",
      "Delivered structured data, schema markup, and technical SEO across 200+ pages yielding a 25% increase in search visibility.",
      "Established component library (40+ UI elements) with Figma-to-code automation, Storybook docs, and tokenized design system.",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "Pursuant",
    dates: "October 2016 – October 2021",
    description:
      "Engineered fundraising platforms for non-profit clients, generating $5M+ in annual donations.",
    bullets: [
      "Engineered fundraising platforms for 11 non-profit clients, generating $5M+ in annual donations through optimized donation flows and payment processing systems.",
      "Developed 15+ custom websites and applications using React, PHP, jQuery, and MySQL, maintaining 99.9% uptime across responsive, cross-browser compatible platforms.",
      "Integrated 6 payment gateways processing 50K+ annual transactions and 8 email marketing platforms serving 500K+ subscribers.",
      "Partnered with creative, analytics, and strategy teams to execute 40+ integrated campaigns, achieving average engagement rates 30% above industry benchmarks.",
    ],
  },
  {
    title: "Chief Digital Officer (Contractor)",
    company: "Corridor Business Journal",
    dates: "January 2012 – January 2024",
    description:
      "Directed all technical operations for regional business publication, managing IT infrastructure, web development, and programmatic advertising.",
    bullets: [
      "Directed all technical operations for regional business publication, managing IT infrastructure, web development, and programmatic advertising generating $200K+ annual revenue.",
      "Optimized custom WordPress platform with DFP/Google AdSense integration, increasing ad revenue by 45%.",
      "Expanded multimedia capabilities by implementing video galleries and social media integration, growing monthly page views by 60% to 150K+.",
    ],
  },
  {
    title: "Web Developer",
    company: "The Gazette Company",
    dates: "January 2014 – January 2015",
    description:
      "Frontend development for high-traffic news websites serving 500K+ monthly users.",
    bullets: [
      "Spearheaded frontend development for high-traffic news websites serving 500K+ monthly users, delivering responsive experiences across 10+ device types.",
      "Engineered real-time interactive features including live sports scoreboards, GPS-tracked reporter updates, and dynamic weather widgets, increasing user engagement by 35%.",
      "Integrated Saxotech CRM platform using JSONP for cross-domain data exchange, enabling seamless content syndication across 3 regional properties.",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "GoDaddy.com",
    dates: "January 2007 – January 2012",
    description:
      "Redesigned product interfaces achieving average +21.3% revenue increase within 3 weeks of deployment.",
    bullets: [
      "Redesigned 6 product interfaces under aggressive timelines, achieving average +21.3% revenue increase ($73K incremental), +5% order volume, and +15.9% average order value within 3 weeks of deployment.",
      "Served as lead developer for GoDaddy Marketplace, building collaborative eCommerce platform with interactive UI components and social integration.",
      "Developed customer-facing product management interfaces supporting 15+ browsers using ASP.NET, C#, jQuery, and SQL Server.",
      "Led development of WHOIS search interfaces with real-time data delivery from registrar/registry services.",
    ],
  },
];

const projects = [
  {
    title: "Gladly.ai redesign",
    description:
      "Led the full redesign and migration of Gladly\u2019s marketing site from WordPress to Next.js + Sanity.io, including a 40+ component design system and AI-enabled content workflows.",
    href: "/projects/alpha",
  },
  {
    title: "Zenday",
    description:
      "A minimal daily zen quote app that consumes an API to surface a new piece of wisdom each day.",
    href: "https://zenday-brown.vercel.app/",
  },
  {
    title: "Project Gamma",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    href: "#",
  },
];

export default function About() {
  return (
    <div className="isolate flex min-h-screen flex-col bg-lightgrey">
      <main className="container mx-auto px-4 py-12 md:py-24">
        {/* Hero / Intro */}
        <section className="mb-24 flex flex-col items-start gap-8 md:flex-row">
          <Image
            src="/Headshot.jpeg"
            alt="Headshot"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <div>
            <Heading as="h1">About Me</Heading>
            <Paragraph size="lg" className="mt-6 max-w-3xl">
              I&apos;m a full-stack engineer with 20 years building scalable,
              high-performance web platforms. From high-traffic news sites to
              enterprise marketing systems generating millions in revenue.
              <br />
              <br />
              My recent work sits at the intersection of frontend engineering
              and AI: building production AI agents, prompt-enabled developer
              workflows, and LLM integrations that let non-technical teams
              create pages through natural language. I care about clean
              architecture, measurable outcomes, and code that actually ships.
              <br />
              <br />
              Based in Eugene, OR. Currently a Staff Web Engineer at Gladly,
              focused on inbound growth marketing.
            </Paragraph>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-24">
          <Heading as="h2">Skills &amp; Technologies</Heading>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <Heading as="h3" size="3xl">
                  {category.label}
                </Heading>
                <ul className="mt-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-b border-black/10 py-3 font-london text-base"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <Heading as="h2">Experience</Heading>
          <div className="mt-8 space-y-10">
            {experience.map((role) => (
              <ExpandableRole key={role.company} {...role} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-24">
          <Heading as="h2">Projects</Heading>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group rounded-2xl bg-white p-6 no-underline transition-shadow hover:shadow-lg"
              >
                <Heading as="h3" size="3xl">
                  {project.title}
                </Heading>
                <Paragraph size="base" className="mt-3">
                  {project.description}
                </Paragraph>
                <span className="mt-4 inline-block font-london text-base text-primarygreen transition-colors group-hover:text-black">
                  View project →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-24 rounded-2xl bg-black px-8 py-12 text-center text-white md:px-16 md:py-16">
          <Heading as="h2" className="text-white">
            Get in touch
          </Heading>
          <Paragraph size="xl" className="mx-auto mt-4 max-w-2xl text-white/80">
            Whether you have a project in mind, a role to discuss, or just want
            to connect — I&apos;d love to hear from you.
          </Paragraph>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              as="a"
              href="/Samantha_Kollasch_Resume.pdf"
              variant="green"
              buttonIconStyle="download"
              className="hover:bg-white hover:text-black"
            >
              Download resume
            </Button>
            <Button
              as="a"
              href="mailto:myers.sam.m@gmail.com"
              variant="white"
              buttonIconStyle="arrow"
            >
              Email Me
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <Link
              href="https://www.linkedin.com/in/samantha-kollasch-1938824/"
              className="font-london text-base text-white/80 underline transition-colors hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/samkollasch"
              className="font-london text-base text-white/80 underline transition-colors hover:text-white"
            >
              GitHub (Personal)
            </Link>
            <Link
              href="https://github.com/skollasch"
              className="font-london text-base text-white/80 underline transition-colors hover:text-white"
            >
              GitHub (Work)
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

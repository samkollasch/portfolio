import Image from "next/image";
import { Heading } from "../../components/heading";
import { Paragraph } from "../../components/paragraph";
import { Link } from "../../components/link";

export default function ProjectAlpha() {
  return (
    <div className="isolate flex min-h-screen flex-col bg-lightgrey">
      <main className="container mx-auto px-4 py-12 md:py-24">
        {/* Back link */}
        <Link
          href="/about"
          className="mb-8 inline-block font-london text-base text-black no-underline hover:text-primarygreen"
        >
          &larr; Back to About
        </Link>

        {/* Project intro */}
        <section className="mb-24">
          <Heading as="h1">Gladly.com redesign</Heading>
          <Paragraph size="lg" className="mt-6 max-w-3xl">
            A complete redesign and re-architecture of Gladly&apos;s marketing
            site — from a legacy WordPress build to a modern Next.js + Sanity.io
            headless CMS platform. The project included a new design system, a
            component library of 40+ elements, and AI-enabled content workflows.
          </Paragraph>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Next.js",
              "TypeScript",
              "Sanity.io",
              "Tailwind CSS",
              "Storybook",
              "SSR/SSG",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/20 px-4 py-1.5 font-london text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Before & After */}
        <section className="mb-24">
          <Heading as="h2">Before &amp; after</Heading>
          <Paragraph
            size="base"
            className="mt-4 max-w-2xl text-navigation-description"
          >
            When I joined, the site was a dated WordPress build. I led the
            migration to a modern stack with a completely new visual identity
            and component-driven architecture.
          </Paragraph>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <Heading as="h3" size="2xl" className="mb-4">
                Before
              </Heading>
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                <Image
                  src="/projectAlpha/old_homepage.png"
                  alt="Old Gladly homepage"
                  width={1200}
                  height={2400}
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <Heading as="h3" size="2xl" className="mb-4">
                After
              </Heading>
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                <Image
                  src="/projectAlpha/home_v1.png"
                  alt="New Gladly homepage"
                  width={1200}
                  height={2400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Figma Design — Navigation */}
        <section className="mb-24">
          <Heading as="h2">Navigation design</Heading>
          <Paragraph
            size="base"
            className="mt-4 max-w-2xl text-navigation-description"
          >
            The Figma handoff for the redesigned navigation system — featuring
            mega menus with product breakdowns, solution filtering, and resource
            links.
          </Paragraph>
          <div className="mt-10 overflow-hidden rounded-xl border border-black/10 bg-white">
            <Image
              src="/projectAlpha/navigation.png"
              alt="Navigation design from Figma"
              width={1200}
              height={1800}
              className="w-full"
            />
          </div>
        </section>

        {/* View live site CTA */}
        <section className="mb-24 rounded-2xl bg-black px-8 py-12 text-center text-white md:px-16 md:py-16">
          <Heading as="h2" className="text-white">
            See it live
          </Heading>
          <Paragraph size="xl" className="mx-auto mt-4 max-w-2xl text-white/80">
            View the finished product on gladly.ai.
          </Paragraph>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="https://www.gladly.ai"
              target="_blank"
              className="rounded-full border border-white px-8 py-4 font-london text-base text-white no-underline transition-all duration-300 hover:bg-white hover:text-black"
            >
              Visit gladly.ai
            </Link>
            <Link
              href="/"
              target="_blank"
              className="rounded-full border border-primarygreen bg-primarygreen px-8 py-4 font-london text-base text-white no-underline transition-all duration-300 hover:bg-white hover:text-black"
            >
              View my recreation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

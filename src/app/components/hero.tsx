import { Button } from "./button";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import { Link } from "./link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-12 px-4 pb-6 lg:flex-row lg:pb-0">
      <div className="flex flex-col gap-6">
        <Heading as="h1">High-priority keyword and clear explainer</Heading>
        <Paragraph size="2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Paragraph>
        <div className="flex w-full xl:w-fit flex-row  gap-6 items-center justify-start">
          <Button
            as={Link}
            href="#cta_form"
            variant="black"
            buttonIconStyle="ai"
          >
            Primay CTA
          </Button>
          <Button as={Link} href="#" variant="green">
            Secondary CTA
          </Button>
        </div>
      </div>
      <div className="hidden md:flex md:relative aspect-580/700 w-full lg:h-[700px] lg:w-[580px]">
        <Image
          src="/home.png"
          alt="A woman with long blonde hair smiles while typing on a laptop. She wears a colorful, striped sweater. A green plant and a lamp are visible in the background."
          fill
          className="rounded-lg object-contain"
          sizes="580px"
          priority
          fetchPriority="high"
        />
      </div>
      <div className="md:hidden relative aspect-[343/180] w-full">
        <Image
          src="/homeMobile.png"
          alt="A woman with long blonde hair smiles while typing on a laptop. She wears a colorful, striped sweater. A green plant and a lamp are visible in the background."
          fill
          className="rounded-lg object-cover"
          sizes="100vw"
          priority
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

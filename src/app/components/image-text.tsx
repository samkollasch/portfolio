"use client";
import { Button } from "./button";
import Link from "next/link";
import { Paragraph } from "./paragraph";
import HeadingHighlight from "./heading-highlight";
import Image from "next/image";

export default function ImageText() {
  return (
    <div className="image-text py-12 lg:py-6">
      <div className="flex flex-col md:flex-row items-center gap-6 xl:gap-12">
        <div className="w-[60%]">
          <div className="hidden md:flex md:relative aspect-580/700 w-full lg:h-[700px] lg:w-[580px]">
            <Image
              src="/imageTextDesktop.png"
              alt="A woman with long blonde hair smiles while typing on a laptop. She wears a colorful, striped sweater. A green plant and a lamp are visible in the background."
              fill
              className="rounded-lg object-contain"
              sizes="580px"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
        <div className="md:hidden relative aspect-[343/180] w-full">
          <Image
            src="/imageTextMobile.png"
            alt="A woman with long blonde hair smiles while typing on a laptop. She wears a colorful, striped sweater. A green plant and a lamp are visible in the background."
            fill
            className="rounded-lg object-cover"
            sizes="100vw"
            priority
            fetchPriority="high"
          />
        </div>
        <div
          className="w-full xl:w-[40%]
            flex flex-col gap-6"
        >
          <HeadingHighlight
            headingText="Sed ut perspiciatis unde omnis iste"
            highlightText="perspiciatis unde"
          />
          <Paragraph
            size="2xl"
            className="text-base/normal tracking-[-0.16px] md:text-xl/[1.60] md:tracking-[-0.2px]"
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.{" "}
          </Paragraph>

          <Button as={Link} variant="arrowBlack" href="#" className="max-w-fit">
            See how it works
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Paragraph } from "./paragraph";
import { CSSProperties } from "react";
import { Button } from "./button";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { Heading } from "./heading";

export default function BackgroundCta() {
  const contentBlock = (
    <>
      <Heading as="h3" className="text-white">
        Duis aute irure
      </Heading>

      <Paragraph size="2xl" className="text-white">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit.
      </Paragraph>

      <Button
        as={Link}
        href="#"
        variant="white"
        buttonIconStyle="ai"
        className="w-fit"
      >
        Get to know us
      </Button>
    </>
  );

  return (
    <div
      className={twMerge(
        "bg-cover bg-center bg-no-repeat p-4 md:bg-(image:--image-url) md:p-0 md:h-[800px]",
      )}
      style={
        {
          "--image-url": "url(/backgroundCTA.jpg)",
        } as CSSProperties
      }
    >
      {/* Mobile: Pod layout with color scheme */}
      <div className="bg-black text-white flex flex-col items-center gap-6 rounded-lg p-6 text-center md:hidden">
        {contentBlock}
      </div>

      {/* Desktop: Original layout */}
      <div className="hidden h-full w-full flex-col justify-start gap-6 px-4 py-12 md:flex md:w-[55%] md:pl-[25px] xl:w-[47%] xl:pt-[100px] xl:pl-[100px]">
        {contentBlock}
      </div>
    </div>
  );
}

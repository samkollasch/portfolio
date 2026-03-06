"use client";

import { Button } from "./button";
import Link from "next/link";
import { Paragraph } from "./paragraph";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface MasonryCardProps {
  cardTitle: string;
  cardText: string;
  button: string;
  buttonText: string;
  icon: string;
  mobileImage: string;
  image: string;
  imageLocation: string;
  colorScheme: "black" | "white";
}

export const MasonryCard = ({
  cardTitle,
  cardText,
  button,
  buttonText,
  icon,
  image,

  colorScheme,
}: MasonryCardProps) => {
  return (
    <div
      className={twMerge(
        "masonry-card h-fit w-full rounded-lg p-6 md:overflow-hidden",
        colorScheme === "black" ? "bg-[#252525]" : "bg-white",
      )}
    >
      <div className="flex justify-start gap-6 text-start flex-col">
        {icon ? <Image alt="icon" src={icon} width={72} height={72} /> : null}
        <div className="card-text flex flex-col gap-3">
          <Paragraph size="2xl">{cardTitle}</Paragraph>
          <Paragraph
            size="xl"
            className={twMerge(
              colorScheme === "black" ? "text-[#AAA]" : "text-[#4A4A4A]",
            )}
          >
            {cardText}
          </Paragraph>

          {button && (
            <Button
              as={Link}
              variant="linkArrowWhite"
              href={button}
              className="max-w-fit"
            >
              {buttonText}
            </Button>
          )}
        </div>

        {image && (
          <div className="card-image relative w-full">
            <Image
              src={image}
              alt="masonry wall image"
              fill
              className="rounded-sm object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

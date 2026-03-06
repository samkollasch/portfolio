"use client";

import { EmblaOptionsType } from "embla-carousel";
import { Button } from "./button";
import Link from "next/link";
import MediaCarousel from "./media-carousel";
import HeadingHighlight from "./heading-highlight";

const mediaCarouselItems = [
  {
    image: "/crateImage.jpg",
    mobileImage: "/crateImage.jpg",
    customerLogo: "/logos/CrateAndBarrel.svg",
    text: "\u201CWith Company A, our agents are helping customers across channels from a single view that makes their work easier.\u201D",
    name: "Kate Davis",
    title: "VP Customer Care",
    company: "Crate&Barrel",
  },
  {
    image: "/nordstromimage.jpg",
    mobileImage: "/nordstromimage.jpg",
    customerLogo: "/logos/nordstrom.svg",
    text: "\u201CWe want to build a loyal relationship with a conversation that goes over years and months. It shouldn\u2019t feel like a transaction. That\u2019s why we chose Company A.\u201D",
    name: "Jim Stark",
    title: "Manager Customer Care",
    company: "Nordstrom",
  },
  {
    image: "/kuhlImage.jpg",
    mobileImage: "/kuhlImage.jpg",
    customerLogo: "/logos/kuhl.svg",
    text: "\u201COur AI kicks in and starts answering common, repetitive questions. If something goes wrong or it\u2019s a more complex inquiry, the AI routes the customer straight to an agent.\u201D",
    name: "Nancy Brown",
    title: "Manager Customer Care",
    company: "Kuhl",
  },
  {
    image: "/kalkomeyImage.jpg",
    mobileImage: "/kalkomeyImage.jpg",
    customerLogo: "/logos/kalkomy.svg",
    text: "\u201CCompany A makes it incredibly easy for non-technical teams to configure and optimize AI. We can launch updates ourselves in minutes, which means faster results and less dependency on engineering.\u201D",
    name: "Deborah F.",
    title: "Sr. CX Manager",
    company: "Kalkomey",
  },
];

export default function MediaCarouselBlock() {
  const OPTIONS: EmblaOptionsType = { loop: true, containScroll: false };

  return (
    <div className="py-12 md:pb-24">
      <div className="max-w-screen-wrap mx-auto flex flex-col items-center gap-6 px-4 md:gap-12">
        <div className="flex max-w-[700px] flex-col items-center gap-6 text-center">
          <HeadingHighlight
            headingText="Why world-class brands"
            highlightText="choose us"
            highlightBg="oklch(91.86% 0.058 145.09)"
            highlightPosition="last"
          />
        </div>
        <div className="mx-auto grid w-full grid-cols-1 items-start gap-24 px-0">
          {mediaCarouselItems ? (
            <div className="py-3 md:py-6">
              <MediaCarousel
                mediaCarouselItems={mediaCarouselItems}
                options={OPTIONS}
                total={3}
              />
            </div>
          ) : null}
        </div>

        <Button
          as={Link}
          variant="black"
          href="#"
          className="max-w-fit"
          buttonIconStyle="person"
        >
          More customer stories
        </Button>
      </div>
    </div>
  );
}

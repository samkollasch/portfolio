"use client";

import { EmblaOptionsType } from "embla-carousel";
import { ResultsCarouselItemProps } from "./results-carousel-item";
import ResultsCarousel from "./results-carousel";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

const resultsCarouselItems: ResultsCarouselItemProps[] = [
  {
    icon: "/staticon1.svg",
    iconHover: "/staticon1hover.svg",
    heading: "Quis autem vel eum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/stat1.png",
  },
  {
    icon: "/staticon2.svg",
    iconHover: "/staticonhover2.svg",
    heading: "Nemo enim ipsam",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    image: "/stat2.png",
  },
  {
    icon: "/staticon3.svg",
    iconHover: "/staticon3hover.svg",
    heading: "Sed ut perspiciatis",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.",
    image: "/stat3.jpg",
  },
  {
    icon: "/staticon4.svg",
    iconHover: "/staticonhover4.svg",
    heading: "At vero accusamus",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    image: "/stat4.jpg",
  },
];

export default function ResultsCarouselBlock() {
  const OPTIONS: EmblaOptionsType = { loop: true, containScroll: false };

  return (
    <div className="max-w-screen-wrap mx-auto flex flex-col items-center gap-6 px-4 text-center py-6 md:py-12 md:gap-24">
      <div className="mx-auto flex max-w-200 flex-col gap-6">
        <Heading as="h3">
          At vero eos et
          <br /> accusamus et iusto
        </Heading>

        <Paragraph size="xl">
          Odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident.
        </Paragraph>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 md:gap-12">
        <ResultsCarousel
          resultsCarouselItems={resultsCarouselItems}
          options={OPTIONS}
          iconColorScheme="green"
        />
      </div>
    </div>
  );
}

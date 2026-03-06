import { Paragraph } from "./paragraph";

import { Heading } from "./heading";
import { twMerge } from "tailwind-merge";
import { CSSProperties } from "react";
import { MasonryRow } from "./masonry-row";
import { MasonryCardProps } from "./masonry-card";

const masonryCards: MasonryCardProps[] = [
  {
    cardTitle: "Lorem ipsum dolor sit amet consectetur",
    cardText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.",
    image: "/card1.png",
    button: "",
    buttonText: "",
    icon: "",
    mobileImage: "",
    imageLocation: "top",
    colorScheme: "black",
  },

  {
    cardTitle: "Nemo enim ipsam voluptatem",
    cardText:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    icon: "/phoneIcon.svg",
    button: "#",
    buttonText: "Explore more features",
    image: "",
    mobileImage: "",
    imageLocation: "",
    colorScheme: "black",
  },

  {
    cardTitle: "At vero eos et accusamus et iusto",
    cardText:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
    button: "#",
    buttonText: "See how it works",
    icon: "/phoneIcon.svg",
    image: "",
    mobileImage: "",
    imageLocation: "",
    colorScheme: "black",
  },
  {
    cardTitle: "Temporibus autem quibusdam",
    cardText:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    image: "/card2.jpg",
    button: "",
    buttonText: "",
    icon: "",
    mobileImage: "",
    imageLocation: "top",
    colorScheme: "black",
  },
];

export default function MasonryWall() {
  return (
    <div className="bg-black text-white pt-12 md:pt-24">
      <div className="mx-auto max-w-screen">
        <div className="flex flex-col items-center justify-center gap-12 text-center md:gap-24">
          <div className="flex max-w-[750px] flex-col gap-6">
            <Heading as="h3">Duis aute irure dolor in reprehenderit</Heading>

            <div
              className={twMerge("md:px-[var(--padding-x)] px-4")}
              style={{ "--padding-x": 20 } as CSSProperties}
            >
              <Paragraph size="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </Paragraph>
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-12 px-4 xl:px-0">
            <MasonryRow masonryCards={masonryCards} />
          </div>
        </div>
      </div>
    </div>
  );
}

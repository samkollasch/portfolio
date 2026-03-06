import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import AutoPlay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  ResultsCarouselItemProps,
  ResultsCarouselItemFeature,
} from "./results-carousel-item";
import Fade from "embla-carousel-fade";
import { useDotButton } from "./carousel-dot-button";
import { Heading } from "./heading";
import { twMerge } from "tailwind-merge";
import { useCallback } from "react";
import { Paragraph } from "./paragraph";
import Image from "next/image";

type PropType = {
  resultsCarouselItems: ResultsCarouselItemProps[];
  options?: EmblaOptionsType;
  iconColorScheme: "green" | "purple" | undefined;
};

const ResultsCarousel: React.FC<PropType> = (props) => {
  const { resultsCarouselItems, options, iconColorScheme } = props;

  // Only enable autoplay if there are multiple items
  const hasMultipleItems =
    resultsCarouselItems && resultsCarouselItems.length > 1;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    hasMultipleItems ? [Fade(), AutoPlay()] : [Fade()],
  );

  // @ts-expect-error plugin sets type
  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);
  const { selectedIndex, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  // Return null if no items (after all hooks)
  if (!resultsCarouselItems || resultsCarouselItems.length === 0) {
    return null;
  }

  const selectedItem = resultsCarouselItems[selectedIndex];

  return (
    <div className="results-carousel mx-auto flex w-full flex-col justify-start gap-6 md:flex-row md:gap-24">
      {/* Mobile: Buttons at top */}
      <div className="grid grid-cols-2 gap-2 md:hidden [&>*:last-child:nth-child(odd)]:col-span-2">
        {resultsCarouselItems.map((resultsCarouselItem, index) => (
          <button
            key={index}
            className={twMerge(
              "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors",
              index === selectedIndex
                ? iconColorScheme === "purple"
                  ? "border-brand-secondary bg-secondarypurple text-white"
                  : "border-primarygreen bg-primarygreen text-white"
                : iconColorScheme === "purple"
                  ? "border-white bg-white hover:border-secondarypurple"
                  : "border-white bg-white hover:border-primarygreen",
            )}
            type="button"
            onClick={() => onDotButtonClick(index)}
          >
            <div className="icon flex h-6 w-6 items-center justify-center">
              <Image
                src={
                  index === selectedIndex
                    ? resultsCarouselItem.iconHover
                    : resultsCarouselItem.icon
                }
                alt=""
                width={16}
                height={16}
                className="max-h-4 max-w-4"
              />
            </div>
            <Paragraph
              size="base"
              className={index === selectedIndex ? "text-white" : ""}
            >
              {resultsCarouselItem.heading}
            </Paragraph>
          </button>
        ))}
      </div>

      {/* Mobile: Content card */}
      <div className="bg-white rounded-lg p-6 text-left md:hidden">
        <div className="flex flex-col gap-4">
          <Heading as="h4" size="3xl">
            {selectedItem?.heading}
          </Heading>
          <Paragraph size="base">{selectedItem?.text}</Paragraph>
          {selectedItem?.image && (
            <div className="mt-4">
              <Image
                src={selectedItem.image}
                alt=""
                width={343}
                height={300}
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Desktop: Original layout */}
      <section className="results-carousel-embla m-0 hidden md:block md:w-1/2">
        <div
          className="results-carousel-embla__viewport w-full overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex backface-hidden">
            {resultsCarouselItems.map((resultsCarouselItem, index) => (
              <div className="min-w-0 shrink-0 grow-0 basis-full" key={index}>
                <ResultsCarouselItemFeature {...resultsCarouselItem} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="embla__dots hidden w-full flex-col items-start justify-center md:flex md:w-1/2 xl:w-[31%]">
        {resultsCarouselItems.map((resultsCarouselItem, index) => (
          <button
            key={index}
            className={twMerge(
              "embla__button w-full border-b border-b-brand-border py-8 text-left first:pt-0",
              iconColorScheme == "purple"
                ? "[&_.icon]:bg-secondarypurple"
                : "[&_.icon]:bg-primarygreen",
              index === selectedIndex
                ? "embla__button_results--selected [&_.icon-hover]:flex [&_.icon-main]:hidden [&_.text-display]:flex"
                : "[&_.icon]:bg-white [&_.icon-hover]:hidden [&_.icon-main]:flex",
            )}
            type="button"
            onClick={() => onDotButtonClick(index)}
          >
            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                <div className="icon h-12 w-12 shrink-0 rounded-full p-3">
                  <Image
                    src={resultsCarouselItem.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="icon-main max-h-[24px] max-w-[24px]"
                  />
                  <Image
                    src={resultsCarouselItem.iconHover}
                    alt=""
                    width={24}
                    height={24}
                    className="icon-hover hidden max-h-[24px] max-w-[24px]"
                  />
                </div>
                <Heading as="h5" className="">
                  {resultsCarouselItem.heading}
                </Heading>
              </div>
              <Paragraph size="lg" className="text-display hidden">
                {resultsCarouselItem.text}
              </Paragraph>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResultsCarousel;

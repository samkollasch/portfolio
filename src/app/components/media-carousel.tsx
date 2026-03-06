"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import AutoPlay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carousel-arrow-button";
import Fade from "embla-carousel-fade";
import { MediaCarouselItemFeature } from "./media-carousel-item";
import { useDotButton } from "./carousel-dot-button";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type MediaCarouselItemData = {
  scrollProgress?: number;
  showProgressBar?: boolean;
  customerLogo: string;
  text: string;
  image: string;
  title: string;
  name: string;
  company: string;
  mobileImage: string;
};

type PropType = {
  mediaCarouselItems: MediaCarouselItemData[];
  options?: EmblaOptionsType;
  total?: number;
};

const MediaCarousel: React.FC<PropType> = (props) => {
  const { mediaCarouselItems, options } = props;

  // Only enable autoplay if there are multiple items
  const hasMultipleItems = mediaCarouselItems && mediaCarouselItems.length > 1;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: hasMultipleItems,
      ...options,
    },
    hasMultipleItems
      ? [
          Fade(),
          AutoPlay({
            delay: 6000, // This is the time between slides (e.g., 4 seconds)
            stopOnInteraction: false,
          }),
        ]
      : [Fade()],
  );

  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    setScrollProgress(emblaApi.scrollProgress());
  }, [emblaApi]);

  // Centralized function to stop autoplay
  const stopAutoplay = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.stop();
      }
    }
  }, [emblaApi]);

  // Centralized function to play autoplay
  const playAutoplay = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.play();
      }
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Add dot button hook for mobile logo navigation
  const onNavButtonClick = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.reset();
      }
    }
  }, [emblaApi]);

  const { selectedIndex, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  // Return null if no items (after all hooks)
  if (!mediaCarouselItems || mediaCarouselItems.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center">
      {/* Mobile: Logo buttons at top */}
      {hasMultipleItems && (
        <div className="mb-4 grid grid-cols-2 gap-2 md:hidden">
          {mediaCarouselItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onDotButtonClick(index)}
              aria-label={item.company || item.name || `Slide ${index + 1}`}
              aria-pressed={index === selectedIndex}
              className={twMerge(
                "flex h-12 items-center justify-center rounded-lg border px-5 py-4 transition-colors",
                index === selectedIndex
                  ? "border-primarygreen bg-primarygreen"
                  : "border-white bg-white hover:border-primarygreen",
              )}
            >
              {item.customerLogo ? (
                <Image
                  src={item.customerLogo}
                  width={60}
                  height={15}
                  alt=""
                  aria-hidden="true"
                  className={twMerge(
                    "h-[15px] max-h-[15px] w-auto max-w-[60px] object-contain",
                    index === selectedIndex ? "brightness-0 invert" : "",
                  )}
                />
              ) : (
                <span
                  className={twMerge(
                    "text-sm font-medium",
                    index === selectedIndex ? "text-white" : "text-black",
                  )}
                >
                  {item.company || item.name || `Slide ${index + 1}`}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      <div className="relative flex flex-col justify-center gap-6 md:flex-row md:gap-0">
        <section className="emblaHorizontal flex min-w-0 flex-1 flex-col items-start justify-start">
          <div
            className="emblaHorizontal__viewport w-full"
            ref={emblaRef}
            onMouseEnter={stopAutoplay}
            onMouseLeave={playAutoplay}
          >
            <div className="emblaHorizontal__container flex">
              {" "}
              {mediaCarouselItems.map((mediaCarouselItem, index) => (
                <div
                  className="emblaHorizontal__slide flex-shrink-0 flex-grow-0 basis-full"
                  key={index}
                >
                  <MediaCarouselItemFeature
                    {...mediaCarouselItem}
                    scrollProgress={scrollProgress}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {props.total && props.total > 1 && (
          <div className="emblaHorizontal__controls hidden md:relative md:top-auto md:right-auto md:grid tablet-only:right-4">
            <div className="emblaHorizontal__buttons grid-cols-2 md:grid-cols-1">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                onMouseEnter={stopAutoplay}
                onMouseLeave={playAutoplay}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                onMouseEnter={stopAutoplay}
                onMouseLeave={playAutoplay}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCarousel;

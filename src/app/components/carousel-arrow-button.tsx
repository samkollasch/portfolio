"use client";

import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    // Schedule initial selection check in the next tick to avoid synchronous setState in the effect
    const timeoutId = window.setTimeout(() => onSelect(emblaApi), 0);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
    return () => {
      clearTimeout(timeoutId);
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = Omit<ComponentPropsWithRef<"button">, "ref">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <>
      <button
        className="emblaHorizontal__button emblaHorizontal__button--prev hidden border-1 border-[#0d0d0d1a] opacity-[.5] hover:border-primarygreen hover:opacity-[1] md:flex"
        type="button"
        aria-label="Go to previous slide"
        {...restProps}
      >
        <svg
          className="emblaHorizontal__button__svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="m17.71 11.29-5-5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-5 5a1.004 1.004 0 0 0 1.42 1.42L11 9.41V17a1 1 0 1 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"
            fill="#0D0D0D"
          />
        </svg>

        {children}
      </button>

      <button
        className="emblaHorizontal__button emblaHorizontal__button--prev flex h-11 w-11 items-center justify-center bg-brand-lightgrey md:hidden"
        type="button"
        aria-label="Go to previous slide"
        {...restProps}
      >
        <svg
          className="emblaHorizontal__button__svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path
            d="M11 5H3.41l3.3-3.29A1.004 1.004 0 0 0 5.29.29l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a.998.998 0 0 0 1.42 0 .999.999 0 0 0 0-1.42L3.41 7H11a1 1 0 1 0 0-2Z"
            fill="#0D0D0D"
          />
        </svg>

        {children}
      </button>
    </>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <>
      <button
        className="emblaHorizontal__button emblaHorizontal__button--next hidden md:flex"
        type="button"
        aria-label="Go to next slide"
        {...restProps}
      >
        <svg
          className="emblaHorizontal__button__svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M17.71 11.29a1.002 1.002 0 0 0-1.42 0L13 14.59V7a1 1 0 0 0-2 0v7.59l-3.29-3.3a1.004 1.004 0 0 0-1.42 1.42l5 5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0c.123-.048.235-.119.33-.21l5-5a1.002 1.002 0 0 0 0-1.42Z"
            fill="#0D0D0D"
          />
        </svg>
        {children}
      </button>

      <button
        className="emblaHorizontal__button emblaHorizontal__button--next flex h-11 w-11 items-center justify-center bg-brand-lightgrey md:hidden"
        type="button"
        aria-label="Go to next slide"
        {...restProps}
      >
        <svg
          className="emblaHorizontal__button__svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path
            d="M11.92 5.62a1 1 0 0 0-.21-.33l-5-5a1.004 1.004 0 0 0-1.42 1.42L8.59 5H1a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"
            fill="#0D0D0D"
          />
        </svg>
        {children}
      </button>
    </>
  );
};

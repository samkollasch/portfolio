"use client";

import { Heading } from "./heading";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";

interface HeadingHighlightProps {
  headingText: string;
  highlightText: string;
  highlightBg?: string;
  highlightPosition?: "first" | "last";
}

export default function HeadingHighlight({
  headingText,
  highlightText,
  highlightBg = "oklch(91.86% 0.058 145.09)",
  highlightPosition = "last",
}: HeadingHighlightProps) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // entry.target.classList.add("wiggle");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, []);

  const sizeClasses = {
    h1: "text-4xl/[1.5] md:text-7xl/[1.5] md:tracking-[-4.8px] xl:text-8xl/[1.2] xl:tracking-[-5.76px]",
    h2: "text-4xl/[1.5] md:text-7xl/[1.5] md:tracking-[-3.2px]",
    h3: "text-2xl/[1.5] md:text-6xl/[1.5] md:tracking-[-2.4px]",
    h4: "text-2xl/[1.5] md:text-[56px]/[1.5] md:tracking-[-1.6px]",
    h5: "text-xl/[1.5] md:text-[32px]/[1.5] md:tracking-[-0.8px]",
  };

  const highlightSpan = (
    <span
      className={twMerge(
        "inline rounded-lg mx-2 px-2 pb-1 md:px-3 md:pb-2 box-decoration-clone",
        sizeClasses["h3"],
      )}
      style={{ background: highlightBg }}
    >
      {highlightText}
    </span>
  );

  return (
    <div className="">
      {highlightPosition === "first" ? (
        <>
          {highlightSpan} <Heading as="h3">{headingText}</Heading>
        </>
      ) : (
        <>
          <Heading as="h3">{headingText}</Heading> {highlightSpan}
        </>
      )}
    </div>
  );
}

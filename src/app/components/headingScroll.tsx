"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { Heading } from "./heading";

interface HeadingScrollProps {
  text: string;
  linkText: string;
}
export const HeadingScroll = ({ text, linkText }: HeadingScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["250px end", "start start"],
  });

  //const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]); // Map scrollYProgress (0-1) to opacity (0-1)

  return (
    <div className="py-6 bg-lightgrey">
      <div className="mx-auto flex max-w-[1080px] items-start gap-5 px-4 text-[24px] leading-[32px] font-medium tracking-[-0.48px] md:gap-10 md:text-[56px] md:leading-[68px] md:tracking-[-2.24px]">
        <motion.div
          ref={containerRef}
          style={{ opacity }}
          data-text={"hello world"}
        >
          <Heading as="h3" className="inline">
            {linkText && text.includes(linkText) ? (
              <>
                {text.split(linkText)[0]}
                <a href="#" className="text-primarygreen underline">
                  {linkText}
                </a>
                {text.split(linkText)[1]}
              </>
            ) : (
              text
            )}
          </Heading>
        </motion.div>
      </div>
    </div>
  );
};

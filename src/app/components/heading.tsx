import { tv, VariantProps } from "tailwind-variants";
import { ReactNode } from "react";
import React from "react";

const heading = tv({
  base: "font-london normal-case not-italic",
  variants: {
    size: {
      xl: "text-base/[1.5] tracking-[-0.16px] md:text-xl/[1.6] md:tracking-[-0.2px]",
      "2xl":
        "text-lg/[1.55] tracking-[-0.36px] md:text-2xl/[1.6] md:tracking-[-0.96px]",
      "3xl":
        "text-xl/[1.6] tracking-[-0.04px] md:text-[32px]/[1.5] md:tracking-[-1.28px]",
      "4xl":
        "text-xl/[1.6] tracking-[-0.04px] md:text-[48px]/[1.3] md:tracking-[-1.28px]",
      "5xl":
        "text-2xl/[1.33] tracking-[-0.48px] md:text-[56px]/[1.2] md:tracking-[-2.24px]",
      "6xl":
        "text-2xl/[1.33] tracking-[-0.48px] md:text-6xl/[1.06] md:tracking-[-3.2px]",
      "7xl":
        "text-3xl/[1.12] tracking-[-0.56px] md:text-7xl/[1] md:tracking-[-3.6px]",
      "8xl":
        "text-4xl/[1.1] tracking-[-1.28px] md:text-7xl/[1] md:tracking-[-3.6px] xl:text-8xl/[1] xl:tracking-[-5.76px]",
    },
  },
  defaultVariants: {
    size: "5xl",
  },
});

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";

type HeadingVariants = VariantProps<typeof heading>;

export const defaultSizes: Record<HeadingTags, HeadingVariants["size"]> = {
  h1: "8xl",
  h2: "7xl",
  h3: "6xl",
  h4: "5xl",
  h5: "3xl",
  h6: "2xl",
  div: "xl",
  span: "xl",
};

export interface HeadingProps extends HeadingVariants {
  children?: ReactNode;
  className?: string;
  as?: HeadingTags;
}

export const Heading = ({
  as = "h2",
  size,
  className,
  children,
}: HeadingProps) => {
  const props = {
    className: heading({
      size: size ?? defaultSizes[as],
      className,
    }),
    id: String(children),
    children: children,
  };

  return React.createElement(as, props, children);
};

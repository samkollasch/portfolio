import { tv, VariantProps } from "tailwind-variants";

const paragraph = tv({
  base: "font-london font-normal",
  variants: {
    size: {
      sm: "text-xs/[1.6] tracking-[-0.36] md:text-sm/[1.4] md:tracking-[-0.12]",
      base: "text-sm/[1.4] tracking-[-0.12px] md:text-base/[1.6] md:tracking-[-0.36]",
      lg: "text-sm/[1.4] tracking-[-0.14px] md:text-lg/[1.8] md:tracking-[-0.36px]",
      xl: "text-base/[1.5] tracking-[-0.16px] md:text-xl/[1.60] md:tracking-[-0.2px]",
      "2xl":
        "text-lg/[1.5] tracking-[-0.36px] md:text-2xl/[1.40] md:tracking-[-0.96]",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

type ParagraphVariants = VariantProps<typeof paragraph>;

interface ParagraphProps extends ParagraphVariants {
  children?: React.ReactNode;
  className?: string;
}

export const Paragraph = ({
  children,
  size = "xl",
  className,
}: ParagraphProps) => (
  <p className={paragraph({ size, className })}>{children}</p>
);

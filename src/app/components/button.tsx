"use client";

import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { PlayIconBlack } from "./icons/play-icon-black";
import { PlayIconWhite } from "./icons/play-icon-white";
import { AIIconBlack } from "./icons/ai-icon-black";
import { AIIconWhite } from "./icons/ai-icon-white";
import { UserIconBlack } from "./icons/user-icon-black";
import { UserIconWhite } from "./icons/user-icon-white";
import { DownloadIconWhite } from "./icons/download";
import { DownloadIconBlack } from "./icons/download-black";

const button = tv({
  base: "button-base min-w-fit cursor-pointer rounded-full font-london tracking-[-0.36px] normal-case no-underline transition-all duration-500", // editorconfig-checker-disable-line
  variants: {
    variant: {
      default:
        "bg-black p-[8px] pl-[20px] text-lg/[.88] text-white group-hover:text-white hover:bg-primarygreen hover:[&_.ai-icon]:bg-black",
      black:
        "bg-black p-[8px] pl-[20px] text-lg/[.88] text-white group-hover:text-white hover:bg-primarygreen hover:[&_.ai-icon]:bg-black",
      purple:
        "bg-secondarypurple px-[20px] py-[16px] text-lg/[.88] text-white hover:bg-black",
      green:
        "group bg-primarygreen px-[20px] py-[16px] text-lg/[.88] text-white hover:bg-black",
      white:
        "group bg-white p-[8px] pl-[20px] text-lg/[.88] text-black hover:bg-primarygreen hover:text-white hover:[&_.ai-icon]:bg-white hover:[&_.ai-green]:flex hover:[&_.ai-white]:hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const linkButton = tv({
  base: "button-base flex min-w-fit cursor-pointer p-0 font-london text-base/[1] tracking-[-0.32px] normal-case no-underline transition-all duration-500", // editorconfig-checker-disable-line
  variants: {
    variant: {
      default: "items-center text-black hover:text-primarygreen",
      arrowBlack: "items-center text-black hover:text-primarygreen",
      linkArrowWhite:
        "items-center text-white hover:underline md:text-lg/[.88] md:tracking-[-0.36px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const combinedButton = tv({
  base: twMerge(button.base, linkButton.base),
  variants: {
    variant: {
      ...button.variants.variant,
      ...linkButton.variants.variant,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type CombinedButtonVariants = VariantProps<typeof combinedButton>;

const arrowIcon = (
  <div className="mr-3 rounded-full bg-white p-3">
    <svg
      className="text-[#0D0D0D] fill-current"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.92 5.62a1 1 0 0 0-.21-.33l-5-5a1.004 1.004 0 0 0-1.42 1.42L8.59 5H1a1 1 0 1 0 0 2h7.59l-3.3 3.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
    </svg>
  </div>
);

const linkArrowIcon = (
  <svg
    className={twMerge("fill-current hover:text-brand-primary text-white")}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.001 1.001 0 0 0 .325 1.639 1 1 0 0 0 1.095-.22l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
  </svg>
);

function IconDisplay(buttonIconStyle: string, variant: string) {
  const iconSizeClass =
    "h-[18px] w-[18px] md:h-[23px] md:w-[23px] xl:h-[34px] xl:w-[34px]";

  switch (buttonIconStyle) {
    case "ai":
      if (variant === "white") {
        return (
          <>
            <AIIconBlack
              width={24}
              height={24}
              className={`ai-green hidden ${iconSizeClass}`}
            />
            <AIIconWhite
              width={24}
              height={24}
              className={`ai-white ${iconSizeClass}`}
            />
          </>
        );
      }
      return (
        <AIIconWhite
          width={24}
          height={24}
          className={twMerge("ai-white", iconSizeClass)}
        />
      );
    case "arrow":
      if (variant === "purple") {
        return (
          <PlayIconBlack width={24} height={24} className={iconSizeClass} />
        );
      } else if (variant === "white") {
        return (
          <>
            <PlayIconBlack
              width={24}
              height={24}
              className={`ai-green hidden ${iconSizeClass}`}
            />
            <PlayIconWhite
              width={24}
              height={24}
              className={`ai-white ${iconSizeClass}`}
            />
          </>
        );
      } else {
        return (
          <PlayIconWhite
            width={24}
            height={24}
            className={twMerge("ai-white", iconSizeClass)}
          />
        );
      }

    case "person": {
      if (variant === "purple" || variant === "green") {
        return (
          <UserIconBlack width={24} height={24} className={iconSizeClass} />
        );
      }
      if (variant === "white") {
        return (
          <>
            <UserIconBlack
              width={24}
              height={24}
              className={`ai-green hidden ${iconSizeClass}`}
            />
            <UserIconWhite
              width={24}
              height={24}
              className={`ai-white ${iconSizeClass}`}
            />
          </>
        );
      }
      return (
        <UserIconWhite
          width={24}
          height={24}
          className={twMerge("ai-white", iconSizeClass)}
        />
      );
    }

    case "download": {
      if (variant === "purple" || variant === "green") {
        return (
          <>
            <DownloadIconBlack
              width={24}
              height={24}
              className={`ai-white group-hover:hidden ${iconSizeClass}`}
            />
            <DownloadIconWhite
              width={24}
              height={24}
              className={`hidden group-hover:block ${iconSizeClass}`}
            />
          </>
        );
      }
      return (
        <DownloadIconWhite
          width={24}
          height={24}
          className={twMerge("ai-white", iconSizeClass)}
        />
      );
    }

    default:
      return (
        <PlayIconWhite
          width={24}
          height={24}
          className={twMerge("ai-white", iconSizeClass)}
        />
      );
  }
}

// Button Component
interface ButtonProps<
  T extends ElementType = "button",
> extends CombinedButtonVariants {
  as?: T;
  children: ReactNode;
  className?: string;
  buttonIconStyle?: string | undefined | null;
  onClick?: () => void;
}

const Button = <T extends ElementType = "button">({
  as,
  children,
  variant,
  buttonIconStyle,
  className,
  onClick,
  ...props
}: ButtonProps<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as ?? "button";
  const cleanVariant = variant ?? "";
  const isLinkArrow = cleanVariant in (linkButton.variants?.variant ?? {});
  const noIcon =
    (cleanVariant === "purple" || cleanVariant === "green") && !buttonIconStyle;

  const iconContainer = isLinkArrow ? (
    cleanVariant === "linkArrowWhite" ? (
      linkArrowIcon
    ) : (
      arrowIcon
    )
  ) : !noIcon ? (
    <div
      className={twMerge(
        `p-3 ai-icon transition-background-color flex h-[40px] w-[40px] items-center justify-center rounded-full duration-500 md:h-[46px] md:w-[46px] xl:h-[46px] xl:w-[46px]`,
        cleanVariant === "green" || cleanVariant === "purple"
          ? "bg-white group-hover:bg-primarygreen"
          : "bg-primarygreen",
      )}
    >
      {IconDisplay(buttonIconStyle ?? "play", cleanVariant)}
    </div>
  ) : null;

  return (
    <Component
      className={combinedButton({
        variant,
        className: twMerge(
          (cleanVariant === "green" || cleanVariant === "purple") &&
            !noIcon &&
            "p-[8px] pl-[20px]",
          className,
        ),
      })}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      {...props}
    >
      <div className="text-container flex items-center justify-between gap-3 text-base xl:text-lg">
        {isLinkArrow && cleanVariant !== "linkArrowWhite" && iconContainer}
        {children}
        {(!isLinkArrow || cleanVariant === "linkArrowWhite") && iconContainer}
      </div>
    </Component>
  );
};

export { Button };

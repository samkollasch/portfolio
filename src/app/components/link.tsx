"use client";

import NextLink from "next/link";

export const Link = ({
  href,
  children,
  onClick,
  ...rest
}: React.ComponentProps<typeof NextLink>) => {
  const isExternalLink =
    typeof href === "string" &&
    (href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("//") ||
      href.startsWith("mailto:")) &&
    !/^(https?:)?\/\/(www\.)?gladly\.ai/.test(href);

  const externalProps = isExternalLink
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      {...rest}
      {...externalProps}
      href={href}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
    >
      {children}
    </NextLink>
  );
};

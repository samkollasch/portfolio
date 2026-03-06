"use client";

import { useState, useEffect } from "react";
import { Logo } from "./icons/logo";
import { Button } from "./button";
import { Link } from "./link";
import { NavigationMobile } from "./navigation-mobile";
import { NavigationDesktop } from "./navigation";
import { twMerge } from "tailwind-merge";
import { useIsMobile } from "./hooks/isMobile";
import { useIsTablet } from "./hooks/isMobile";

export const HeaderMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Derive an effective open state so we don't synchronously set state inside an effect
  const effectiveMenuOpen = menuOpen && isMobileOrTablet;

  useEffect(() => {
    if (effectiveMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [effectiveMenuOpen]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="relative bg-lightgrey px-4">
      <div className="flex items-center justify-between gap-4 py-1 md:py-5">
        <Link href="/" aria-label="Go to home">
          <Logo className="shrink-0" width="109" height="27" />
        </Link>
        <div className="flex items-center justify-between gap-4">
          {!isMobileOrTablet && <NavigationDesktop />}
        </div>
        <div className="flex items-center justify-between">
          {!isMobileOrTablet && (
            <div className="hidden items-center gap-4 md:flex">
              <Button
                as={Link}
                href="/get-started/"
                variant="black"
                buttonIconStyle="ai"
              >
                Primary CTA
              </Button>
            </div>
          )}
          {isMobileOrTablet && (
            <button
              className="flex h-15 w-15 cursor-pointer flex-col justify-center gap-1 rounded-full p-3"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Open menu" : "Close my menu"}
            >
              <span
                className={twMerge(
                  "mx-auto h-[1px] w-[16px] bg-black transition-transform duration-300 ease-in-out",
                  menuOpen && "origin-center translate-y-[5px] rotate-45",
                )}
              />
              <span
                className={twMerge(
                  "mx-auto h-[1px] w-[16px] bg-black transition-opacity duration-300 ease-in-out",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={twMerge(
                  "mx-auto h-[1px] w-[16px] bg-black transition-transform duration-300 ease-in-out",
                  menuOpen && "origin-center -translate-y-[5px] -rotate-45",
                )}
              />
            </button>
          )}
        </div>
      </div>
      <NavigationMobile key={menuOpen.toString()} open={menuOpen} />
    </div>
  );
};

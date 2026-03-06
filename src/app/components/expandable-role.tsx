"use client";

import { useState } from "react";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

interface ExpandableRoleProps {
  title: string;
  company: string;
  dates: string;
  description: string;
  bullets: string[];
}

export const ExpandableRole = ({
  title,
  company,
  dates,
  description,
  bullets,
}: ExpandableRoleProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-black/10 pt-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full cursor-pointer text-left"
      >
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <Heading as="h3" size="3xl">
            {title}
          </Heading>
          <div className="flex items-center gap-3">
            <Paragraph size="base" className="text-navigation-description">
              {dates}
            </Paragraph>
            <svg
              className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
        <Paragraph size="lg" className="mt-1 font-bold">
          {company}
        </Paragraph>
        <Paragraph size="base" className="mt-3 max-w-2xl">
          {description}
        </Paragraph>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 max-w-2xl space-y-2 pl-5">
            {bullets.map((bullet, i) => (
              <li key={i} className="list-disc font-london text-sm/[1.6]">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

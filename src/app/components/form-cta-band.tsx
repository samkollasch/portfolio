"use client";

import { useState } from "react";
import { Paragraph } from "./paragraph";
import HeadingHighlight from "./heading-highlight";
import { Heading } from "./heading";

export default function FormCtaBand() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-primarygreen py-12">
      <div className="flex flex-col items-center justify-center py-12 lg:flex-row lg:py-0">
        <div className="w-full px-4 py-6 text-center lg:w-1/2 lg:px-25 lg:text-left">
          <div className="flex flex-col gap-6 px-12 text-white lg:px-0 [&_span]:last:lg:mt-[3px]">
            <HeadingHighlight
              highlightText="Lorem ipsum dolor."
              headingText="Sed ut perspiciatis unde omnis iste natus error sit."
              highlightBg="black"
              highlightPosition="first"
            />
            <Paragraph size="xl" className="text-white">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </Paragraph>
          </div>
        </div>

        <div className="m-6 flex justify-center lg:w-1/2">
          {/* FORM HERE */}
          <a id="cta_form"></a>
          <div className="w-full max-w-[500px] rounded-lg bg-white p-8 md:p-10">
            <form className="flex flex-col gap-6">
              <Heading as="h5" className="text-center">
                Request a demo
              </Heading>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name*"
                    required
                    className="rounded-lg border border-gray-300 px-4 py-3 text-base text-black placeholder-gray-400 outline-none focus:border-primarygreen"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    required
                    className="rounded-lg border border-gray-300 px-4 py-3 text-base text-black placeholder-gray-400 outline-none focus:border-primarygreen"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Work Email*"
                  required
                  className="rounded-lg border border-gray-300 px-4 py-3 text-base text-black placeholder-gray-400 outline-none focus:border-primarygreen"
                />

                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-400 outline-none focus:border-primarygreen"
                  >
                    <option value="" disabled>
                      Country*
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="flex items-start gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300"
                  />
                  <span>
                    By completing this form, I agree to receive marketing and
                    other communications from Company A Software, Inc.
                  </span>
                </label>

                <div className="flex items-center gap-2 text-sm">
                  <a href="#" className="text-primarygreen underline">
                    Privacy Policy
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="text-primarygreen underline">
                    Terms of Use
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-black px-10 py-4 text-lg text-white transition-colors hover:bg-primarygreen"
                >
                  Get a demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

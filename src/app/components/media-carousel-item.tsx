"use client";

import { useIsMobile } from "./hooks/isMobile";
import Image from "next/image";
import { Paragraph } from "./paragraph";

interface MediaCarouselItemInternalProps {
  scrollProgress?: number;
  showProgressBar?: boolean;
  customerLogo: string;
  text: string;
  image: string;
  title: string;
  name: string;
  company: string;
  mobileImage: string;
}

export const MediaCarouselItem = ({
  customerLogo,
  text,
  image,
  name,
  title,
  company,
  mobileImage,
  scrollProgress,
  showProgressBar,
}: MediaCarouselItemInternalProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="emblaHorizontal__slide relative container mx-auto flex h-[400px] w-full max-w-full flex-col items-start gap-4 rounded-lg bg-white md:h-full md:max-w-[1300px] md:flex-row md:justify-around md:gap-6">
      {/* Text content - third on mobile, first on desktop */}
      <div className="order-3 flex flex-col items-start gap-6 rounded-tl-lg rounded-tr-lg px-4 pb-3 md:order-1 md:px-8 md:pt-8 md:pb-12">
        {customerLogo ? (
          <Image
            src={customerLogo}
            width={100}
            height={32}
            className="mt-0 mb-0 hidden md:block"
            loading="lazy"
            alt={name}
          />
        ) : null}
        <Paragraph
          size={isMobile ? "lg" : "xl"}
          className="tablet-only:text-base tablet-only:leading-[1.6] tablet-only:tracking-[-0.36px]"
        >
          {text}
        </Paragraph>
        <div className="flex items-center gap-3">
          {name ? (
            <div>
              <Paragraph size="base">{name}</Paragraph>
              {title ? (
                <Paragraph size="base" className="text-sm! text-[#4A4A4A]">
                  {title}
                  {company ? `, ${company}` : null}
                </Paragraph>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {/* Image/video - second on mobile, second on desktop */}
      <div className="order-2 w-full shrink-0 px-4 pt-3 md:w-[40%] md:max-w-[400px] md:px-0 md:pt-0">
        {image ? (
          <div className="flex w-full justify-center p-0 md:justify-end md:p-0">
            {image && isMobile ? (
              <div className="relative aspect-video max-h-[236px] w-full">
                <Image
                  src={mobileImage ?? image}
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                  alt={name}
                />
              </div>
            ) : null}

            {image && !isMobile ? (
              <div className="relative mt-[5px] mr-[5px] aspect-square w-full max-h-[400px]">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* Progress bar - mobile only */}
      {showProgressBar && (
        <div className="absolute right-8 bottom-6 left-8 md:hidden">
          <div className="emblaHorizontal__progress-bar-container">
            <div
              className="emblaHorizontal__progress-bar"
              style={{ width: `${(scrollProgress || 0) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

type MediaCarouselItemFeatureProps = MediaCarouselItemInternalProps & {
  scrollProgress?: number;
  showProgressBar?: boolean;
  customerLogo: string;
  text: string;
  image: string;
  title: string;
  name: string;
  company: string;
  mobileImage: string;
};

export const MediaCarouselItemFeature = (
  props: MediaCarouselItemFeatureProps,
) => {
  return <MediaCarouselItem {...props} />;
};

import Image from "next/image";

export interface ResultsCarouselItemProps {
  image: string;
  icon: string;
  iconHover: string;
  heading: string;
  text: string;
}

export const ResultsCarouselItem = ({ image }: ResultsCarouselItemProps) => {
  return (
    <div className="results-carousel-embla__slide mx-auto flex flex-col items-start">
      <div className="flex w-full justify-start md:p-0">
        <div className="relative aspect-364/326 md:aspect-600/662 w-full max-w-[600px]">
          <Image
            src={image}
            alt=""
            width={600}
            height={662}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export const ResultsCarouselItemFeature = (props: ResultsCarouselItemProps) => {
  return <ResultsCarouselItem {...props} />;
};

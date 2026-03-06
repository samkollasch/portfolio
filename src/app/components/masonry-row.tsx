import { MasonryCard, MasonryCardProps } from "./masonry-card";

interface MasonryRowProps {
  masonryCards: MasonryCardProps[];
}
export const MasonryRow = ({ masonryCards }: MasonryRowProps) => {
  return (
    <div className="card-group w-full justify-center xl:w-[1300px] md:columns-2 gap-6 space-y-3 [&_.card-image]:h-[360px] [&_.masonry-card]:md:p-10 [&_.masonry-card]:xl:w-[650px]">
      {masonryCards.map((masonryCard, index) => (
        <MasonryCard key={index} {...masonryCard} />
      ))}
    </div>
  );
};

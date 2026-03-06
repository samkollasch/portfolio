import BackgroundCta from "./components/background-cta";
import FormCtaBand from "./components/form-cta-band";
import { Header } from "./components/header";
import { HeadingScroll } from "./components/headingScroll";
import Hero from "./components/hero";
import ImageText from "./components/image-text";
import InlineTextCta from "./components/inline-text-cta";
import LogoBlock from "./components/logo-block";
import MasonryWall from "./components/masonry-wall";
import MediaCarouselBlock from "./components/media-carousel-block";
import ResultsCarouselBlock from "./components/results-carousel-block";

export default function Home() {
  return (
    <div className="isolate flex min-h-screen flex-col bg-lightgrey">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Hero />
        <LogoBlock />
        <ImageText />
        <MediaCarouselBlock />
      </main>
      <MasonryWall />
      <main className="container mx-auto px-4 py-12">
        <ResultsCarouselBlock />
      </main>
      <InlineTextCta />
      <div className="py-12">
        <HeadingScroll
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          linkText="consectetur adipiscing elit"
        />
        <HeadingScroll
          text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
          linkText="nostrud exercitation"
        />
      </div>

      <BackgroundCta />
      <FormCtaBand />
    </div>
  );
}

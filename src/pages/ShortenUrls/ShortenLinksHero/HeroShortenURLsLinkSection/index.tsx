import HeroContainerShortenUrls from "../HeroContainerShortenUrls";
import HeroContentContainerShortenUrls from "../HeroContainerContainerShortenLinks";


export default function HeroShortenUrlsSection():JSX.Element {
  return (
    <section id="hero">
      {/* Hero Container */}
      <HeroContainerShortenUrls>
        {/* Hero Content Container */}
        <HeroContentContainerShortenUrls>
          <>
          {/* Title */}
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">Short Links</h1>
            {/* Marketing  brangind text*/}
          </>
        </HeroContentContainerShortenUrls>
      </HeroContainerShortenUrls>
    </section>
  );
}
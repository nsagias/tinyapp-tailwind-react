import HeroButtonsContainer from "./components/HeroButtonsContainer";
import HeroContainer from "./components/HeroContainer";
import HeroContentContainer from "./components/HeroContentContainer";
import HeroImage from "./components/HeroLandingPageImage";

export default function HeroShortenUrlsSection({}):JSX.Element {
  return (
    <section id="hero">
      {/* Hero Container */}
        <HeroContainer>
          {/* Content Container */}
          <HeroContentContainer>
            {/* Title */}
            <>
              <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">Short Links</h1>
              {/* Marketing  brangind text*/}
            </>
          </HeroContentContainer>
        </HeroContainer>
    </section>
  );
}
import HeroContainer from "./HeroContainer";
import HeroContentContainer from "./HeroContentContainer";

export default function Hero() {
  return (
    <section id="hero">
      {/* Hero Container */}
        <HeroContainer>
          {/* Content Container */}
          <HeroContentContainer>

          </HeroContentContainer>
          {/* Image Container */}
        </HeroContainer>
    </section>
  );
}
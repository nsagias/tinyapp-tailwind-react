import CTASection from "./CTASection";
import HeroLandingPage from "./HeroHome/HeroHomeSection";
import MarketingSectionContainer from "./MarketingSection/MarketingSectionContainer";

export default function HomeContainer(): JSX.Element {
  return (
    <>
      <HeroLandingPage  />
      <MarketingSectionContainer />
      <CTASection />
    </>
  );
}
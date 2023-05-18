import CTASection from "./Components/CTASection";
import HeroLandingPage from "./Components/HeroHome/HeroHomeSection";
import MarketingSectionContainer from "./Components/MarketingSection/MarketingSectionContainer";

export default function HomeContainer(): JSX.Element {
  return (
    <>
      <HeroLandingPage  />
      <MarketingSectionContainer />
      <CTASection />
    </>
  );
}
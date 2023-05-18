import CTASection from "../../components/CTASection";
import HeroLandingPage from "../../components/HeroSection/HeroHomeSection";
import MarketingSectionContainer from "../../components/MarketingSection/MarketingSectionContainer";

export default function HomeContainer(): JSX.Element {
  return (
    <>
      <HeroLandingPage  />
      <MarketingSectionContainer />
      <CTASection />
    </>
  );
}
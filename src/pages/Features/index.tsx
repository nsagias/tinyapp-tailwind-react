import CTASection from "../../Components/CTASection";
import HeroFeaturesSection from "../../Components/HeroSection/HeroFeaturesSection";
import MarketingSectionContainer from "../../Components/MarketingSection/MarketingSectionContainer";

export default function Features(): JSX.Element {
  return (
    <>
      <HeroFeaturesSection />
      <MarketingSectionContainer />
      <CTASection />
    </>
  );
}
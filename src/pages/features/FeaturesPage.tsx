import CTASection from "../../components/CTASection/CTASection";
import HeroFeaturesSection from "../../components/HeroSection/HeroFeaturesSection";
import MarketingSectionContainer from "../../components/MarketingSection/MarketingSectionContainer";

export default function Features(): JSX.Element {
  return (
    <>
      <HeroFeaturesSection />
      <MarketingSectionContainer />
      <CTASection />
    </>
  );
}
import CTASection from "../../components/CTASection/CTASection";
import HeroFeaturesSection from "../../components/heroSection/HeroFeaturesSection";
import MarketingSectionContainer from "../../components/marketingSection/MarketingSectionContainer";

export default function Features(): JSX.Element {
  return (
    <>
      <HeroFeaturesSection />
      <MarketingSectionContainer />
      <CTASection />
    </>
  );
}
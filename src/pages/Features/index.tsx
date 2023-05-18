import CTASection from "../Home/CTASection";
import HeroFeaturesSection from "./HeroFeaturesSection";
import MarketingSectionContainer from "../Home/MarketingSection/MarketingSectionContainer";

export default function Features(): JSX.Element {
  return (
    <>
      <HeroFeaturesSection />
      <MarketingSectionContainer />
      <CTASection />
    </>
  );
}
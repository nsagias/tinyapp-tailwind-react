import CTASection from "../Home/Components/CTASection";
import HeroFeaturesSection from "./Components/HeroFeaturesSection";
import MarketingSectionContainer from "../Home/Components/MarketingSection/MarketingSectionContainer";

export default function Features(): JSX.Element {
  return (
    <>
      <HeroFeaturesSection />
      <MarketingSectionContainer />
      <CTASection />
    </>
  );
}
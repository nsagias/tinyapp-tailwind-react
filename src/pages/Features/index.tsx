import CTASection from "../../components/CTASection";
import HeroFeaturesSection from "./HeroFeaturesSection";
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
import CTASection from "../../Components/CTASection";
import HeroPricingSection from "../../Components/HeroSection/HeroPricingSection";
import MarketingSectionContainer from "../../Components/MarketingSection/MarketingSectionContainer";

export default function PricingPage(): JSX.Element {
  return (
    <>
      <HeroPricingSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
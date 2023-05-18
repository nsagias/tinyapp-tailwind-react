import CTASection from "../Home/CTASection";
import HeroPricingSection from "./HeroPricingSection";
import MarketingSectionContainer from "../Home/MarketingSection/MarketingSectionContainer";

export default function PricingPage(): JSX.Element {
  return (
    <>
      <HeroPricingSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
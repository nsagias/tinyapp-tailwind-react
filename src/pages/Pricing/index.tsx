import CTASection from "../Home/Components/CTASection";
import HeroPricingSection from "./Components/HeroPricingSection";
import MarketingSectionContainer from "../Home/Components/MarketingSection/MarketingSectionContainer";

export default function PricingPage(): JSX.Element {
  return (
    <>
      <HeroPricingSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
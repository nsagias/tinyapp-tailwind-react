import CTASection from "../../components/CTASection";
import HeroPricingSection from "./HeroPricingSection";
import MarketingSectionContainer from "../../components/MarketingSection/MarketingSectionContainer";

export default function PricingPage(): JSX.Element {
  return (
    <>
      <HeroPricingSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
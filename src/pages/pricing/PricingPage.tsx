import CTASection from "../../components/CTASection/CTASection";
import HeroPricingSection from "../../components/heroSection/HeroPricingSection";
import MarketingSectionContainer from "../../components/marketingSection/MarketingSectionContainer";

export default function PricingPage(): JSX.Element {
  return (
    <>
      <HeroPricingSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
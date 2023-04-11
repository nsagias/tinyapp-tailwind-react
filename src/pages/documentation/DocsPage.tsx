import CTASection from "../../components/CTASection/CTASection";
import HeroDocumentationSection from "../../components/heroSection/HeroDocumentationSection";
import MarketingSectionContainer from "../../components/marketingSection/MarketingSectionContainer";

export default function Docs():JSX.Element {
  return (
    <>
      <HeroDocumentationSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
import CTASection from "../../Components/CTASection";
import HeroDocumentationSection from "../../Components/HeroSection/HeroDocumentationSection";
import MarketingSectionContainer from "../../Components/MarketingSection/MarketingSectionContainer";

export default function Docs():JSX.Element {
  return (
    <>
      <HeroDocumentationSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
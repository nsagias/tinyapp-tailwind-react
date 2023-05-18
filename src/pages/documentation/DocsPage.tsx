import CTASection from "../../components/CTASection";
import HeroDocumentationSection from "../../components/HeroSection/HeroDocumentationSection";
import MarketingSectionContainer from "../../components/MarketingSection/MarketingSectionContainer";

export default function Docs():JSX.Element {
  return (
    <>
      <HeroDocumentationSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
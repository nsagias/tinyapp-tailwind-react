import CTASection from "../Home/CTASection";
import HeroDocumentationSection from "./HeroDocumentationSection";
import MarketingSectionContainer from "../Home/MarketingSection/MarketingSectionContainer";

export default function Docs():JSX.Element {
  return (
    <>
      <HeroDocumentationSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
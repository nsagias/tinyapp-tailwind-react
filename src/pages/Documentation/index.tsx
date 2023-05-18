import CTASection from "../Home/Components/CTASection";
import HeroDocumentationSection from "./Components/HeroDocumentationSection";
import MarketingSectionContainer from "../Home/Components/MarketingSection/MarketingSectionContainer";

export default function Docs():JSX.Element {
  return (
    <>
      <HeroDocumentationSection />
      <CTASection />
      <MarketingSectionContainer />
    </>
  );
}
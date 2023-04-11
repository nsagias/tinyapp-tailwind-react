import CTASection from "../../components/CTASection/CTASection";
import HeroLandingPage from "../../components/heroSection/HeroHomeSection";
import MarketingSectionContainer from "../../components/marketingSection/MarketingSectionContainer";

export default function HomeContainer({}): JSX.Element {
  return (
    <>
    <HeroLandingPage  />
    <MarketingSectionContainer />
    <CTASection />
    </>
  )
}
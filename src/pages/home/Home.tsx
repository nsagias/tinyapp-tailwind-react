import CTASection from "../../components/CTASection/CTASection";
import HeroLandingPage from "../../components/heroSection/HeroLandingPage";
import MarketingSectionContainer from "../../components/marketing/MarketingSectionContainer";

export default function HomeContainer({}): JSX.Element {
  return (
    <>
    <HeroLandingPage  />
    <MarketingSectionContainer />
    <CTASection />
    </>
  )
}
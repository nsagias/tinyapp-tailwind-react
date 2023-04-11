import CTASection from "../../components/CTASection/CTASection";
import Hero from "../../components/heroSection/Hero";
import MarketingSectionContainer from "../../components/marketing/MarketingSectionContainer";

export default function HomeContainer({isLoggedIn}: { isLoggedIn: boolean}): JSX.Element {
  return (
    <>
    <Hero authorized={isLoggedIn} />
    <MarketingSectionContainer />
    <CTASection />
    </>
  )
}
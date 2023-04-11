import CTASection from "../CTASection/CTASection";
import Hero from "../heroSection/Hero";
import MarketingSectionContainer from "../marketing/MarketingSectionContainer";

export default function HomeContainer({isLoggedIn}: { isLoggedIn: boolean}): JSX.Element {
  return (
    <>
    <Hero authorized={isLoggedIn} />
    <MarketingSectionContainer />
    <CTASection />
    </>
  )
}
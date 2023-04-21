import HeroShortenUrlsSection from "../../components/heroSection/HeroShortenUrlsSection";
import ShortenSection from "../../components/shortenSection/ShortenSection";

export default function ShortenUrlPage({ isAuthenticated }: { isAuthenticated : boolean }): JSX.Element {
  return (
    <>
      <HeroShortenUrlsSection />
      <ShortenSection isAuthenticated={isAuthenticated}/>
    </>
  );
}
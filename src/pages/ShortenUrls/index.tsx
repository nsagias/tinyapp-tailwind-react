import HeroShortenUrlsSection from "./Components/ShortenLinksHero/HeroShortenURLsLinkSection";
import ShortenSection from "./Components/ShortenLinkSection/ShortenSection";

export default function ShortenUrlPage({ isAuthenticated }: { isAuthenticated : boolean }): JSX.Element {
  return (
    <>
      <HeroShortenUrlsSection />
      <ShortenSection isAuthenticated={isAuthenticated}/>
    </>
  );
}
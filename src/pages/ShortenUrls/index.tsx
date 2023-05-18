import HeroShortenUrlsSection from "../../Components/HeroSection/HeroShortenUrlsSection";
import ShortenSection from "../../Components/ShortenLinkSection/ShortenSection";

export default function ShortenUrlPage({ isAuthenticated }: { isAuthenticated : boolean }): JSX.Element {
  return (
    <>
      <HeroShortenUrlsSection />
      <ShortenSection isAuthenticated={isAuthenticated}/>
    </>
  );
}
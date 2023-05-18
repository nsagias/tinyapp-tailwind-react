import HeroShortenUrlsSection from "../../components/HeroSection/HeroShortenUrlsSection";
import ShortenSection from "../../components/ShortenLinkSection/ShortenSection";

export default function ShortenUrlPage({ isAuthenticated }: { isAuthenticated : boolean }): JSX.Element {
  return (
    <>
      <HeroShortenUrlsSection />
      <ShortenSection isAuthenticated={isAuthenticated}/>
    </>
  );
}
import HeroShortenUrlsSection from "../../components/HeroSection/HeroShortenUrlsSection";
import ShortenSection from "../../components/ShortenSection/ShortenSection";

export default function ShortenUrlPage({ isAuthenticated }: { isAuthenticated : boolean }): JSX.Element {
  return (
    <>
      <HeroShortenUrlsSection />
      <ShortenSection isAuthenticated={isAuthenticated}/>
    </>
  );
}
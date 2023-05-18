import HeroShortenUrlsSection from "../../components/HeroSection/HeroShortenURLsLinkSection";
import ShortenSection from "./ShortenLinkSection/ShortenSection";

export default function ShortenUrlPage({ isAuthenticated }: { isAuthenticated : boolean }): JSX.Element {
  return (
    <>
      <HeroShortenUrlsSection />
      <ShortenSection isAuthenticated={isAuthenticated}/>
    </>
  );
}
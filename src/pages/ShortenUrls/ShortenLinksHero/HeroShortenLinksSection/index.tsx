import { Link } from "react-router-dom";
import HeroButtonsContainer from "../../../../components/HeroSection/Components/HeroButtonsContainer";
import HeroContentContainerShortLink from "../../../../components/HeroSection/HeroContentContainers/HercoContentContainerShortLinks";
import HeroContainerShortLink from "../../../../components/HeroSection/HeroContentContainers/HeroContainerShortLink";

export default function HeroShortLinksSection({ shortLinkData }: { shortLinkData: any }):JSX.Element {
  return (
    <section id="hero-short-links-section">
      {/* Hero Container ShortLink */}
        <HeroContainerShortLink>
          {/* Content Container */}
          <HeroContentContainerShortLink>
            {/* Title */}
            <>
              <h3 className="text-5xl font-bold text-center lg:text-6xl">Link Stats</h3>
              {/* Marketing  brangind text*/}
              <p className="text-2xl text-center text-gray-400 ">Click count: {(shortLinkData && shortLinkData.data && shortLinkData.data.count) || 0}</p>
            </>
            {/* Button */}
            <HeroButtonsContainer>
              {/* TODO ADD onClick and routing */}
              <Link to={"/shorturls"} className="py-5 px-10 text-xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">Return To Short Links</Link>
            </HeroButtonsContainer>
          </HeroContentContainerShortLink>
        </HeroContainerShortLink>
    </section>
  );
}
import HeroButtonsContainer from "./components/HeroButtonsContainer";
import HeroContainer from "./components/HeroContainer";
import HeroContentContainer from "./components/HeroContentContainer";
import HeroImage from "./components/HeroLandingPageImage";

export default function HeroFeaturesSection({}):JSX.Element {
  return (
    <section id="hero">
      {/* Hero Container */}
        <HeroContainer>

          {/* Content Container */}
          <HeroContentContainer>
            {/* Title */}
            <>
              <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">Your short links host</h1>
              {/* Marketing  brangind text*/}
              <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">Build your brand and get detailed insights on how your links are ranking.</p>
            </>

            {/* Button */}
            <HeroButtonsContainer>
            {/* TODO ADD onClick and routing */}
              <a href="# " className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">Get Started</a>
            </HeroButtonsContainer>
           
          </HeroContentContainer>

          {/* Hero Image */}
          <HeroImage />
          
        </HeroContainer>
    </section>
  );
}
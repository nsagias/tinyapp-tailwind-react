import HeroContainer from "./HeroContainer";
import HeroContentContainer from "./HeroContentContainer";

export default function Hero() {
  return (
    <section id="hero">
      {/* Hero Container */}
        <HeroContainer>

          {/* Content Container */}
          <HeroContentContainer>
            
            {/* Title */}
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">Your short links host</h1>

            {/* Marketing  brangind text*/}
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">Build your brand and get detailed insights on how your links are ranking.</p>

            {/* Button */}
            <div className="mx-auto lg:mx-0">
              <a href="# " className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">Get Started</a>
            </div>

          </HeroContentContainer>

          {/* Image Container */}
        </HeroContainer>
    </section>
  );
}
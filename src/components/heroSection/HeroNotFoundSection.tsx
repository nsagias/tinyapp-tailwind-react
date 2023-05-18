import HeroContainer from "./components/HeroHomeContainer";
import HeroContentContainer from "./components/HeroContentContainer";


export default function HeroNotFoundSection({}):JSX.Element {
  return (
    <section id="hero">
      {/* Hero Container */}
        <HeroContainer>

          {/* Content Container */}
          <HeroContentContainer>
            <>
              {/* Title */}
              <h1 className="text-5xl font-bold text-center lg:text-6xl w-full">Not Found 404</h1>
              {/* Marketing  brangind text*/}
              <p className="text-2xl text-center text-gray-400 ">Page not found</p>
            </> 
          </HeroContentContainer>         
        </HeroContainer>
    </section>
  );
}
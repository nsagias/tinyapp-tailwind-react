export default function HeroContentContainerShortLink({ children }: any): JSX.Element {
  return (
    // <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w1/2 xl:mb-52">
    <div className="flex flex-col items-center justify-center space-y-10 mb-44 ">
      {children}
    </div>
  );
}
export default function HeroContentContainer({ children }: any): JSX.Element {
  return (
    <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w1/2 xl:mb-52">
      {children}
    </div>
  );
}
export default function HeroContentContainerShortenUrls({ children }: any): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 mb-44 ">
      {children}
    </div>
  );
}
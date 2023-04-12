export default function HeroContainerShortenUrls({ children }: any): JSX.Element {
  return (
    <div className="container flex flex-col-reverse mx-auto p-6">
      {children}
    </div>
  );
}
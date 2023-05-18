export default function HeroContainer({ children }: any): JSX.Element {
  return (
    <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
      {children}
    </div>
  );
}
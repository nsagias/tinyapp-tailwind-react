export default function NavBarLeft({ children }: any): JSX.Element {
  return (
    <div className="hidden space-x-8 font-bold lg:flex">
      {children}
    </div>
  );
}
export default function NavBarRight({ children }: any): JSX.Element {
  return (
    <div className="hidden items-center space-x-6 font-bold text-grayViolet lg:flex">{children}</div>
  );
}
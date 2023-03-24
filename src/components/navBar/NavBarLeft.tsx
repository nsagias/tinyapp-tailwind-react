export default function NavBarLeft({ children }: any): JSX.Element {
  return (
    <div className="flex items-center space-x-20">
      {children}
    </div>
  );
}
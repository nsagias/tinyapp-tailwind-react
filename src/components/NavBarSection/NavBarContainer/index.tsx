export default function NavBarContainer({ children }: any): JSX.Element {
  return (
    <div className="flex items-center justify-between">
      {children}
    </div>
  );
}
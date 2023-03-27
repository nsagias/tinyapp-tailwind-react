export default function MenuContainer({ children }: any): JSX.Element {
  return (
    <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
      {children}
    </div>
  );
}
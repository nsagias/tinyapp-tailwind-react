export default function NavMobileMenuContainer({ children, isOpen }: any): JSX.Element {
  return (
    <div id="mobile-menu" className={`absolute ${isOpen ? "" : "hidden"} p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}>
      {children}
    </div>
  );
}
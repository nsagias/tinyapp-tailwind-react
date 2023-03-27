import { MobileMenuItem } from "../../types/NavBar";

export default function NavMobileMenu({ linkURL, className, buttonName }: MobileMenuItem): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
      <a href={`${linkURL}`} className={`${className}`}>{buttonName}</a>
    </div>
  );
}
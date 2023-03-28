import { MobileMenuItem } from "../../types/NavBar";

export default function NavMobileMenu({ linkURL, styling, buttonName }: MobileMenuItem): JSX.Element {
  return (
    <div className="flex flex-col py-1 items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
      <a href={`${linkURL}`} className={`${styling}`}>{buttonName}</a>
    </div>
  );
}
import { Link } from "react-router-dom";
import { MobileMenuItemProps } from "../../../../../types/components/NavBar";


export default function NavMobileMenu({ linkURL, styling, buttonName, onClickAction }: MobileMenuItemProps ): JSX.Element {
  return (
    <div className="flex flex-col py-1 items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
      <Link  className={`${styling}`} to={`${linkURL}` || ""}  onClick={onClickAction}>{buttonName}</Link>
    </div>
  );
}
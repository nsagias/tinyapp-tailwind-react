import { Link } from "react-router-dom";
import { MobileMenuItem } from "../../types/components/NavBar";

export default function NavMobileMenu({ linkURL, styling, buttonName, onClickAction }: MobileMenuItem): JSX.Element {
  return (
    <div className="flex flex-col py-1 items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
      <Link  className={`${styling}`} to={`${linkURL}` || ""}  onClick={onClickAction || null}>{buttonName}</Link>
    </div>
  );
}
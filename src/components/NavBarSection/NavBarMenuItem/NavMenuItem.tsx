import { Link } from "react-router-dom";
import { NavBarMenuItemNameProps } from "../../../types/components/NavBar";


export default function NavMenuItem({ menuItemName, url } : NavBarMenuItemNameProps ): JSX.Element {
  return (
    <>
      <Link 
        className="text-grayViolet hover:text-darkerViolet" 
        to={url}>{menuItemName}
      </Link>
    </>
  );
}
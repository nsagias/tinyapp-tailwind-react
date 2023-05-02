import { Link } from "react-router-dom";
import { NavBarMenuItemName } from "../../types/components/NavBar";


export default function NavMenuItem({ menuItemName, url} : NavBarMenuItemName): JSX.Element {
  return (
    <>
      <Link 
        className="text-grayViolet hover:text-darkerViolet" 
        to={url}>{menuItemName}
      </Link>
    </>
  );
}
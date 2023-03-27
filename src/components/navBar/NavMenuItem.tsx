import { NavBarMenuItemName } from "../../types/NavBar";


export default function NavMenuItem({ menuItemName, url} : NavBarMenuItemName): JSX.Element {
  return (
    <a href={url} className="text-grayViolet hover:text-darkerViolet">{menuItemName}</a>
  );
}
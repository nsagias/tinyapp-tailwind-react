// A type that describe menu item input
type MenuItemName = { menuItemName: string, pageLink: string} 

export default function NavMenuItem({ menuItemName, pageLink } : MenuItemName ): JSX.Element {
  return (
    <a href={pageLink} className="text-grayViolet hover:text-darkerViolet">{menuItemName}</a>
  );
}
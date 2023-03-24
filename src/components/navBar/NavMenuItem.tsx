// A type that describe menu item input
type MenuItemName = { menuItemName: string, url: string} 

export default function NavMenuItem({ menuItemName, url} : MenuItemName ): JSX.Element {
  return (
    <a href={url} className="text-grayViolet hover:text-darkerViolet">{menuItemName}</a>
  );
}
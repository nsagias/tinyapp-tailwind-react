// A type that describe menu item input
type MenuItemName = { menuItemName: string} 

export default function NavMenuItem({ menuItemName } : MenuItemName ): JSX.Element {
  return (
    <a href="#" className="text-grayViolet hover:text-darkerViolet">{menuItemName}</a>
  );
}
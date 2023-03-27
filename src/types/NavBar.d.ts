// A type that describe menu item input
export type NavBarMenuItemName = { 
  menuItemName: string, 
  url: string,
}; 

export type NavBarMenuItemData = {
  id: number,
  menuItemName: string,
  url: string,
};

export type MobileMenuItem = {
  linkURL: string,
  className: string,
  buttonName: string,
};
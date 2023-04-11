// A type that describe menu item input
export type NavBarMenuItemName = { 
  menuItemName: string, 
  url: string,
}; 

export type NavBarMenuItemData = {
  id: number,
  menuItemName: string,
  url: string,
  isLoggedIn?: boolean
};

export type MobileMenuItem = {
  linkURL: string,
  styling: string,
  buttonName: string,
};
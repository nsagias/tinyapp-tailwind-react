import { Link } from "react-router-dom";

// A type that describe menu item input
export type NavBarMenuItemNameProps = { 
  menuItemName: string, 
  url: string,
  logginRequired?: number,
  role?: number,
}; 

export type NavBarMenuItemData = {
  id: number,
  menuItemName: string,
  url: string,
  isLoggedIn?: boolean,
  logginRequired: number,
  role?: number,
};

export type MobileMenuItem = {
  id?: number,
  linkURL: any,
  styling: string,
  buttonName: string,
  logginRequired?: number,
  role?: number,
  onClickAction: () => void,
};

export type MobileMenuItemProps = {
  id?: number,
  linkURL: any,
  styling: string,
  buttonName: string,
  logginRequired?: number,
  role?: number,
  onClickAction: () => void,
};

export type NavBarProps = {
  isAthenticated: boolean
};

export type NavButtonsAuthenticationProps = {
  isAthenticated: boolean,  onLogout: () => void,
};
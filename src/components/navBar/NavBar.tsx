import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import NavBarRight from "./NavBarRIght";
import NavButtonsAuth from "./NavButtonsAuthentication";
import NavMenuItem from "./NavMenuItem";
import NavBarLeft from "./NavBarLeft";
import NavBarContainer from "./NavBarContainer";
import NavLogo from "./NavLogo";

type NavBarMenuItem = {
  id: number,
  menuItemName: string,
  url: string;
};

const navBarMenuList: NavBarMenuItem[] = [
  { id: 1, menuItemName: "Features" , url: "#"},
  { id: 2, menuItemName: "Pricing", url: "#" },
  { id: 3, menuItemName: "Resources", url: "#" },
];


export default function NavBar() {
  const [menu, setMenu] = useState<NavBarMenuItem[]>();

  // TODO: update menu if logged in
  useEffect(() => {
    setMenu(navBarMenuList);
  },[]);

  return (
    <nav className="relative container mx-auto p-6">

      {/* Container for all items */}
      <NavBarContainer>
        {/* Left Side Container for Logo and Menu */}
        
        <NavBarLeft>
          {/* Logo */}
          <NavLogo />
   
          
          {/* Menu */}
          <NavMenu>
            {Array.isArray(menu) && menu.length > 0 && menu.map((menuItem) => (
              <NavMenuItem menuItemName={menuItem.menuItemName} url={menuItem.url} key={menuItem.id} />
              ))}
          </NavMenu>
        </NavBarLeft>

        {/* Right Side Menu */}
        <NavBarRight>
          <NavButtonsAuth />
        </NavBarRight>
      </NavBarContainer>
    </nav>
  );
} 
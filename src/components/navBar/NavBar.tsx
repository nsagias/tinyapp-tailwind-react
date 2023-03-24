import { useEffect, useState } from "react";
import NavBarLeft from "./NavBarLeft";
import NavMenuItem from "./NavMenuItem";

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
      <div className="flex items-center justify-between">

        {/* Container for Logo and Menu */}
        <div className="flex items-center space-x-20">

          {/* Logo */}
          <img src="images/logo.svg" alt="" className="" />

          {/*  Lett Side Menu */}
          <NavBarLeft>
            {Array.isArray(menu) && menu.length > 0 && menu.map((menuItem) => (
              <NavMenuItem menuItemName={menuItem.menuItemName} url={menuItem.url} key={menuItem.id} />
            ))}
          </NavBarLeft>
          
        </div>

      </div>
    </nav>
  );
} 
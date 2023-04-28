import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import NavBarRight from "./NavBarRIght";
import NavButtonsAuth from "./NavButtonsAuthentication";
import NavMenuItem from "./NavMenuItem";
import NavBarLeft from "./NavBarLeft";
import NavBarContainer from "./NavBarContainer";
import NavLogo from "./NavLogo";
import NavButtonHamburger from "./NavButtonHamburger";
import { MobileMenuItem, NavBarMenuItemData } from "../../types/components/NavBar";
import NavMobileMenuContainer from "./NavMobileMenuContainer";
import NavMobileMenu from "./NavMobileMenu";

const navBarMenuList: NavBarMenuItemData[] = [
  { id: 1, menuItemName: "Features" , url: "/features", logginRequired: 0, role: 4},
  { id: 2, menuItemName: "Pricing", url: "/pricing", logginRequired: 0, role: 4},
  { id: 3, menuItemName: "Documentation", url: "/docs", logginRequired: 0, role: 4},
  { id: 4, menuItemName: "Short Links", url: "/shorturls", logginRequired: 1, role: 4},
];

const mobileMenuItems: MobileMenuItem[] = [
  { linkURL: "/features", styling: "w-full text-center", buttonName: "Features", logginRequired: 0, role: 4},
  { linkURL: "/pricing ", styling: "w-full text-center", buttonName: "Pricing", logginRequired: 0, role: 4},
  { linkURL: "/docs ", styling: "w-full text-center", buttonName: "Documentation", logginRequired: 0, role: 4},
  { linkURL: "/shorturls ", styling: "w-full text-center", buttonName: "Short Links", logginRequired: 1, role: 4},
];

const mobileMenuItemsAuth: MobileMenuItem[] = [
  { linkURL: "# ", styling: "w-full pt-6 border-t border-gray-400 text-center", buttonName: "Login", logginRequired:0, role: 4},
  { linkURL: "# ", styling: "w-full text-center py-3 rounded-full bg-cyan", buttonName: "Sign Up",logginRequired: 0, role: 4},
  { linkURL: "# ", styling: "w-full text-center mt-6 py-3 rounded-full bg-cyan", buttonName: "Logout", logginRequired: 1, role: 4},
];


export default function NavBar({ isAthenticated }: {isAthenticated: boolean}): JSX.Element {
  const [menu, setMenu] = useState<NavBarMenuItemData[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isLoggedIn = isAthenticated ? 1 : 0;

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
            {menu && Array.isArray(menu) && menu.length > 0 && menu.filter(x => x.logginRequired <= isLoggedIn).map((menuItem) => (
              <NavMenuItem menuItemName={menuItem.menuItemName} url={menuItem.url} key={menuItem.id} />
            ))}
          </NavMenu>
        {/* Left Side Menu */}
        </NavBarLeft>
        {/* Right Side Menu */}
        <NavBarRight>
          <NavButtonsAuth authorized={isAthenticated}/>
        </NavBarRight>

        <NavButtonHamburger isOpen={isOpen}/>

        <NavMobileMenuContainer isOpen={isOpen}>
          {mobileMenuItems && Array.isArray(mobileMenuItems) && mobileMenuItems.length > 0 && mobileMenuItems.map((data, index) => (
            <NavMobileMenu linkURL={data.linkURL} styling={data.styling} buttonName={data.buttonName} key={index}/>
          ))}
          {mobileMenuItemsAuth && Array.isArray(mobileMenuItemsAuth) && mobileMenuItemsAuth.length > 0 && mobileMenuItemsAuth.map((data, index) => (
            <NavMobileMenu linkURL={data.linkURL} styling={data.styling} buttonName={data.buttonName} key={index}/>
          ))}
        </NavMobileMenuContainer>
      </NavBarContainer>
    </nav>
  );
} 
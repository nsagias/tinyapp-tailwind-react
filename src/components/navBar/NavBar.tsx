import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import NavBarRight from "./NavBarRIght";
import NavButtonsAuth from "./NavButtonsAuthentication";
import NavMenuItem from "./NavMenuItem";
import NavBarLeft from "./NavBarLeft";
import NavBarContainer from "./NavBarContainer";
import NavLogo from "./NavLogo";
import NavButtonHamburger from "./NavButtonHamburger";
import { MobileMenuItem, NavBarMenuItemData } from "../../types/NavBar";
import NavMobileMenuContainer from "./NavMobileMenuContainer";
import NavMobileMenu from "./NavMobileMenu";

const navBarMenuList: NavBarMenuItemData[] = [
  { id: 1, menuItemName: "Features" , url: "#"},
  { id: 2, menuItemName: "Pricing", url: "#" },
  { id: 3, menuItemName: "Resources", url: "#" },
];

const mobileMenuItems: MobileMenuItem[] = [
  { linkURL: "# ", className: "w-full text-center", buttonName: "Features"},
  { linkURL: "# ", className: "w-full text-center", buttonName: "Pricing"},
  { linkURL: "# ", className: "w-full text-center", buttonName: "Resources"},
];

const mobileMenuItemsAuth: MobileMenuItem[] = [
  { linkURL: "# ", className: "w-full pt-6 border-t border-gray-400 text-center", buttonName: "Login"},
  { linkURL: "# ", className: "w-full text-center py-3 rounded-full bg-cyan", buttonName: "Sign Up"},
  { linkURL: "# ", className: "w-full pt-6 border-t rounded-full bg-cyan text-center", buttonName: "Logout"},
];


export default function NavBar() {
  const [menu, setMenu] = useState<NavBarMenuItemData[]>();
   const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <NavButtonHamburger isOpen={isOpen}/>

        <NavMobileMenuContainer>
          {mobileMenuItems && Array.isArray(mobileMenuItems) && mobileMenuItems.length > 0 && mobileMenuItems.map((data, index) => (
            <NavMobileMenu linkURL={data.linkURL} className={data.className} buttonName={data.buttonName} key={index}/>
          ))}
          {mobileMenuItemsAuth && Array.isArray(mobileMenuItemsAuth) && mobileMenuItemsAuth.length > 0 && mobileMenuItemsAuth.map((data, index) => (
            <NavMobileMenu linkURL={data.linkURL} className={data.className} buttonName={data.buttonName} key={index}/>
          ))}
        </NavMobileMenuContainer>
      </NavBarContainer>
    </nav>
  );
} 
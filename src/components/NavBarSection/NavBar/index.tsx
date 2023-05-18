import { useEffect, useState } from "react";
import NavMenu from "./Components/NavBarMenu";
import NavBarRight from "./Components/NavBarRight";
import NavButtonsAuth from "./Components/NavButtonsAuthentication";
import NavMenuItem from "./Components/NavBarMenuItem";
import NavBarLeft from "./Components/NavBarLeft";
import NavBarContainer from "./Components/NavBarContainer";
import NavLogo from "./Components/NavBarLogo";
import NavButtonHamburger from "./Components/NavButtonHamburger";
import { MobileMenuItem, NavBarMenuItemData, NavBarProps } from "../../../types/components/NavBar/NavBar";
import NavMobileMenuContainer from "../NavMobile/Components/NavMobileMenuContainer";
import NavMobileMenu from "../NavMobile/Components/NavMobileMenu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthFalse } from "../../../store/slices/AuthenticationSlice";
import useWindowDimensions from "../../../hooks/use-window-dimensions";


export default function NavBar({ isAthenticated }: NavBarProps ): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  
  const [menu, setMenu] = useState<NavBarMenuItemData[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isLoggedIn = isAthenticated ? 1 : 0;

  useEffect(() => {
    if (width > 1024) setIsOpen(false);
  }, [width]); 

  useEffect(() => {
    setMenu(navBarMenuList);
  },[]);

  const logoutHandler = async () => {
    dispatch(setAuthFalse());
    setIsOpen(false);
    navigate("/");
  };

  const navCloseMobileMenuHandler = async(route: string) => {
    setIsOpen(false);
    navigate(route);
  }

  const navBarMenuList: NavBarMenuItemData[] = [
    { id: 1, menuItemName: "Features" , url: "/features", logginRequired: 0, role: 4},
    { id: 2, menuItemName: "Pricing", url: "/pricing", logginRequired: 0, role: 4},
    { id: 3, menuItemName: "Documentation", url: "/docs", logginRequired: 0, role: 4},
    { id: 4, menuItemName: "Short Links", url: "/shorturls", logginRequired: 1, role: 4},
  ];

  const mobileMenuItems: MobileMenuItem[] = [
    { id: 1, linkURL: "/features", styling: "w-full text-center", buttonName: "Features", onClickAction: () => navCloseMobileMenuHandler("/features"), logginRequired: 0, role: 4},
    { id: 2, linkURL: "/pricing", styling: "w-full text-center", buttonName: "Pricing", onClickAction: () => navCloseMobileMenuHandler("/pricing"),logginRequired: 0, role: 4},
    { id: 3,linkURL: "/docs", styling: "w-full text-center", buttonName: "Documentation", onClickAction: () => navCloseMobileMenuHandler("/docs"), logginRequired: 0, role: 4},
    { id: 4,linkURL: "/shorturls", styling: "w-full text-center", buttonName: "Short Links", onClickAction: () => navCloseMobileMenuHandler("/shorturls"),logginRequired: 1, role: 4},
  ];

  const mobileMenuItemsAuth: MobileMenuItem[] =  [
    { id: 1,linkURL: "/login" , styling: "w-full pt-6 border-t border-gray-400 text-center", buttonName: "Login", onClickAction: () => navCloseMobileMenuHandler("/login"), logginRequired:0, role: 4},
    { id: 2,linkURL: "/register", styling: "w-full text-center py-3 rounded-full bg-cyan", buttonName: "Sign Up", onClickAction: () => navCloseMobileMenuHandler("/register"),  logginRequired: 0, role: 4},
    { id: 3,linkURL: "/", styling: "w-full text-center mt-6 py-3 rounded-full bg-cyan", buttonName: "Logout", onClickAction: () => logoutHandler(), logginRequired: 1, role: 4},
  ];


  return (
    <nav className="relative container z-50 mx-auto p-6">
      {/* Container for all items */}
      <NavBarContainer>

        {/* Left Side Container for Logo and Menu */}
        <NavBarLeft>
          {/* Logo */}
          <NavLogo />

          {/* Main Menu */}
          <NavMenu>
            {menu && Array.isArray(menu) && menu.length > 0 && menu.filter(x => x.logginRequired <= isLoggedIn).map((menuItem) => (
              <NavMenuItem menuItemName={menuItem.menuItemName} url={menuItem.url} key={menuItem.id} />
            ))}
          </NavMenu>

        {/* Left Side Menu */}
        </NavBarLeft>

        {/* Right Side Menu */}
        <NavBarRight>
          <NavButtonsAuth
            isAthenticated={isAthenticated}
            onLogout={logoutHandler}
          />
        </NavBarRight>
        
        {/* Hamburger Button */}
        <NavButtonHamburger
          onOpen={isOpen}
          onSetOpen={(isOpen: boolean) => setIsOpen(isOpen)}
        />

        {/* Mobile Menu */}
        <NavMobileMenuContainer isOpen={isOpen}>
          {mobileMenuItems && Array.isArray(mobileMenuItems) && mobileMenuItems.length > 0 && mobileMenuItems.filter(x => x.logginRequired! <= isLoggedIn).map((data) => (
            <NavMobileMenu linkURL={data.linkURL} styling={data.styling} buttonName={data.buttonName} onClickAction={data.onClickAction} key={data.id}/>
          ))}
          {mobileMenuItemsAuth && Array.isArray(mobileMenuItemsAuth) && mobileMenuItemsAuth.length > 0 && mobileMenuItemsAuth.filter(x => x.logginRequired! === isLoggedIn).map((data) => (
            <NavMobileMenu linkURL={data.linkURL} styling={data.styling} buttonName={data.buttonName} onClickAction={data.onClickAction} key={data.id}/>
          ))}
        </NavMobileMenuContainer>

      </NavBarContainer>
    </nav>
  );
} 
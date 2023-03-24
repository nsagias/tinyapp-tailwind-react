import NavBarLeft from "./NavBarLeft";
import NavMenuItem from "./NavMenuItem";

export default function NavBar() {
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
            <NavMenuItem menuItemName="Features" pageLink="#" />
            <NavMenuItem menuItemName="Features" pageLink="#" />
          </NavBarLeft>
          
        </div>

      </div>
    </nav>
  );
} 
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavButtonHamburger({isOpen}: {isOpen: boolean}): JSX.Element {
  return (
    <>
      {isOpen ? 
        (    
          <button id="menu-button" type="button" className="block text-2xl lg:hidden focus:outline-none hover:text-grayViolet">
            <FaTimes />
          </button>
        ) : 
        (    
          <button id="menu-button" type="button" className="block text-2xl lg:hidden focus:outline-none hover:text-grayViolet">
            <FaBars />
          </button>
      )}
    </>
  );
}
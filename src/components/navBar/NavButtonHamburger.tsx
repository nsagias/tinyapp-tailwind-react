import { FaBars, FaTimes } from "react-icons/fa";

export default function NavButtonHamburger({onOpen, onSetOpen}: {onOpen: boolean, onSetOpen: (isOpen: boolean) => any }): JSX.Element {
  return (
    <>
      {onOpen ? 
        (    
          <button id="menu-button" onClick={() => onSetOpen(false)} type="button" className="block text-2xl lg:hidden focus:outline-none hover:text-grayViolet">
            <FaTimes />
          </button>
        ) : 
        (    
          <button id="menu-button" onClick={() => onSetOpen(true)} type="button" className="block text-2xl lg:hidden focus:outline-none hover:text-grayViolet">
            <FaBars />
          </button>
      )}
    </>
  );
}
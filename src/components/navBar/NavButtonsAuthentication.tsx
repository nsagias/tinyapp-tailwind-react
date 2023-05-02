import { Link } from "react-router-dom";
import { NavButtonsAuthenticationProps } from "../../types/components/NavBar";


export default function NavButtonsAuthentication({ isAthenticated, onLogout }: NavButtonsAuthenticationProps ): JSX.Element {

  return (
    <>
      {!isAthenticated ? 
        (
          <>
            <Link to={"/login"} className="hover:text-darkerViolet">Login</Link>
            <Link to={"/register"} className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">Sign Up</Link>
            </>      
        ) : (
          <>
            <a 
              href="#" 
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70" 
              onClick={onLogout}>Logout
            </a>
          </>
        )
      }
    </>
  );
}
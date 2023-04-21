import { Link } from "react-router-dom";
import localStorageService from "../../services/localStorageService";
import { useDispatch } from "react-redux";
import { setAuthFalse } from "../../store/slices/authenticationSlice";


const logoutStorageList = [
  "active","email", "emailVerified", "firstName", "lastName", "id", "token"];


export default function NavButtonsAuthentication({ authorized }: { authorized : boolean}) {
  const dispatch = useDispatch();

  const logoutHandler = () => {  
    dispatch(setAuthFalse);
    localStorageService.removeItemsFromLocalStorage(logoutStorageList);
  };

  return (
    <>
      {!authorized ? 
        (
          <>
            <Link to={"/login"} className="hover:text-darkerViolet">Login</Link>
            <Link to={"/register"} className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70" >Sign Up</Link>
            </>      
        ) : (
          <>
            <a 
              href="#" 
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70" 
              onClick={logoutHandler}>Logout
            </a>
          </>
        )
      }
    </>
  );
}
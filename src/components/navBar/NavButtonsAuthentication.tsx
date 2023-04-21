import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthFalse } from "../../store/slices/authenticationSlice";

export default function NavButtonsAuthentication({ authorized }: { authorized : boolean}): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {  
    dispatch(setAuthFalse());
    navigate("/");
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
import { loginUser } from "../../api/userApi";
import useInput from "../../hooks/use-input";
import { LoginUserSuccessResponse } from "../../types/api/userApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index"
import { setAuthTrue } from "../../store/slices/authenticationSlice";
import localStorageService from "../../services/localStorageService";
import { isAuthenticated } from "../../store/constants/authentication";

export default function LoginForm({}): JSX.Element {
  const selectIsAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
  const dispatch = useDispatch();
    
  const {
    inputValue: enteredEmail,
    hasError: emailInputIsValid,
    inputValueIsValid: enteredEmailIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    inputValueReset: emailResetInput,
  } = useInput( (
    value: string) => value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && value.trim().length > 5
  );

  const { 
    inputValue: enteredPassword,
    hasError: passwordInputIsValid,
    inputValueIsValid: enteredPasswordIsValid,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    inputValueReset:  passswordResetInput
  } = useInput( (value: string) => value.trim().length >= 3 );
  
  // Login Form Handler
  const handleSubmitLogin = async (e: React.FormEvent): Promise<void>  => {
    e.preventDefault();

    if (!enteredEmailIsValid) return;
    if (!enteredPasswordIsValid) return;

    try {
      // try to login user
      const response = await loginUser({ email: enteredEmail, password: enteredPassword}) as LoginUserSuccessResponse;
     
      // Set token
      if  (response && response.token && response.token.authToken && response.userInfo) {
        localStorageService.setLocalStorageItem(isAuthenticated, "true")
        localStorageService.setLocalStorageItem("token", response.token.authToken);
        dispatch(setAuthTrue());
        localStorageService.populateLocalStorageItems(response.userInfo);
      }
      
      // Reset form values
      emailResetInput();
      passswordResetInput();

      // TODO Add navigation to short link page

    } catch (error: any) {
      console.error(error);
    }
  };


  return (
    <div className="relative flex flex-col m-6 -mt-80 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 ">
        
        {/* Login Form container */}
        <div className="p-6 md:p-20">

          {/* Top of card */}
          <h2 className="mb-5 text-4xl font-bold">Login</h2>
          <p className="max-w-sm mb-8 font-sans font-bold text-grayViolet">Login to your account.</p>

          {/* Login Form */}
          <form onSubmit={handleSubmitLogin} >

            {/* Login Form Control */}
            <div className="">
              {/* Email Input */}
              <input
                className={`w-full p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
                id="login-email" 
                name="email"
                type="text"
                value={enteredEmail}
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                placeholder="Enter your email"
              />  

              {/* Password Input */}
              <input
                className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
                id="login-password" 
                name="password"
                type="password"
                value={enteredPassword}
                onChange={passwordInputChangeHandler}
                onBlur={passwordInputBlurHandler}
                placeholder="Enter your password"
              /> 
              {emailInputIsValid  && (<p className="text-red italic">Please enterd a valid email.</p>)}
              {passwordInputIsValid && (<p className="text-red italic">Password must be min 8 characters.</p>)}
            </div>

            {/* Form button */}
            <button 
              className={`w-full mt-5 md:width-auto flex justify-center items-center px-6 space-x-4 py-3 font-bold text-white bg-cyan rounded-full  ${!enteredEmailIsValid || !enteredPasswordIsValid ? "opacity-70" : "hover:opacity-70"}`}
              disabled={!enteredEmailIsValid || !enteredPasswordIsValid}  
            >
              <span>Login</span>
            </button>
          </form>
        </div>
    </div>
  );
}
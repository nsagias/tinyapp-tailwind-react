import useInput from "../../../../../hooks/use-input";
import { registerUser } from "../../../../../api/UserApi";
import { RegisterUserSuccessResponse } from "../../../../../types/api/userApi";
import { useNavigate } from "react-router-dom";
import localStorageService from "../../../../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setAuthTrue } from "../../../../../store/slices/AuthenticationSlice";
import { LocalStorageItem } from "../../../../../types/services/LocalStorageItems";


export default function RegistrationForm({}): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // First Name Input
  const {
    inputValue: enteredFirstName,
    inputValueIsValid: enteredFirstNameIsValid,
    hasError: firstNameInputIsValid,
    inputChangeHandler: firstNamInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    inputValueReset: firstNameValueReset
  } = useInput( (value: string) => value.trim().length >= 3 );

  // Last Name Input
  const {
    inputValue: enteredLastName,
    inputValueIsValid: enteredLastNameIsValid ,
    hasError: lastNameInputIsValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNamedInputBlurHandler,
    inputValueReset: lastNameValueReset
  } = useInput( (value: string) => value.trim().length >= 3 );

  // Email Input
  const {
    inputValue: enteredEmail,
    inputValueIsValid: enteredEmailIsValid,
    hasError: emailInputIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    inputValueReset: emaiValueReset
  } = useInput((value: string) => 
    value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && value.trim().length > 5
  );

  // Password Input
  const {
    inputValue: enteredPassword,
    inputValueIsValid: enteredPasswordIsValid,
    hasError: passwordInputIsValid,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    inputValueReset: passwordValueReset
  } = useInput((value: string) => value.trim().length >= 5);

  // Form is disabled
  const isFormDisabled = !firstNameInputIsValid || !lastNameInputIsValid || !emailInputIsValid || !passwordInputIsValid;
  const enteredFormInputIsValid = !enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid || !enteredPasswordIsValid;

  // Registration Form Handler
  const handleRegistration = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault(); 
    if (enteredFormInputIsValid) return;

    try {
      // try register user
      const response = await registerUser({ firstName: enteredFirstName, lastName: enteredLastName, email: enteredEmail, password: enteredPassword}) as RegisterUserSuccessResponse;

      // Set token
      if (response && response.token && response.token.authToken && response.userInfo) {
        localStorageService.setLocalStorageItem(LocalStorageItem.IsAuthenticated, "true");
        localStorageService.setLocalStorageItem(LocalStorageItem.Token, response.token.authToken);
        dispatch(setAuthTrue());
        localStorageService.populateLocalStorageItems(response.userInfo);
        navigate("/shorturls");
      }

      // Reset form
      firstNameValueReset();
      lastNameValueReset();
      emaiValueReset();
      passwordValueReset();

    } catch (error: any) {
      console.error(error || error.response);

    }
  };

  return (
    <div className="relative flex flex-col  -mt-44 sm:m-0 m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">

      {/* Regisration Form Container */}
      <div className="p-6 md:p-20">

        {/* Top of card */}
        <h2 className="mb-5 text-4xl font-bold">Register</h2>
        <p className="max-w-sm mb-8 font-sans font-bold text-grayViolet ">Create your account.</p>

        {/* Registration Form */}
        <form onSubmit={handleRegistration} >

          {/* Login Form Control */}
          <div className="">

            {/* FirstName Input */}
            <input
              className={`w-full p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none md:flex`}
              id="registration-first-name" 
              name="firstName"
              type="text"
              value={enteredFirstName}
              onChange={firstNamInputChangeHandler}
              onBlur={firstNameInputBlurHandler}
              placeholder="Enter your first name"
              autoFocus
            />  

            {/* LastName Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none md:flex`}
              id="registration-last-name"
              name="lastName"
              type="text"
              value={enteredLastName}
              onChange={lastNameInputChangeHandler}
              onBlur={lastNamedInputBlurHandler}
              placeholder="Enter your last name"
            />  

            {/* Email Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
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
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none `}
              id="login-password" 
              name="password"
              type="password"
              value={enteredPassword}
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
              placeholder="Enter your password"
            /> 

          {firstNameInputIsValid && (<p className="text-red italic">First name must be min 3 characters.</p>)}
          {lastNameInputIsValid  && (<p className="text-red italic">Last name must be min 3 characters.</p>)}
          {emailInputIsValid && (<p className="text-red italic">Please enterd a valid email.</p>)}
          {passwordInputIsValid  && (<p className="text-red italic">Password must be min 8 characters.</p>)}
          </div> 
          {/* Form button */}
          <button 
            className={`w-full mt-5 md:width-auto flex justify-center items-center px-6 space-x-4 py-3 font-bold text-white bg-cyan rounded-full  ${!isFormDisabled ? "opacity-70" : "hover:opacity-70"}`}
            disabled={!isFormDisabled}  
          >
            <span>Sign Up</span>
          </button>
        </form>
      </div>
    </div>
  );
}
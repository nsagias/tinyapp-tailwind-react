import { useState } from "react";
import useInput from "../../hooks/use-input";

export default function RegistrationForm({}): JSX.Element {
  const {
    inputValue: enteredFirstName,
    hasError: firstNameInputIsValid,
    inputValueIsValid: enteredFirstNameIsValid,
    inputChangeHandler: firstNamInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    inputValueReset: firstNameValueReset
  } = useInput( (value: string) => value.trim().length >= 3 );

  // Registration Form Input
  const [enteredLastName, setEnteredLastName] =  useState<string>("");
  const [enteredEmail, setEnteredEmail] =  useState<string>("");
  const [enteredPassword, setEnteredPassword] =  useState<string>("");

  // Registration Form Validation
  const [enteredLastNameIsTouched, setEnteredLastNameIsTouched] = useState<boolean>(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState<boolean>(false);
  const [enteredPasswordTouched, setEnteredPasswordTouch] = useState<boolean>(false);

  // Form Validation
  // const enteredFirstNameIsValid = enteredFirstName.trim().length >= 3;
  const enteredLastNameIsValid = enteredLastName.trim().length >= 3;
  const enteredEmailIsValid = enteredEmail.trim().length >= 7 && enteredEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const enteredPasswordIsValid = enteredPassword.trim().length >= 8;
  
  // Derived Values
  const lastNameInputIsValid = !enteredLastNameIsValid && enteredLastNameIsTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsValid = !enteredPasswordIsValid && enteredPasswordTouched;

  // Form is disabled
  const isFormDisabled = !firstNameInputIsValid || !lastNameInputIsValid || !emailInputIsValid || !passwordInputIsValid;
  const enteredFormInputIsValid = !enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid || !enteredPasswordIsValid;


 
  // Registration Form Handler
  const handleRegistration = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
 
    setEnteredLastNameIsTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPasswordTouch(true);

    if (enteredFormInputIsValid) return;

    // Reset form
    // setEnteredFirstName("");
    setEnteredLastName("")
    setEnteredEmail("");
    setEnteredPassword("");

    firstNameValueReset()
    setEnteredLastNameIsTouched(false);
    setEnteredEmailTouched(false);
    setEnteredPasswordTouch(false);
  };

  // Change Handlers
  // const firstNamInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   // setEnteredFirstName(e.target.value.trim());
  // };
  const lastNameInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredLastName(e.target.value.trim());
  };
  const emailInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredEmail(e.target.value.trim());
  };
  const passwordInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredPassword(e.target.value.trim());
  };


  // Blur/Focus handlers
  // const firstNameInputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
  //   setEnteredFirstNameIsTouched(true);
  // };
  const lastNamedInputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
    setEnteredLastNameIsTouched(true);
  };
  const emailInputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
    setEnteredEmailTouched(true);
  };
  const passwordInputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
    setEnteredPasswordTouch(true);
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
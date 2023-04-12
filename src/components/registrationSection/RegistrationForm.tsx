import { useState } from "react";

export default function RegistrationForm({}): JSX.Element {

  // Registration Form Input
  const [enteredFirstName, setEnteredFirstName] =  useState<string>("");
  const [enteredLastName, setEnteredLastName] =  useState<string>("");
  const [enteredEmail, setEnteredEmail] =  useState<string>("");
  const [enteredPassword, setEnteredPassword] =  useState<string>("");

  // Registration Form Validation
  const [enteredFirstNameIsTouched, setEnteredFirstNameIsTouched] = useState<boolean>(false);
  const [enteredLastNameIsTouched, setEnteredLastNameIsTouched] = useState<boolean>(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState<boolean>(false);
  const [enteredPasswordTouched, setEnteredPasswordTouch] = useState<boolean>(false);

  // Form Validation
  const enteredFirstNameIsValid = enteredFirstName.trim().length > 3;
  const enteredLastNameIsValid = enteredLastName.trim()
  const enteredEmailIsValid = enteredEmail.trim().length > 8;
  const enteredPasswordIsValid = enteredPassword.trim().length > 8;
  
  // Derived Values
  const firstNameInputIsValid = !enteredFirstNameIsValid && enteredFirstNameIsTouched;
  const lastNameInputIsValid = !enteredLastNameIsValid && enteredLastNameIsTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsValid = !enteredPasswordIsValid && enteredPasswordTouched;

  // Form is disabled
  const isFormDisabled = !firstNameInputIsValid || !lastNameInputIsValid || !emailInputIsValid || !passwordInputIsValid;

  // Registration Form Handler
  const handleRegistration = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setEnteredEmailTouched(true);
    setEnteredPasswordTouch(true);

    if (!enteredEmailIsValid) return;
    if (!enteredPasswordIsValid) return;

    // Reset form
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredEmailTouched(false);
    setEnteredPasswordTouch(false);
   
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
              onChange={e => setEnteredFirstName(e.target.value.trim())}
              placeholder="Enter your first name"
            />  

            {/* LastName Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none md:flex`}
              id="registration-last-name"
              name="lastName"
              type="text"
              value={enteredLastName}
              onChange={e => setEnteredLastName(e.target.value.trim())}
              placeholder="Enter your last name"
            />  

            {/* Email Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
              id="login-email" 
              name="email"
              type="email"
              value={enteredEmail}
              onChange={e => setEnteredEmail(e.target.value.trim())}
              placeholder="Enter your email"
            /> 

            {/* Password Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none `}
              id="login-password" 
              name="password"
              type="password"
              value={enteredPassword}
              onChange={e => setEnteredPassword(e.target.value.trim())}
              placeholder="Enter your password"
            /> 

          {!firstNameInputIsValid && (<p>First name must be min 3 characters.</p>)}
          {!lastNameInputIsValid  && (<p>Last name must be min 3 characters.</p>)}
          {!emailInputIsValid && (<p>Please enterd a valid email.</p>)}
          {!passwordInputIsValid  && (<p>Password must be min 8 characters.</p>)}
          </div> 
          {/* Form button */}
          <button 
            className={`w-full mt-5 md:width-auto flex justify-center items-center px-6 space-x-4 py-3 font-bold text-white bg-cyan rounded-full  ${isFormDisabled ? "opacity-70" : "hover:opacity-70"}`}
            disabled={isFormDisabled}  
          >
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
}
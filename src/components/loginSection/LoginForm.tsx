import { useEffect, useState } from "react";

export default function LoginForm({}): JSX.Element {

  // Login Form Input
  const [enteredEmail, setEnteredEmail] =  useState<string>("");
  const [enteredPassword, setEnteredPassword] =  useState<string>("");

  // Login Form Validatioin
  const [enteredEmailTouched, setEnteredEmailTouched] = useState<boolean>(false);
  const [enteredPasswordTouched, setEnteredPasswordTouch] = useState<boolean>(false);
 
  const enteredEmailIsValid = enteredEmail.trim().length > 8;
  const enteredPasswordIsValid = enteredPassword.trim().length > 8;

  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsValid = !enteredPasswordIsValid && enteredPasswordTouched;
  
  const handleSubmitLogin = async (e: React.FormEvent): Promise<void>  => {
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

  const emailInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredEmail(e.target.value.trim());
  };

  const passwordInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredPassword(e.target.value.trim());
  };

  const emailInputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
    setEnteredEmailTouched(true);
  };

  const passwordInputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
    setEnteredPasswordTouch(true);
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
              {emailInputIsValid  && (<p className="text-red italic">Please enterd a valid email</p>)}
              {passwordInputIsValid && (<p className="text-red italic">Password must be min 8 characters</p>)}
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
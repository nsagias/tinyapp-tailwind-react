import { useEffect, useState } from "react";

export default function LoginForm({}): JSX.Element {

  // Login Form Input
  const [enteredEmail, setEnteredEmail] =  useState<string>("");
  const [enteredPassword, setEnteredPassword] =  useState<string>("");

  // Login Form Validatioin
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [formDisabled, setFormDisabled] = useState<boolean>(true);

console.log(formDisabled)
  useEffect(() => {
    // add email and password validation
    setEmailIsValid(enteredEmail.length > 5);
    setPasswordIsValid(enteredPassword.length > 7);

    setFormDisabled(emailIsValid || passwordIsValid);

  }, [enteredPassword, enteredEmail]);
  
  const handleSubmitLogin = async (e: React.FormEvent): Promise<void>  => {
    e.preventDefault();
    setEnteredEmail("");
    setEnteredPassword("");
  };


  const emailInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredEmail(e.target.value.trim());
 
  };

  const passwordInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredPassword(e.target.value.trim());
  };

  const emailInputFocusHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {

  };
  const passwordInputFocusHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {

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
                placeholder="Enter your password"
              /> 
              {!emailIsValid && (<p className="text-red italic">Please enterd a valid email</p>)}
              {!passwordIsValid && (<p className="text-red italic">Password must have mininum length of 8 characters</p>)}
            </div>
            
            {/* Form button */}
            <button 
              className={`w-full mt-5 md:width-auto flex justify-center items-center px-6 space-x-4 py-3 font-bold text-white bg-cyan rounded-full  ${formDisabled ? "hover:opacity-70" : "opacity-70"}`}
              disabled={formDisabled}  
            >
              <span>Login</span>
            </button>
          </form>
        </div>
    </div>
  );
}
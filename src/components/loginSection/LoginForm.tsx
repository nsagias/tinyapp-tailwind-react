import { useEffect, useState } from "react";

export default function LoginForm({}): JSX.Element {

  // Login Form Input
  const [enteredEmail, setEnteredEmail] =  useState<string>("");
  const [enteredPassword, setEnteredPassword] =  useState<string>("");

  // Login Form Validatioin
  const [emailIsValid, setEmailIsValid] = useState<boolean>();
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
  const [formDisabled, setFormDisabled] = useState<boolean>(true);


  useEffect(() => {
    setFormDisabled(enteredPassword.length < 7 || enteredEmail.length < 5)
  }, [enteredPassword, enteredEmail]);
  
  const handleLogin = async (e: React.FormEvent): Promise<void>  => {
    e.preventDefault();
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div className="relative flex flex-col m-6 -mt-80 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 ">
        
        {/* Login Form container */}
        <div className="p-6 md:p-20">
          
          {/* Top of card */}
          <h2 className="mb-5 text-4xl font-bold">Login</h2>
          <p className="max-w-sm mb-8 font-sans font-bold text-grayViolet">Login to your account.</p>

          {/* Login Form */}
          <form onSubmit={handleLogin} >

            {/* Email Input */}
            <input
              className={`w-full p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
              id="login-email" 
              name="email"
              type="text"
              value={enteredEmail}
              onChange={e => setEnteredEmail(e.target.value.trim())}
              placeholder="Enter your email"
            />  

            {/* Password Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
              id="login-password" 
              name="password"
              type="password"
              value={enteredPassword}
              onChange={e => setEnteredPassword(e.target.value.trim())}
              placeholder="Enter your password"
            /> 

            {/* Form button */}
            <button 
              className={`w-full mt-5 md:width-auto flex justify-center items-center px-6 space-x-4 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70`}
              disabled={formDisabled}  
            >
              <span>Login</span>
            </button>
          </form>
        </div>
    </div>
  );
}
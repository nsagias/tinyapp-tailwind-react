import { useEffect, useState } from "react";

export default function RegistrationForm({}): JSX.Element {

  const [firstName, setFirstName] =  useState<string>("");
  const [lastName, setLastName] =  useState<string>("");
  const [email, setEmail] =  useState<string>("");
  const [password, setPassword] =  useState<string>("");
  const [formDisabled, setFormDisabled] = useState<boolean>(true);

  useEffect(() => {
    // set form state as disables if min length are not met
    setFormDisabled(password.length < 7 || email.length < 5 || firstName.length < 3 || lastName.length < 3);
  }, [firstName, lastName, password, email]);
  

  const handleRegistration = (e: any) => {
    e.preventDefault();
    console.log(`FORM VALUES: ${firstName} ${lastName} ${email} ${password}`)
  };

  return (
    <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
      {/* Left Side Of Login Card */}
        <div className="p-6 md:p-20">
          {/* Top of card */}
          <h2 className="mb-5 text-4xl font-bold">Register</h2>
          <p className="max-w-sm mb-8 font-sans font-bold text-grayViolet ">Create your account.</p>

          <form onSubmit={handleRegistration} >

            {/* FirstName Input */}
            <input
              className={`w-full p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none md:flex`}
              id="registration-first-name" 
              name="firstName"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value.trim())}
              placeholder="Enter your first name"
            />  

            {/* LastName Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none md:flex`}
              id="registration-last-name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value.trim())}
              placeholder="Enter your last name"
            />  

            {/* Email Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none`}
              id="login-email" 
              name="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value.trim())}
              placeholder="Enter your email"
            /> 

            {/* Password Input */}
            <input
              className={`w-full p-3 mt-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none `}
              id="login-password" 
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value.trim())}
              placeholder="Enter your password"
            /> 

            {/* Form button */}
            <button 
              className={`w-full mt-5 md:width-auto flex justify-center items-center px-6 space-x-4 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70 `}
              disabled={formDisabled}  
            >
              <span>Login</span>
            </button>

          </form>
        </div>

    </div>
  );
}
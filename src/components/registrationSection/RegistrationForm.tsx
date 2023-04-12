import { useEffect, useState } from "react";

export default function RegistrationForm({}): JSX.Element {

  // Form Fields
  const [enteredFirstName, setEnteredFirstName] =  useState<string>("");
  const [enteredLastName, setEnteredLastName] =  useState<string>("");
  const [enteredEmail, setEnteredEmail] =  useState<string>("");
  const [password, setEnteredPassword] =  useState<string>("");

  // Form Validation
  const [firstNameIsValid, setFirstNameIsValid] = useState<boolean>(false);
  const [lastNameIsValid, setLastNameIsValid] = useState<boolean>(false);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [formDisabled, setFormDisabled] = useState<boolean>(true);

  useEffect(() => {
    // set form state as disables if min length are not met
    setFormDisabled(password.length < 7 || enteredEmail.length < 5 || enteredFirstName.length < 3 || enteredLastName.length < 3);
  }, [enteredFirstName, enteredLastName, password, enteredEmail]);
  

  const handleRegistration = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();


    if (true) {
      setEnteredFirstName("");
      setEnteredLastName("");
      setEnteredEmail("");
      setEnteredPassword("");
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
            value={password}
            onChange={e => setEnteredPassword(e.target.value.trim())}
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
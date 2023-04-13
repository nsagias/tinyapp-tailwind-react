import { useState } from "react";


export default function useInput (validateValues: any) {

  
  // Input entered value state
  const [enteredValue, setEnteredValue] =  useState<string>("");
  
  // Input entered value touch state
  const [enteredValueTouched, setEnteredValueTouched] = useState<boolean>(false);

  // Input validation
  const enteredValueIsValid = enteredValue.trim().length > 7 && enteredValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  // Input has error
  const hasError = !enteredValue && enteredValueTouched;

  // Change Handler
  const valueInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(e.target.value.trim());
  };
  // Blur/Focus handler

  const emailInputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
    setEnteredValueTouched(true);
  };


  return {
    enteredValue,
    enteredValueTouched,
    enteredValueIsValid,
    hasError,
    valueInputChangeHandler,
    emailInputBlurHandler
  };

}
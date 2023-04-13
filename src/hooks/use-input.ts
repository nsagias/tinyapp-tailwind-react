import { useState } from "react";

export interface IUseInputHook {
  value: string;
  enteredValueTouched: boolean;
  enteredValueIsValid: boolean;
  hasError: boolean;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
};


export default function useInput (validateInputValue?: any): IUseInputHook {

  // Input entered value state
  const [enteredValue, setEnteredValue] =  useState<string>("");
  
  // Input entered value touch state
  const [enteredValueTouched, setEnteredValueTouched] = useState<boolean>(false);

  // Input validation
  const enteredValueIsValid: boolean= validateInputValue(enteredValue);

  // Input has error
  const hasError = !enteredValue && enteredValueTouched;

  // Change Handler
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(e.target.value.trim());
  };
  // Blur/Focus handler

  const inputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
    setEnteredValueTouched(true);
  };

  return {
    value: enteredValue,
    enteredValueTouched,
    enteredValueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler
  };

}
import { useState } from "react";

export interface IUseInputHook {
  inputValue: string;
  hasError: boolean;
  inputValueIsValid: boolean;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: () => void;
  inputValueReset: () => void;
};

export default function useInput (validateInputValue?: any):  IUseInputHook {
  // Input entered value state
  const [inputValue, setEnteredValue] =  useState<string>("");
  
  // Input entered value touch state
  const [inputValueTouched, setEnteredValueTouched] = useState<boolean>(false);

  // Input validation
  const inputValueIsValid: boolean = validateInputValue(inputValue);

  // Input has error
  const hasError = !inputValueIsValid && inputValueTouched;
 
  // Change Handler
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(e.target.value.trim());
  };

  // Blur/Focus handle
  const inputBlurHandler = (): void => {
    setEnteredValueTouched(true);
  };

  // Reset values
  const inputValueReset = (): void => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  }

  return {
    inputValue,
    inputValueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    inputValueReset
  };

}
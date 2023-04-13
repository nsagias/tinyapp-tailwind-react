import { useState } from "react";

export interface IUseInputHook {
  value: string;
  inputValueIsValid: boolean;
  hasError: boolean;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  inputValueReset: () => void;
};


export default function useInput (validateInputValue?: any): IUseInputHook {

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
  const inputBlurHandler = (e: React.FocusEvent<HTMLInputElement> ): void => {
    setEnteredValueTouched(true);
  };

  // Reset values
  const inputValueReset = (): void => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  }

  return {
    value: inputValue,
    inputValueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    inputValueReset
  };

}
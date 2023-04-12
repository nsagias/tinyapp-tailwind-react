
export interface InputProps {
  classname?: string;
  isValid?: boolean;
  inValid?: string;
  label?: string;
  type?: string;
  id?: string;
  value?: string;
  changeHandler?: () => void;
  validationHandler?: () => void;
};

export default function Input({classname, isValid, inValid, label, type, id, value, changeHandler, validationHandler}: InputProps ): JSX.Element {
  return (
    <div className={`${classname} ${isValid === false ? inValid : ""} `}>
      <label htmlFor={id}>{label}</label>
      <input 
        type={type}
        id={id}
        value={value}
        onChange={changeHandler}
        onBlur={validationHandler}
      />
    </div>
  );
}
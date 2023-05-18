
export interface InputProps {
  classname?: string;
  isValid?: boolean;
  inValid?: string;
  label?: string;
  type?: string;
  id?: string;
  value?: string;
  changeEventHandler?: () => void;
  focusEventHandler?: () => void;
  placeholder?: string;
};

export default function Input({classname, isValid, inValid, label, type, id, value, changeEventHandler, focusEventHandler, placeholder}: InputProps ): JSX.Element {
  return (
    <div className={`${classname && classname} ${isValid === false ? inValid  : ""} `}>
      <label htmlFor={id || undefined}>{label || undefined}</label>
      <input 
        type={type || undefined}
        id={id || undefined}
        value={value || undefined}
        onChange={changeEventHandler || undefined}
        onBlur={focusEventHandler || undefined}
        placeholder={placeholder || undefined}
      />
    </div>
  );
}
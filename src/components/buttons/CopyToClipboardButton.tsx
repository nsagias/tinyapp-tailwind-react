import { copyToClipboard } from "../Utils/utils";

type CopyToClipboardButtonProps = {
  copy: string,
  className: string,
}

export default function CopyToClipboardButton({ copy, className} : CopyToClipboardButtonProps): JSX.Element {
  return (
    <button  
      onClick={() =>  copyToClipboard(copy)} 
      className={className}>Copy
    </button>
  );
}
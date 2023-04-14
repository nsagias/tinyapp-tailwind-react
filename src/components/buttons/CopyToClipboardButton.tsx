import { CopyToClipboardButtonProps } from "../../types/components/Buttons";
import { copyToClipboard } from "../Utils/utils";

export default function CopyToClipboardButton({ copy, className} : CopyToClipboardButtonProps): JSX.Element {
  return (
    <button  
      onClick={() =>  copyToClipboard(copy)} 
      className={className}>Copy
    </button>
  );
}
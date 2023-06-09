import { CopyToClipboardButtonProps } from "../../../types/components/Buttons/CopyToClipboard/Buttons";
import { copyToClipboard } from "../../Utils/CopyToClipboard";

export default function CopyToClipboardButton({ copy, className} : CopyToClipboardButtonProps): JSX.Element {
  
  const handleCopy = async () => {
    await copyToClipboard(copy);
  };

  return (
    <button  
      onClick={() =>  handleCopy()}
      className={className}>Copy
    </button>
  );
}
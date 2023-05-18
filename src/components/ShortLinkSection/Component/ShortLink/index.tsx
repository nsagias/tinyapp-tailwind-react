import { useState } from "react";
import { IShortLinkProps } from "../../../../types/components/ShortenLinks/ShortLinks";
import CopyToClipboardButton from "../../../Buttons/CopyToClipboardButton";

export default function UpdateShortLink({ shortenLinks}: IShortLinkProps ): JSX.Element {

  const [copied] = useState<string>(shortenLinks && shortenLinks.shortLink);

  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
      {/* Link name */}
      <p className="font-bold text-center text-darkViolet md:text-left">{shortenLinks && shortenLinks.fullLink}</p>
      {/* Shortened Link Container */}
      <div className="flex flex-col items-cent`er justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        {/* Display Short Link */}
        <div className="font-bold text-cyan">
           {shortenLinks && shortenLinks.shortLink}
        </div>
        {/* Copy Button */}
        <CopyToClipboardButton 
          copy={copied} 
          className={`p-2 px-8 text-white  bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none`}
        />
      </div>
    </div>
  ); 
}
import { useState } from "react";
import { ShortenLinkData } from "../../types/ShortenLinks";
import CopyToClipboardButton from "../buttons/CopyToClipboardButton";


export default function ShortenLink({ shortenLinks }: { shortenLinks: ShortenLinkData }): JSX.Element {

  const [copied, setCopied] = useState<string>(shortenLinks.shortLink);


  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">

      {/* Link name */}
      <p className="font-bold text-center text-darkViolet md:text-left">{shortenLinks.fullLink}</p>

      {/* Shortened Link Container */}
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        
        {/* Display Short Link */}
        <div className="font-bold text-cyan">
           {shortenLinks.shortLink}
        </div>
        
        {/* Copy Button */}
        <CopyToClipboardButton 
          copy={copied} 
          className={`p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none`}
        />
    
      </div>
    </div>
  ); 
}
import { useState } from "react";
import { ShortenLinkData } from "../../types/ShortenLinks";

export default function ShortenLink({ shortenLinks }: { shortenLinks: ShortenLinkData }): JSX.Element {

  const [copied, setCopied] = useState<string>(shortenLinks.shortLink);

  const handleCopy = async (e: any) => {
 
      await navigator.clipboard.writeText(copied);
      e.preventDefault();
    
  }

  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">

      {/* Link name */}
      <p className="font-bold text-center text-darkViolet md:text-left">{shortenLinks.fullLink}</p>

      {/* Shortened Link Container */}
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        
        {/* Short Link */}
        <div className="font-bold text-cyan">
           {shortenLinks.shortLink}
        </div>

        {/* Copy Button */}
        <button  onClick={(e) => handleCopy(e)} className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">Copy</button>

      </div>
    </div>
  );
}
import { useState } from "react";
import { IShortenLinkProps as IShortLinkProps } from "../../types/components/ShortLinks";
import CopyToClipboardButton from "../buttons/CopyToClipboardButton";
import { Link } from "react-router-dom";


const SHORLINK_HOST = "http//127.0.0.1/3000/";
export default function ShortenLink({ shortenLinks, index }: IShortLinkProps ): JSX.Element {

  const [copied, setCopied] = useState<string>(shortenLinks && shortenLinks.shortLink);

  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">

      {/* Link name */}
      <p className="font-bold text-center text-darkViolet md:text-left">{shortenLinks && shortenLinks.fullLink}</p>



      {/* Shortened Link Container */}
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        
        {/* Display Short Link */}
        <div className="font-bold text-cyan">
          {shortenLinks && `${SHORLINK_HOST}${shortenLinks.shortLink}`}
        </div>

        {/* Copy Button */}
        <CopyToClipboardButton 
          copy={copied} 
          className={`p-2 px-8 text-white ${ index && index % 2 ? "bg-darkViolet" : "bg-cyan" } rounded-lg hover:opacity-70 focus:outline-none`}
        />
        {/* Edit Button */}
        <button className="p-2 px-10 text-white bg-yellow-500 rounded-lg hover:opacity-70 focus:outline-none"><Link to={`/shorturls/${index}`}>Edit</Link></button>
      </div>


    </div>
  ); 
}
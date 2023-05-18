import { useState } from "react";
import { IShortenLinkProps as IShortLinkProps } from "../../../../types/components/ShortenLinks/ShortLinks";
import CopyToClipboardButton from "../../../../components/Buttons/CopyToClipboardButton";
import { Link } from "react-router-dom";

const SHORLINK_HOST = "http://0.0.0.0:3001/u/";

export default function ShortenLink({ shortenLinks }: IShortLinkProps ): JSX.Element {

  // set state for copying to clipboard
  const [copied] = useState<string>(shortenLinks && `${SHORLINK_HOST}${shortenLinks.shortUrl}`);

  // extract shorturl convert to string
  const shortLink = JSON.stringify(shortenLinks.shortUrl);
  
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
      {/* Link name */}
      <p className="font-bold text-center text-darkViolet md:text-left">{shortenLinks && shortenLinks.longUrl}</p>
      {/* Shortened Link Container */}
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        {/* Display Short Link */}
        <div className="font-bold text-cyan">
          {shortenLinks && `${SHORLINK_HOST}${shortenLinks.shortUrl}`}
        </div>
        {/* Copy Button */}
        <CopyToClipboardButton 
          copy={copied} 
          // className={`p-2 px-8 text-white ${ index && index % 2 ? "bg-darkViolet" : "bg-cyan" } rounded-lg hover:opacity-70 focus:outline-none`}
          className={`p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none`}
        />
        {/* Edit Button */}
        <Link to={`/shorturls/${JSON.parse(shortLink)}`}>
           <button className="p-2 px-10 text-white bg-yellow-500 rounded-lg hover:opacity-70 focus:outline-none">Edit</button>
        </Link>
      </div>
    </div>
  ); 
}
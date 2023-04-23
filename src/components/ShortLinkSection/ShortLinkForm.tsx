import { useState } from "react";
import { validURL } from "../Utils/utils";

export default function ShortLinkForm({ shortLinkData }: { shortLinkData: any }):JSX.Element {
  const [shortLink, setShortLink] = useState<string>(shortLinkData && shortLinkData.data && shortLinkData.data.longUrl);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const handleSubmitUpdateLink = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    // check for value
    if (shortLink === "") {
      return setErrorMessage("Please Enter Value");
    }
    // check for valid link
    const isValidURL = validURL(shortLink);
    if (!isValidURL) {
      return setErrorMessage("Please Valid Link");
    }
    setErrorMessage("");
    setShortLink("");
  };

  return (
    <form onSubmit={handleSubmitUpdateLink} 
      id="link-form" 
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
      <input
        className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${errorMessage && "border-red border-8"}`}
        id="shorten-link" 
        name="shorten-link"
        type={"text"}
        placeholder={"Enter Link Here"}
        value={shortLink}
        onChange={(e) => setShortLink(e.target.value)}
      >  
      </input>
      {/* Update Button */}
      <button
        className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2" 
        disabled={false}
        >Update</button>

      {/* Delete Button */}
      <button
        className="px-10 py-3 text-white bg-red rounded-lg hover:bg-cyanLight focus:outline-none md:py-2" 
        disabled={false}
        >Delete</button>
        
      {/* Error Message */}
      {errorMessage && (
        <div id="form-error-message" className="absolute lg:left-7 bottom-3 text-red text-sm">{errorMessage}</div>
      )}
    </form>
  );
}
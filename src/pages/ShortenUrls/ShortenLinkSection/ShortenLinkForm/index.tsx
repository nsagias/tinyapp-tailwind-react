import { useState } from "react";
import { validURL } from "../../../../components/Utils/ValidURL";
import { createShortLink } from "../../../../api/LinkApi";
import localStorageService from "../../../../services/LocalStorageService";
import { LocalStorageItem } from "../../../../types/services/LocalStorageItems";

export default function ShortenForm({ onSetCreateShortLinkResponse }: { onSetCreateShortLinkResponse: any }): JSX.Element {

  const [longUrl, setLongUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [userId] = useState<number>(JSON.parse(localStorageService.getLocalStorageItem(LocalStorageItem.Id)!));
  const [token] = useState(localStorageService.getLocalStorageItem(LocalStorageItem.Token));


  const handleSubmitLink = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    // check for value
    if (longUrl === "") return setErrorMessage("Please Enter Value");
    
    // check for valid link
    const isValidURL = validURL(longUrl);
    if (!isValidURL) return setErrorMessage("Please Valid Link");

    try {
      const createShortLinkResponse = await createShortLink({userId, longUrl}, token!)
      onSetCreateShortLinkResponse(createShortLinkResponse);
    } catch (error: any) {
      console.log(error)
    }
    // clear error message
    setErrorMessage("");
    setLongUrl("");
  };

  return (
    <form onSubmit={handleSubmitLink} 
      id="link-form" 
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
    >
      <input
        className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${errorMessage && "border-red border-8"}`}
        id="shorten-link" 
        name="shorten-link"
        type={"text"}
        placeholder={"Enter Link Here"}
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        autoFocus
      >
      </input>
      <button
        className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2" 
        disabled={false}
        >Shorten Link
      </button>
        
      {/* Error Message */}
      { errorMessage && (
        <div id="form-error-message" className="absolute lg:left-7 bottom-3 text-red text-sm">{errorMessage}</div>
      ) }
    </form>
  );
}
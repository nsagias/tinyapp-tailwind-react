import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validURL } from "../../../Utils/utils";
import localStorageService from "../../../../services/LocalStorageService";
import { deleteShorLinkByUserId, updateShortLinkByUserId } from "../../../../api/linkApi";
import { ShortLinkFormProps } from "../../../../types/components/ShortLinks";
import { LocalStorageItem } from "../../../../types/services/LocalStorageItems";


export default function ShortLinkForm({ onShortLinkData, onShortLinkDataChanged }: ShortLinkFormProps ):JSX.Element {
  const navigate = useNavigate();
  const longUrl = onShortLinkData && onShortLinkData.data && onShortLinkData.data.longUrl;
  const shortUrl = onShortLinkData && onShortLinkData.data && onShortLinkData.data.shortUrl;
  const [selectedLongUrl, setSelectedLongUrl] = useState<string>("");
  const [ _, setSelectedShortUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [token] = useState(localStorageService.getLocalStorageItem(LocalStorageItem.Token));
  const [userId] = useState<number>(JSON.parse(localStorageService.getLocalStorageItem(LocalStorageItem.Id)!));

  useEffect(() => {
    setSelectedLongUrl(longUrl);
  },[onShortLinkData, longUrl]);

  useEffect(() => {
    setSelectedShortUrl(shortUrl);
  }, [onShortLinkData, shortUrl]);
 

  const handleSubmitUpdateLink = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    // check for value
    if (selectedLongUrl === "") return setErrorMessage("Please Enter Value");

    // check for valid link
    const isValidURL = validURL(selectedLongUrl!);
    if (!isValidURL) return setErrorMessage("Please Valid Link");

    try {
      const updatedDataResponse = await updateShortLinkByUserId({ userId, shortUrl, longUrl: selectedLongUrl }, token!);
      onShortLinkDataChanged(updatedDataResponse);
      } catch (error: any) {
        console.log("update error", error || error.response);
      }
    setErrorMessage("");
    };


  const deleleLink = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await deleteShorLinkByUserId({userId, shortUrl }, token!);
      // navigate back to urls
      navigate("/shorturls");
    } catch (error: any) {
      console.log("delete error", error || error.response);
    }  
  };

  return (
    <div 
      id="link-form" 
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
      <input
        className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${errorMessage && "border-red border-8"}`}
        id="shorten-link" 
        name="shorten-link"
        type={"text"}
        placeholder={"Enter Link Here"}
        value={selectedLongUrl || ""}
        autoFocus
        onChange={(e) => setSelectedLongUrl(e.target.value)}
      >  
      </input>
      {/* Update Button */}
      <button
        className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2" 
        disabled={false}
        onClick={(e) => handleSubmitUpdateLink(e)}
        >Update</button>

      {/* Delete Button */}
      <button
        className="px-10 py-3 text-white bg-red rounded-lg hover:bg-cyanLight focus:outline-none md:py-2" 
        disabled={false}
        onClick={(e) => deleleLink(e)}
        >Delete</button>
        
      {/* Error Message */}
      {errorMessage && (
        <div id="form-error-message" className="absolute lg:left-7 bottom-3 text-red text-sm">{errorMessage}</div>
      )}
    </div>
  );
}
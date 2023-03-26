import { useState } from "react";

export default function ShortenForm() {

  const [shortenLink, setShortenLink] = useState<string>("");
  const [hasInputError, setHasInputError] = useState<boolean>(false);
  
  const handleSubmitLink = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmitLink} 
      id="link-form" 
      className="relative flex flex-col w-full p-10 bg-darkViolet roundend-lg md:flex-row md:space-y-0 md:space-x-3">
      <input
        className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${hasInputError && "border-red border-8"}`}
        id="shorten-link" 
        name="shorten-link"
        type={"text"}
        placeholder={"Enter Link Here"}
        value={shortenLink}
        onChange={(e) => setShortenLink(e.target.value)}
        required
        >  
      </input>
      <button
        className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2" 
        disabled={false}
        >Shorten Link</button>
        
      {/* Error Message */}
      { hasInputError && (
        <div id="form-error-message" className="absolute left-7 bottom-3 text-red text-sm">Error</div>
      ) }
    </form>
  );
}
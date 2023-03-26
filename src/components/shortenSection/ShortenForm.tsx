import { useState } from "react";

export default function ShortenForm() {

  const [shortenLink, setShortenLink] = useState<string>();
  
  const handleSubmitLink = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmitLink} id="link-form" className="relative flex flex-col w-full p-10 bg-darkViolet roundend-lg md:flex-row md:space-y-0 md:space-x-3">
   
    </form>
  );
}
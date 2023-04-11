import { useEffect, useState } from "react";
import { ShortLinkData } from "../../types/ShortLinks";
import ShortLink from "./ShortLink";
import ShortLinkForm from "./ShortLinkForm";
import ShortLinkContainer from "./ShortLinkSectionContainer";
  
const shortLinkData: ShortLinkData= { id: 1, fullLink: "https://somecoolwebsite.com", shortLink: "https//tinyapp.ink/k4Ikyk" }

export default function ShortLinkSection() {
  const [shortLink, setShortLink] = useState<ShortLinkData>();

  // TODO: Add new shorten link call to depency array.
  useEffect(() => {
    getLatestData();
  }, []);

  
  const getLatestData = async() => {
    // TODO: Update with axios call 
    const data: ShortLinkData = await shortLinkData;
    await setShortLink(data);
  };

  return (
    <section id="shorten-section" className="relative bg-gray-100 pb-10">

      {/* Shorten Section Container */}
      <ShortLinkContainer>

        {/* Shorten Form */}
        <ShortLinkForm />

        {/* Display Shorten Links */}
        <ShortLink shortenLinks={shortLinkData.shortLink}/>
    
      </ShortLinkContainer>

    </section>
  );
}
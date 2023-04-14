import { useEffect, useState } from "react";
import { ShortLinkData } from "../../types/components/ShortLinks";
import ShortenLink from "./ShortenLink";
import ShortenForm from "./ShortenForm";
import ShortenSectionContainer from "./ShortenSectionContainer";
  
const shortenLinkData: ShortLinkData[] = [
  { id: 1, fullLink: "https://somecoolwebsite.com", shortLink: "https//tinyapp.ink/k4Ikyk" },
  { id: 2, fullLink: "https://anothercoolwebsite.com", shortLink: "https//tinyapp.ink/AbCdefk" },
  { id: 3, fullLink: "https://bestcoolwebsite.com", shortLink: "https//tinyapp.ink/Z24Ikyk" },
];

export default function ShortenSection() {
  const [shortenLinks, setShortLinks] = useState<ShortLinkData[]>([]);

  // TODO: Add new shorten link call to depency array.
  useEffect(() => {
    getLatestData();
  }, []);

  // TODO: Refactor
  const getLatestData = async() => {
    // TODO: Update with axios call 
    const data: ShortLinkData[] = await shortenLinkData;
    await setShortLinks(data);
  };

  return (
    <section id="shorten-section" className="relative bg-gray-100 pb-10">

      {/* Shorten Section Container */}
      <ShortenSectionContainer>

        {/* Shorten Form */}
        <ShortenForm />

        {/* Display Shorten Links */}
        {shortenLinks && Array.isArray(shortenLinks) && shortenLinks.map((links, index: number) => (
          <ShortenLink 
            shortenLinks={links}
            key={links.id} 
            index={index + 1} 
            />
        ))}
      </ShortenSectionContainer>

    </section>
  );
}
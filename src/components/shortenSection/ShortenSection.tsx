import { useState } from "react";
import { ShortenLinkData } from "../../types/ShortenLinks";
import ShortenLink from "./ShortendLink";
import ShortenForm from "./ShortenForm";
import ShortenSectionContainer from "./ShortenSectionContainer";


  
const shorteLinkData: ShortenLinkData[] = [
  { id: 1, fullLink: "https://somecoolwebsite.com", shortLink: "https//tinyapp.ink/k4Ikyk" },
  { id: 2, fullLink: "https://anothercoolwebsite.com", shortLink: "https//tinyapp.ink/AbCdefk" },
  { id: 3, fullLink: "https://bestcoolwebsite.com", shortLink: "https//tinyapp.ink/Z24Ikyk" },
];

export default function ShortenSection() {
  const [shortenLinks, setShortLinks] = useState<any>(shorteLinkData);
  return (
    <section id="shorten-section" className="relative bg-gray-100">

      {/* Shorten Section Container */}
      <ShortenSectionContainer>

        {/* Shorten Form */}
        <ShortenForm />

        {/* Display Shorten Links */}
        {shortenLinks && Array.isArray(shortenLinks) && shortenLinks.map((links) => (
          <ShortenLink shortenLinks={links} key={links.id} />
        ))}
      </ShortenSectionContainer>

    </section>
  );
}
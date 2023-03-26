import { useState } from "react";
import { ShortenLinkData } from "../../types/ShortenLinks";
import ShortenLink from "./ShortendLink";
import ShortenForm from "./ShortenForm";
import ShortenSectionContainer from "./ShortenSectionContainer";


  
const shorteLinkData: ShortenLinkData[] = [
  { id: 1, fullLink: "https://somecoolwebsite.com" },
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
        <ShortenLink data={shortenLinks}/>

      </ShortenSectionContainer>

    </section>
  );
}
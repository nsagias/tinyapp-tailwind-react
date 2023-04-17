import { useEffect, useState } from "react";
import ShortenLink from "./ShortenLink";
import ShortenForm from "./ShortenForm";
import ShortenSectionContainer from "./ShortenSectionContainer";
import { getLinksByUserId } from "../../api/linkApi";


export default function ShortenSection() {
  const [shortenLinks, setShortLinks] = useState<any>([]);
  const [token, setToken] = useState<string>("")

  // TODO: Add new shorten link call to depency array.
  useEffect( () => {
    getLatestData();
  }, []);

  // TODO: Refactor
  const getLatestData = async() => {
    // TODO: Update with axios call 
    const token = localStorage.getItem("token")
    const data = await getLinksByUserId(1, token!)
    setShortLinks(data && data.data);
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
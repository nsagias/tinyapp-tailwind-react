import { useEffect, useState } from "react";
import ShortenLink from "./ShortenLink";
import ShortenForm from "./ShortenForm";
import ShortenSectionContainer from "./ShortenSectionContainer";
import { getLinksByUserId } from "../../api/linkApi";
import localStorageService from "../../services/localStorageService";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function ShortenSection({ isAuthenticated }: { isAuthenticated : boolean }): JSX.Element {
  const [shortenLinks, setShortLinks] = useState<any>([]); 
  const [token, setToken] = useState(localStorageService.getLocalStorageItem("token") || null);
  const [id, setId] = useState(localStorageService.getLocalStorageItem("id") || null)
  const selectIsAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
  
  useEffect( () => {
    if (!isAuthenticated || !selectIsAuthenticated ) {
      setId(null);
      setToken(null);
      setShortLinks([]);
    }
    getShortLinkData();
  }, [isAuthenticated, selectIsAuthenticated]);

  const getShortLinkData = async() => {
    const data = await getLinksByUserId(id, token!) || null;
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
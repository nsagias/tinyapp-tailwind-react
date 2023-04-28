import { useEffect, useState } from "react";
import ShortenLink from "./ShortenLink";
import ShortenForm from "./ShortenForm";
import ShortenSectionContainer from "./ShortenSectionContainer";
import { getLinksByUserId } from "../../api/linkApi";
import localStorageService from "../../services/localStorageService";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LinksListSuccessReponse } from "../../types/api/linkApi";

export default function ShortenSection({ isAuthenticated }: { isAuthenticated : boolean }): JSX.Element {
  const [shortenLinks, setShortLinks] = useState<LinksListSuccessReponse>({ message: "", data: [] }); 
  const [token, setToken] = useState(localStorageService.getLocalStorageItem("token") || null);
  const [userId, setUserId] = useState<number | null>(JSON.parse(localStorageService.getLocalStorageItem("id")!)) || null;
  const selectIsAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
  const [createShortLinkResponse, setCreateShortLinkResponse] = useState<any>(null);
  
  useEffect(() => {
    if ( !isAuthenticated || !selectIsAuthenticated ) {
      setUserId(null);
      setToken(null);
      setShortLinks({ message: "", data: [] });
    }
    getShortLinkData();
  }, [isAuthenticated, selectIsAuthenticated, createShortLinkResponse]);


  const getShortLinkData = async() => {
    const data = await getLinksByUserId(userId, token!) || null;
    setShortLinks(data);
  };

  return (
    <section id="shorten-section" className="relative bg-gray-100 pb-10">
      {/* Shorten Section Container */}
      <ShortenSectionContainer>
        {/* Shorten Form */}
        <ShortenForm onSetCreateShortLinkResponse={setCreateShortLinkResponse} />
        {/* Display Shorten Links */}
        {shortenLinks.data && Array.isArray(shortenLinks.data) && shortenLinks.data.map((links) => (
          <ShortenLink 
            shortenLinks={links}
            key={links.id} 
          />
        ))}
      </ShortenSectionContainer>
    </section>
  );
}
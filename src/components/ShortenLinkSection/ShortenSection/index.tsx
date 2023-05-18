import { useEffect, useState } from "react";
import ShortenLink from "../ShortenLink";
import ShortenForm from "../ShortenLinkForm";
import ShortenSectionContainer from "../ShortenSectionContainer";
import { getLinksByUserId } from "../../../api/LinkApi";
import localStorageService from "../../../services/LocalStorageService";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { LinksListSuccessReponse } from "../../../types/api/linkApi";
import { ShortenSectionProps } from "../../../types/components/ShortenLinks";
import { LocalStorageItem } from "../../../types/services/LocalStorageItems";


export default function ShortenSection({ isAuthenticated }: ShortenSectionProps ): JSX.Element {
  const [shortenLinks, setShortLinks] = useState<LinksListSuccessReponse>({ message: "", data: [] }); 
  const [token, setToken] = useState(localStorageService.getLocalStorageItem(LocalStorageItem.Token) || null);
  const [userId, setUserId] = useState<number | null>(JSON.parse(localStorageService.getLocalStorageItem(LocalStorageItem.Id)!)) || null;
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
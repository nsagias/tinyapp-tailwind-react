import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import localStorageService from "../../services/localStorageService";
import HeroShortLinksSection from "../../components/heroSection/HeroShortLinksSection";
import ShortLinkSection from "../../components/shortLinkSection/ShortLinkSection";
import { getLinkByUserIdAndShortLink } from "../../api/linkApi";
import { LinkSuccessReponse } from "../../types/api/linkApi";

export default function ShortLinkPage({}): JSX.Element {
  const selectedShortLink = useParams();
  const [shortLinkData, setShortLinkData] = useState<LinkSuccessReponse>();
  const [userId, setUserId] = useState<number>(JSON.parse(localStorageService.getLocalStorageItem("id")!));
  const [shortUrl, setShortUrl] = useState<any>(selectedShortLink);
  const [token, setToken] = useState(localStorageService.getLocalStorageItem("token"));

  useEffect(() => {
    if (userId && token) {
      getSelectedShortLink({userId, shortUrl}, token);
    }
  }, []);

  const getSelectedShortLink = async (requesInfo: any, token: string) => {
    try {
      const data = await getLinkByUserIdAndShortLink(requesInfo, token);
      if (!data) throw new Error("no data");
      setShortLinkData(data);

    } catch (error: any) {
      console.log("Error", error)
    }
  };

  return (
    <>
      <HeroShortLinksSection shortLinkData={shortLinkData}/>
      <ShortLinkSection shortLinkData={shortLinkData}/>
    </>
  );
}
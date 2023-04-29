import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import localStorageService from "../../services/LocalStorageService";
import HeroShortLinksSection from "../../components/heroSection/HeroShortLinksSection";
import ShortLinkSection from "../../components/shortLinkSection/ShortLinkSection";
import { getLinkByUserIdAndShortLink } from "../../api/linkApi";
import { RequestSelectedShortLink, UpdateShortLinkResponse } from "../../types/api/linkApi";

export default function ShortLinkPage({}): JSX.Element {
  const selectedShortLink = useParams();
  const [userId, setUserId] = useState<number>(JSON.parse(localStorageService.getLocalStorageItem("id")!));
  const [token, setToken] = useState(localStorageService.getLocalStorageItem("token"));
  const [shortUrl, setShortUrl] = useState<any>(selectedShortLink.id);
  const [shortLinkData, setShortLinkData] = useState<UpdateShortLinkResponse>({
    message: "",
    data: {
      userId: 0,
      shortUrl: "",
      longUrl: "",
    }
  });
  
  useEffect(() => {
    if (userId && token) {
      getSelectedShortLink({userId, shortUrl}, token);
    }
  }, []);

  const getSelectedShortLink = async (requesInfo: RequestSelectedShortLink, token: string) => {
    try {
      const data = await getLinkByUserIdAndShortLink(requesInfo, token);
      if (!data) throw new Error("Error on short link page");
      setShortLinkData(data);
    } catch (error: any) {
      console.log("Error on short link page", error);
    }
  };

  return (
    <>
      <HeroShortLinksSection shortLinkData={shortLinkData}/>
      <ShortLinkSection
        onShortLinkData={shortLinkData}
        onShortLinkDataChanged={(shortLinkData: UpdateShortLinkResponse) => setShortLinkData(shortLinkData)}
      />
    </>
  );
}
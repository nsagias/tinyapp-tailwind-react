import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import localStorageService from "../../services/LocalStorageService";
import HeroShortLinksSection from "../../components/HeroSection/HeroShortLinksSection";
import ShortLinkSection from "../../components/ShortLinkSection/Component/ShortLinkSection";
import { getLinkByUserIdAndShortLink } from "../../api/LinkApi";
import { RequestSelectedShortLink, UpdateShortLinkResponse } from "../../types/api/linkApi";
import { LocalStorageItem } from "../../types/services/LocalStorageItems";


export default function ShortLinkPage({}): JSX.Element {
  const selectedShortLink = useParams();
  const [userId] = useState<number>(JSON.parse(localStorageService.getLocalStorageItem(LocalStorageItem.Id)!));
  const [token] = useState(localStorageService.getLocalStorageItem(LocalStorageItem.Token));
  const [shortUrl] = useState<any>(selectedShortLink.id);
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
  }, [shortUrl, token, userId]);

  const getSelectedShortLink = async (requesInfo: RequestSelectedShortLink, token: string) => {
    try {
      const data = await getLinkByUserIdAndShortLink(requesInfo, token);
      if (!data) throw new Error("Error on short link page");
      setShortLinkData(data);
    } catch (error: any) {
      console.log("Error on short link page", error);
      console.log("Error on short link page", error.response);
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
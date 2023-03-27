import { FooterSocialMediaItemData } from "../../types/Footer";

export default function FooterSocialMediaItem({ linkURL, imageURL }: FooterSocialMediaItemData ) {
  return (
    <a href={`${linkURL}`} className="">
      <img src={`${imageURL}`} alt="" className="ficon"/>
    </a>
  );
}
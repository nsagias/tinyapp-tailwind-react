import MenuContainer from "./MenuContainer";
import FooterMenu from "./FooterMenu";
import { FooterMenuData, FooterSocialMediaItemData } from "../../types/Footer";
import { useState } from "react";
import FooterSocialMediaContainer from "./FooterSocialMediaContainer";
import FooterSocialMediaItem from "./FooterSocialMediaItem";


const footerMenuList: FooterMenuData[] = [ 
  { footerMenuTitle: "Features", footerData: [
    { URL: "# ", linkName: "Link shortenning"},
    { URL: "# ", linkName: "Branding links"},
    { URL: "# ", linkName: "Analytics"}
  ]}, 
  { footerMenuTitle: "Resources", footerData: [
    { URL: "# ", linkName: "Blog"},
    { URL: "# ", linkName: "Developers"},
    { URL: "# ", linkName: "Support"}
  ]},
  { footerMenuTitle: "Company", footerData: [
    { URL: "# ", linkName: "About"},
    { URL: "# ", linkName: "Our Team"},
    { URL: "# ", linkName: "Careers"},
    { URL: "# ", linkName: "Contact Us"}
  ]}
];

export const footerSocialMediaList: FooterSocialMediaItemData[] = [
  {linkURL: "# ", imageURL: "images/icon-facebook.svg"},
  {linkURL: "# ", imageURL: "images/icon-twitter.svg"},
  {linkURL: "# ", imageURL: "images/icon-instagram.svg"}
];

export default function Footer({ authorized}: {authorized: boolean}): JSX.Element {

  const [footerData, setFooterData] = useState<FooterMenuData[]>(footerMenuList)

  return (
    <footer className={`py-16 bg-darkerViolet ${authorized && ("absolute bottom-0 left-0 right-0")}`}>
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        
        {/* LOGO */}
        <img src="images/logo-tiny-app.svg" alt="" className="w-32 border-8 border-cyan px-4 py-1 pt-2 rounded-full bg-white hover:opacity-70" />

        {/* Menus Container */}
        <MenuContainer>
          {/* Null check and only slice first three items off list */}
          {footerData && Array.isArray(footerData) && footerData.length > 0 && footerData.slice(0, 3).map((data, index) => (
            <FooterMenu 
              footerMenuTitle={data.footerMenuTitle}
              footerData={data.footerData}
              key={index}
            />
          ))}
        </MenuContainer>

        {/* Social Media Footer */}
        <FooterSocialMediaContainer>
          {footerSocialMediaList && Array.isArray(footerSocialMediaList) && footerSocialMediaList.length > 0 && footerSocialMediaList.map((data, index) => (
            <FooterSocialMediaItem 
              linkURL={data.linkURL} 
              imageURL={data.imageURL} 
              key={index}
            />
          ))}
        </FooterSocialMediaContainer>
        
      </div>
    </footer>
  );
}
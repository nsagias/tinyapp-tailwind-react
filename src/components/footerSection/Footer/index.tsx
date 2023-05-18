import MenuContainer from "../FooterMenuContainer";
import FooterMenu from "../FooterMenu";
import { FooterMenuData, FooterSocialMediaItemData } from "../../../types/components/Footer";
import { useState } from "react";
import FooterSocialMediaContainer from "../FooterSocialMediaContainer";
import FooterSocialMediaItem from "../FooterSocialMediaItem";
import FooterLogo from "../FooterLogo";


const footerMenuList: FooterMenuData[] = [ 
  {id: 1,  footerMenuTitle: "Features", footerData: [
    { id: 1, URL: "# ", linkName: "Link shortenning"},
    { id: 2, URL: "# ", linkName: "Branding links"},
    { id: 3, URL: "# ", linkName: "Analytics"}
  ]}, 
  {id: 2, footerMenuTitle: "Resources", footerData: [
    { id: 4, URL: "# ", linkName: "Blog"},
    { id: 5, URL: "# ", linkName: "Developers"},
    { id: 6, URL: "# ", linkName: "Support"}
  ]},
  {id: 3, footerMenuTitle: "Company", footerData: [
    { id: 7, URL: "# ", linkName: "About"},
    { id: 8, URL: "# ", linkName: "Our Team"},
    { id: 9, URL: "# ", linkName: "Careers"},
    { id: 10,URL: "# ", linkName: "Contact Us"}
  ]}
];

export const footerSocialMediaList: FooterSocialMediaItemData[] = [
  {id: 1, linkURL: "# ", imageURL: "/images/icon-facebook.svg"},
  {id: 2, linkURL: "# ", imageURL: "/images/icon-twitter.svg"},
  {id: 3, linkURL: "# ", imageURL: "/images/icon-instagram.svg"}
];

export default function Footer({ authorized}: {authorized: boolean}): JSX.Element {

  const [footerData] = useState<FooterMenuData[]>(footerMenuList)

  return (
    <footer className={`py-16 bg-darkerViolet`}>
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        
        {/* Footer Logo */}
        <FooterLogo />

        {/* Menus Container */}
        <MenuContainer>
          {/* Null check and only slice first three items off list */}
          {footerData && Array.isArray(footerData) && footerData.length > 0 && footerData.slice(0, 3).map((data, index) => (
            <FooterMenu 
              footerMenuTitle={data.footerMenuTitle}
              footerData={data.footerData}
              id={data.id}
              key={index}
            />
          ))}
        </MenuContainer>

        {/* Social Media Footer */}
        <FooterSocialMediaContainer>
          {footerSocialMediaList && Array.isArray(footerSocialMediaList) && footerSocialMediaList.length > 0 && footerSocialMediaList.map((data) => (
            <FooterSocialMediaItem 
              linkURL={data.linkURL} 
              imageURL={data.imageURL} 
              id={data.id}
              key={data.id}
            />
          ))}
        </FooterSocialMediaContainer>
        
      </div>
    </footer>
  );
}
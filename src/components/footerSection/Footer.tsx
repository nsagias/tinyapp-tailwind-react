import MenuContainer from "./MenuContainer";
import FooterMenu from "./FooterMenu";
import { FooterMenuData } from "../../types/Footer";
import { useState } from "react";

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
    { URL: "# ", linkName: "Contact Us"},
  ]}
];

export default function Footer() {

  const [footerData, setFooterData] = useState<FooterMenuData[]>(footerMenuList)


  return (
    <footer className="py-16 bg-darkerViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        
        {/* LOGO */}
        <img src="images/logo-tiny-app.svg" alt="" className="w-32 border-8 border-cyan px-4 py-1 pt-2 rounded-full bg-white" />

        {/* Menus Container */}
        <MenuContainer>
          {/* Null check and only slice first three items off list */}
          {footerData && Array.isArray(footerData) && footerData.length > 0 && footerData.slice(0, 3).map((data) => (
            <FooterMenu 
              footerMenuTitle={data.footerMenuTitle}
              footerData={data.footerData} 
            />
          ))}
        </MenuContainer>
      </div>
    </footer>
  );
}
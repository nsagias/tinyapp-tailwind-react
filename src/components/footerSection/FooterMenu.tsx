import { FooterMenuData } from "../../types/components/Footer";
import FooterMenuItem from "./FooterMenuItem";

export default function FooterMenu({ footerMenuTitle, footerData }: FooterMenuData): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full md:items-start">
      {/* Menu Heading */}
      <div className="mb-5 font-bold text-white capitalize">{footerMenuTitle}</div>
      
      {/* Menu Links */}
      {/* array and null check and slice first three items off list */}
      {footerData && Array.isArray(footerData) && footerData.length > 0 && footerData.slice(0, 3).map((data, index) => (
        <FooterMenuItem 
          footerData={data} 
          key={index} 
        />
      ))}
  
    </div>
  );
}
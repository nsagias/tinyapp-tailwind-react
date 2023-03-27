import { FooterMenuData } from "../../types/Footer";
import FooterMenuItem from "./FooterMenuItem";



export default function FooterMenu({ footerMenuTitle, footerData }: FooterMenuData): JSX.Element {

  return (
    <div className="flex flex-col items-center w-full md:items-start">
      {/* Menu Heading */}
      <div className="mb-5 font-bold text-white capitalize">{footerMenuTitle}</div>
      
      {/* Menu Links */}
      {footerData && Array.isArray(footerData) && footerData.length  > 0 && footerData.map((data) => (
        <FooterMenuItem footerData={data} />
      ))}
  
    </div>
  );
}
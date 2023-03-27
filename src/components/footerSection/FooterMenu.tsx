import { useState } from "react";
import { FooterDataItem } from "../../types/Footer";
import FooterMenuItem from "./FooterMenuItem";


export default function FooterMenu({ heading, footerData }: any): JSX.Element {

  const [footer, setFooter] = useState<FooterDataItem[]>(footerData && footerData); 

  return (
    <div className="flex flex-col items-center w-full md:items-start">
      {/* Sub Menu Heading */}
      <div className="mb-5 font-bold text-white capitalize">{heading}</div>
      {/* Link 1 */}

      <FooterMenuItem footerData={footerData && footerData[0]} />
      {/* <div className="flex flex-col items-center space-y-3 md:items-start">
        <a href={`${footerData && footerData.URL}`} className="capitalize text-grayViolet hover:text-cyan">{footerData && footerData.linkName}</a>
      </div> */}
     
      {/* <div className="flex flex-col items-center space-y-3 md:items-start">
        <a href={`${URL}`} className="capitalize text-grayViolet hover:text-cyan">{footerData.linkName}</a>
      </div>
     
      <div className="flex flex-col items-center space-y-3 md:items-start">
        <a href={`${URL}`} className="capitalize text-grayViolet hover:text-cyan">{footerData.linkName}</a>
      </div> */}
    </div>
  );
}
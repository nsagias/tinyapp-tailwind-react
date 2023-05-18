import { FooterData } from "../../../types/components/Footer";

export default function FooterMenuItem({ footerData }: FooterData): JSX.Element {
  return (
    <div className="flex flex-col items-center space-y-3 md:items-start">
      <a href={`${footerData.URL}`} className="capitalize text-grayViolet hover:text-cyan">{footerData.linkName}</a>
    </div>
  );
}
import ShortLinkForm from "./ShortLinkForm";
import ShortLinkContainer from "./ShortLinkSectionContainer";
  
export default function ShortLinkSection({ shortLinkData }: { shortLinkData: any }):JSX.Element  {
  return (
    <section id="shorten-section" className="relative bg-gray-100 pb-10">
      {/* Shorten Section Container */}
      <ShortLinkContainer>
        {/* Shorten Form */}
        <ShortLinkForm shortLinkData={shortLinkData}/>
      </ShortLinkContainer>
    </section>
  );
}
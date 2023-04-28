import { UpdateShortLinkResponse } from "../../types/api/linkApi";
import ShortLinkForm from "./ShortLinkForm";
import ShortLinkContainer from "./ShortLinkSectionContainer";
  
export default function ShortLinkSection({ onShortLinkData, onShortLinkDataChanged}: {
  onShortLinkData: UpdateShortLinkResponse,
  onShortLinkDataChanged: (shortLinkData: UpdateShortLinkResponse) => void
}): JSX.Element {
  return (
    <section id="shorten-section" className="relative bg-gray-100 pb-10">
      {/* Shorten Section Container */}
      <ShortLinkContainer>
        {/* Shorten Form */}
        <ShortLinkForm
          onShortLinkData={onShortLinkData}
          onShortLinkDataChanged={onShortLinkDataChanged}
        />
      </ShortLinkContainer>
    </section>
  );
}
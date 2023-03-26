import MarketingFeatures from "./MarketingFeatures";
import MarketingHeaderSection from "./MarketingSection";

export default function MarketingSectionContainer() {
  return (
    <div className="container mx-auto px-3">
      <MarketingHeaderSection />
      <MarketingFeatures />
    </div>
  )
}

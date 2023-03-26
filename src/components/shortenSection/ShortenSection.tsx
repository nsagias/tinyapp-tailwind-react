import ShortenLink from "./ShortendLink";
import ShortenForm from "./ShortenForm";
import ShortenSectionContainer from "./ShortenSectionContainer";

export default function ShortenSection() {
  return (
    <section id="shorten-section" className="relative bg-gray-100">

      {/* Shorten Section Container */}
      <ShortenSectionContainer>

        {/* Shorten Form */}
        <ShortenForm />

        {/* Display Shorten Links */}
        <ShortenLink />

      </ShortenSectionContainer>

    </section>
  );
}
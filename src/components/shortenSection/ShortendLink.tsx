import { ShortenLinkData } from "../../types/ShortenLinks";

export default function ShortenLink({ data }: { data: ShortenLinkData }): JSX.Element {

  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
      {/* Link name */}
      <p className="font-bold text-center">{data.fullLink}</p>

      {/* Shorten Link */}
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
here
      </div>
    </div>
  );
}
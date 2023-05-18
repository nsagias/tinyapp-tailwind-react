export type ShortLinkData = {
  id: number,
  fullLink: string,
  shortLink: string,
}

export interface IShortenLinkProps {
  shortenLinks: IShortenLinkData;
}

export interface IShortLinkProps {
  shortenLinks: IShortenLinkData;
}

export type ShortLinkSectionProps = {
  onShortLinkData: UpdateShortLinkResponse,
  onShortLinkDataChanged: (shortLinkData: UpdateShortLinkResponse) => void
}

export type ShortLinkFormProps = {
  onShortLinkData: UpdateShortLinkResponse,
  onShortLinkDataChanged: (shortLinkData: UpdateShortLinkResponse) => void
}

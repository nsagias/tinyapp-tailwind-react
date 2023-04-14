export type ShortLinkData = {
  id: number,
  fullLink: string,
  shortLink: string,
}

export interface IShortenLinkProps {
  shortenLinks: IShortenLinkData;
  index: number;
}

export interface IShortLinkProps {
  shortenLinks: IShortenLinkData;
}
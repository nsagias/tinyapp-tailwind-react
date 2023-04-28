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
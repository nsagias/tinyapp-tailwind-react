export type ShortenLinkData = {
  id: number,
  fullLink: string,
  shortLink: string,
}

export interface IShortenLinkProps {
  shortenLinks: IShortenLinkData;
  index: number;
}
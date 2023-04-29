
export type FooterData = {
  footerData: { 
    URL: string, 
    linkName: string
  }
}

export type FooterDataItem = {
  
  URL: string, 
  linkName: string
}

export type FooterMenuData = {
  footerMenuTitle: string,
  footerData: { id: number, URL: string, linkName: string}[]
}

export type FooterSocialMediaItemData = {
  id: number,
  linkURL: string, 
  imageURL: string,
}
  

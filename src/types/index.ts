export interface ILogoData {
  name: string;
  url_image: string;
  social_media: string;
  type_logo: {
    name: string;
    description: string;
  };
}
export interface IMenuItem {
  label: string;
  isCollapsable: boolean;
  href: string;
  listProp?: JSX.Element;
  subLabels?: {
    label: string;
    href: string;
  }[];
}
export interface ICardProductData {
  name: string;
  image: string;
  desc: string;
}

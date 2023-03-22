export interface SplitTypes {
  title: string;
  subTitle?: string;
  h1Class?: string;
  headerClass?: string;
  text?: Array<{
    text: string;
    color: string;
    children?: Array<{ text: string; color: string }>;
  }>;
  image?: { image?: string; description?: string; alt?: string };
  leftBoxClass?: string;
  rightBoxClass?: string;
  imgBoxClass?: string;
}
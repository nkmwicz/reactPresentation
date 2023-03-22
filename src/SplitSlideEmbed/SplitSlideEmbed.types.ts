export interface SplitSlideEmbedProps {
  headerClass?: string;
  h1Class?: string;
  title?: string;
  subTitle?: string;
  leftBoxClass?: string;
  textArray?: Array<{ text: string; color: string }>;
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
  rightChildBoxClass?: string;
  embed?: { url: string; title: string };
}

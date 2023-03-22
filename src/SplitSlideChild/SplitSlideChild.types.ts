export interface SplitSlideChildProps {
  headerClass?: string;
  h1Class?: string;
  title?: string;
  subTitle?: string;
  leftBoxClass?: string;
  text?: Array<{ text: string; color: string }>;
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
  rightChildBoxClass?: string;
  childComponent?: React.ReactNode;
}
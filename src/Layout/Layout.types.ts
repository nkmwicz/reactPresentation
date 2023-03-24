export interface LayoutTypes {
  slide: {
    title?: string;
    subTitle?: string;
    byLine?: string;
    intro?: boolean;
    split?: boolean;
    centered?: boolean;
    splitEmbed?: boolean;
    centeredEmbed?: boolean;
    splitText?: boolean;
    rightText?: string;
    text?: Array<{
      text: string;
      color: string;
      children?: Array<{ text: string; color: string }>;
    }>;
    image?: { image: string; description: string; alt: string };
    images?: Array<{
      image: string;
      description: string;
      opacity: number;
      alt: string;
    }>;
    embed?: { url: string; title: string };
  };
  bgColor?: string;
  nextClick: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  prevClick: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  h1Class?: string | undefined;
  headerClass?: string;
  splitText?: string;
  leftBoxClass?: string;
  rightBoxClass?: string;
  imgBoxClass?: string;
  contentBoxClass?: string;
  contentBoxEmbedClass?: string;
  contentTextClass?: string;
  imageArrayBoxClass?: string;
  bgImage?: React.CSSProperties["backgroundImage"];
  mode?: "light" | "dark";
}
export interface LayoutTypes {
  slide: {
    title: string;
    subTitle?: string;
    byLine?: string;
    intro?: boolean;
    split?: boolean;
    centered?: boolean;
    splitEmbed?: boolean;
    text?: Array<{
      text: string;
      color: string;
      children?: Array<{ text: string; color: string }>;
    }>;
    image?: { image: string; description: string; alt: string };
    images?: Array<{
      image: string;
      description: string;
      flex: number;
      alt: string;
    }>;
    embed?: { url: string; title: string };
  };
  bgColor?: string;
  nextClick: (event: Event) => void;
  prevClick: (event: Event) => void;
  h1Class?: string | undefined;
  headerClass?: string;
  leftBoxClass?: string;
  rightBoxClass?: string;
  imgBoxClass?: string;
  contentBoxClass?: string;
  contentTextClass?: string;
  imageArrayBoxClass?: string;
  bgImage?: React.CSSProperties["backgroundImage"];
  mode?: "light" | "dark";
}
export interface CenteredSlideProps {
  headerClass?: string;
  title: string;
  subTitle?: string;
  images?: Array<{
    flex: number;
    image: string | null;
    description: string;
  }>;
  text?: Array<{
    text: string;
    color: string;
    children?: Array<{
      text: string;
      color: string;
    }>;
  }>;
  contentBoxClass?: string;
  contentTextClass?: string;
  imageArrayBoxClass?: string;
}
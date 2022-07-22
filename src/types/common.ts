export type TMeta = {
  author: string;
  date: string;
};

export type TPost = {
  title: string;
  content: string;
  thumbnail: string;
  meta: TMeta;
  url: string;
};

export type TIconProps = {
  width?: string;
  height?: string;
  className?: string
};

export type TSource = {
  id?: string;
  name: string;
};

export type TArticleData = {
  source: TSource;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  content?: string;
  publishedAt: string;
};

export type TEverythingResponse = {
  status: string;
  totalResults: number;
  articles: TArticleData[];
};

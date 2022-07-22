export type TSource = {
  id: string | null;
  name: string;
};

export type TArticleData = {
  source: TSource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  content: string | null;
  publishedAt: string;
};

export type TEverythingResponse = {
  status: string;
  totalResults: number;
  articles: TArticleData[];
};

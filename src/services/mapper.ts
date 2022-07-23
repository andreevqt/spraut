import { TPost } from '../types/common';
import { TArticleData } from './responses';

export default (post: TArticleData): TPost => {
  const d = new Date(post.publishedAt);
  const date = `${String(d.getFullYear()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  return ({
    title: post.title,
    content: post.content ?? '',
    meta: {
      author: post.author ?? 'Автор',
      date
    },
    thumbnail: post.urlToImage ?? '',
    url: post.url
  });
};

import React from 'react';
import clsx from 'clsx';
import { TPost } from '../../types/common';
import styles from './news-card.module.scss';

type TNewsCardProps = {
  post: TPost;
  featured?: boolean;
};

const NewsCard = ({
  post,
  featured = false
}: TNewsCardProps) => {
  return (
    <div className={clsx(styles['card'], featured && styles['featured'])}>
      <div className={styles['thumbnail']}>
        <img
          src={post.thumbnail}
          alt={post.title}
        />
      </div>
      <div className={styles['body']}>
        <h5 className={styles['title']}>{post.title}</h5>
        <p className={styles['content']}>
          {post.content}
        </p>
        <div className={styles['meta']}>
          <div>
            <div className={styles['author']}>{post.meta.author}</div>
            <div className={styles['date']}>{post.meta.date}</div>
          </div>
          <a href={post.url} className={styles['read-more']}>Подробнее</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

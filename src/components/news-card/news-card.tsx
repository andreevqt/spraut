import React, { useState } from 'react';
import clsx from 'clsx';
import { TPost } from '../../types/common';
import LazyImg from '../lazy-img/lazy-img';
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
      {
        post.thumbnail && (
          <div className={styles['thumbnail']}>
            <LazyImg
              placeholder={{ width: 364, height: 282 }}
              src={post.thumbnail}
              alt={post.title}
            />
          </div>
        )
      }
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

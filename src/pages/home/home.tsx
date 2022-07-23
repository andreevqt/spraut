import React, { useCallback, useEffect, useState } from 'react';
import { TPost } from '../../types/common';
import Button from '../../components/button/button';
import Base from '../../layouts/base';
import NewsCard from '../../components/news-card/news-card';
import styles from './home.module.scss';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { listPosts } from '../../services/slices/posts';
import debounce from 'lodash.debounce';

const Home = () => {
  const { q, posts, isLoading, hasMore, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const listDebounced = useCallback(debounce(() => {
    dispatch(listPosts(true));
  }, 300), []);

  useEffect(() => {
    listDebounced();
  }, [q]);

  return (
    <Base>
      <div className={styles['news']}>
        {
          posts.map((post, idx) => idx === 0 ? (
            <div className={styles['featured']} key={idx}>
              <NewsCard post={post} featured />
            </div>
          ) : (
            <div className={styles['column']} key={idx}>
              <NewsCard post={post} />
            </div>
          ))
        }
      </div>
      <div className={styles['pagination']}>
        {
          hasMore && (
            <Button onClick={() => dispatch(listPosts())} outline>
              Загрузить еще
            </Button>
          )
        }
      </div>
    </Base>
  );
};

export default Home;

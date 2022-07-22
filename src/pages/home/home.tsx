import React, { useEffect, useState } from 'react';
import { TPost } from '../../types/common';
import Button from '../../components/button/button';
import Base from '../../layouts/base';
import NewsCard from '../../components/news-card/news-card';
import styles from './home.module.scss';
import * as api from '../../services/api';

const Home = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    api.posts.top().then((posts) => posts.splice(0, 4)).then(setPosts);
  }, []);

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
        <Button outline>Загрузить еще</Button>
      </div>
    </Base>
  );
};

export default Home;

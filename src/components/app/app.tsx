import React, { useEffect, useState } from 'react';
import { TPost } from '../../types/common';
import Button from '../button/button';
import Base from '../layouts/base';
import NewsCard from '../news-card/news-card';
import styles from './app.module.scss';
import * as api from '../../services/api';

const App = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    api.posts.top().then((posts) => posts.splice(0, 4)).then(setPosts);
  }, []);

  // const posts: TPost[] = [{
  //   title: 'Физики призвали закрыть темную материю',
  //   content: 'Новая работа в Symmetry сосредотачивает внимание на том, что наблюдаемые типичные галактические структуры, кажется, несовместимы с наличием темной материи в галактиках материи в галактиках материи в галактиках материи в галактиках материи в галактиках.',
  //   thumbnail: '/images/4a8cc210e12ff6d52f2557b0a6e729a1.jpg',
  //   url: '#',
  //   meta: {
  //     author: 'Автор',
  //     date: '01.01.2022'
  //   }
  // }, {
  //   title: 'Российский аналог SWIFT готов к тестированию',
  //   content: 'Новая работа в Symmetry сосредотачивает внимание на том, что наблюдаемые типичные галактические структуры, кажется, несовместимы с наличием темной материи в галактиках.',
  //   thumbnail: '/images/4a8cc210e12ff6d52f2557b0a6e729a1.jpg',
  //   url: '#',
  //   meta: {
  //     author: 'Автор',
  //     date: '01.01.2022'
  //   }
  // }, {
  //   title: 'Руй Витория назначен на пост тренера сборной Египта',
  //   content: 'Новая работа в Symmetry сосредотачивает внимание на том, что наблюдаемые типичные галактические структуры, кажется, несовместимы с наличием темной материи в галактиках.',
  //   thumbnail: '/images/ed6a361249e5c024605621447d5bae4b.jpg',
  //   url: '#',
  //   meta: {
  //     author: 'Автор',
  //     date: '01.01.2022'
  //   }
  // }, {
  //   title: 'Участок скоростного диаметра на юго‑востоке Москвы построили на 70%',
  //   content: 'Новая работа в Symmetry сосредотачивает внимание на том, что наблюдаемые типичные галактические структуры, кажется, несовместимы с наличием темной материи в галактиках.',
  //   thumbnail: '/images/4a8cc210e12ff6d52f2557b0a6e729a1.jpg',
  //   url: '#',
  //   meta: {
  //     author: 'Автор',
  //     date: '01.01.2022'
  //   }
  // }];

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

export default App;

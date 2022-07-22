import React from 'react';
import style from './content.module.scss';

type TContentProps = {
  children: React.ReactNode;
};

const Content = ({
  children
}: TContentProps) => {
  return (
    <main className={style['content']}>
      {children}
    </main>
  );
};

export default Content;

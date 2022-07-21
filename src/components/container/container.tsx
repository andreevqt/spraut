import React from 'react';
import styles from './container.module.scss';

type TContainerProps = {
  children?: React.ReactNode
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className={styles['container']}>
      {children}
    </div>
  );
};

export default Container;

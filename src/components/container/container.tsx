import clsx from 'clsx';
import React from 'react';
import styles from './container.module.scss';

type TContainerProps = {
  children?: React.ReactNode
  className?: string;
};

const Container = ({
  className,
  children
}: TContainerProps) => {
  return (
    <div className={clsx(styles['container'], className)}>
      {children}
    </div>
  );
};

export default Container;

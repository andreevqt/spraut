import clsx from 'clsx';
import React from 'react';
import styles from './menu.module.scss';

type TMenuProps = {
  className?: string;
  children: React.ReactNode;
};

const Menu = ({
  children,
  className
}: TMenuProps) => {
  return (
    <div className={clsx(styles['menu'], className)}>
      {children}
    </div>
  );
};

export default Menu;

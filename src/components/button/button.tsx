import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';
import Loader from '../../icons/loader';

type THtmlTypes = 'button' | 'submit' | 'reset';

type TSize = 'default' | 'fixed';

type TButtonProps = {
  onClick?: (e: React.SyntheticEvent) => void;
  className?: string;
  children: React.ReactNode;
  htmlType?: THtmlTypes;
  size?: TSize;
  isLoading?: boolean;
  outline?: boolean;
};

const Button = ({
  className,
  children,
  size = 'default',
  htmlType = 'button',
  onClick,
  outline = false,
  isLoading = false
}: TButtonProps) => {
  const classes = clsx(styles['button'], styles[size], outline && styles['outline'], className);
  return (
    <button
      type={htmlType}
      className={classes}
      onClick={onClick}
    >
      {
        isLoading && (
          <div className={styles['loader']}>
            <Loader />
          </div>
        )
      }
      {children}
    </button>
  );
};

export default Button;

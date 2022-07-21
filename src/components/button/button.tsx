import React from 'react';
import clsx from 'clsx';
import style from './button.module.scss';

type THtmlTypes = 'button' | 'submit' | 'reset';

type TButtonProps = {
  className?: string;
  htmlType?: THtmlTypes;
  label: string;
  outline?: boolean;
};

const Button = ({
  className,
  htmlType = 'button',
  label,
  outline = false
}: TButtonProps) => {
  return (
    <button type={htmlType} className={clsx(style['button'], outline && style['button--outline'], className)}>
      {label}
    </button>
  );
};

export default Button;

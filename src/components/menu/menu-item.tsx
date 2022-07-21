import React from 'react';
import clsx from 'clsx';
import stlyes from './menu-item.module.scss';

type TMenuItemProps = {
  to?: string;
  label: string;
  active?: boolean;
};

const MenuItem = ({
  to = '#',
  label,
  active = false
}: TMenuItemProps) => {
  return (
    <a
      href={to}
      className={clsx(stlyes['menu-item'], { [stlyes['menu-item--active']]: active })}
    >
      {label}
    </a>
  );
};

export default MenuItem;

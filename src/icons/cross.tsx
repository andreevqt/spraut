import React from 'react';
import { TIconProps } from '../types/common';

const Cross = ({
  className,
  height = '18px',
  width = '18px'
}: TIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 18 18"
    >
      <rect
        width="1.851"
        height="23.604"
        rx="0.926"
        transform="rotate(-45 1.58 .655)"
      ></rect>
      <rect
        width="1.851"
        height="23.604"
        rx="0.926"
        transform="rotate(45 8.345 20.148)"
      ></rect>
    </svg>
  );
};

export default Cross;

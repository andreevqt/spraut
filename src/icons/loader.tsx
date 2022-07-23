import React from 'react';
import { TIconProps } from '../types/common';

const Loader = ({
  className,
  height = '32',
  width = '32'
}: TIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path
        fill="#D8E3FE"
        d="M14.991 24.148a1 1 0 112 0v5a1 1 0 01-2 0v-5z"
      ></path>
      <path
        fill="#E4EDFF"
        d="M10.623 22.457a1 1 0 011.73 1.005L9.84 27.785a1 1 0 01-1.73-1.006l2.513-4.322z"
      ></path>
      <path
        fill="#fff"
        d="M8.195 3.503a1 1 0 111.729-1.006l2.516 4.321a1 1 0 11-1.729 1.006l-2.516-4.32zM3.419 9.113a1 1 0 111.05-1.702l4.255 2.624a1 1 0 11-1.05 1.703L3.42 9.113z"
      ></path>
      <path
        fill="#F4F8FF"
        d="M1.991 16.157a1 1 0 11.018-2l5 .044a1 1 0 01-.018 2l-5-.044z"
      ></path>
      <path
        fill="#EFF4FF"
        d="M7.804 18.861a1 1 0 111.03 1.715L4.548 23.15a1 1 0 11-1.03-1.714l4.286-2.575z"
      ></path>
      <path
        fill="#B4C9FF"
        d="M27.683 7.39a1 1 0 11.965 1.753l-4.38 2.41a1 1 0 11-.965-1.751l4.38-2.411z"
      ></path>
      <path
        fill="#BBCEFF"
        d="M29.991 14.16a1 1 0 01.026 2l-5 .065a1 1 0 01-.025-2l5-.064z"
      ></path>
      <path
        fill="#C4D5FF"
        d="M28.492 21.56a1 1 0 01-1.063 1.694l-4.236-2.658a1 1 0 011.063-1.694l4.236 2.658z"
      ></path>
      <path
        fill="#CDDBFF"
        d="M19.746 23.408a1 1 0 111.686-1.077l2.692 4.214a1 1 0 11-1.685 1.077l-2.693-4.214z"
      ></path>
    </svg>
  );
};

export default Loader;

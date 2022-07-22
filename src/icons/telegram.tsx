import React from 'react';
import { TIconProps } from '../types/common';

const Telegram = ({
  className,
  height = '30px',
  width = '30px'
}: TIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill="url(#paint0_linear_2_114)"
        d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"
      ></path>
      <path
        fill="#fff"
        d="M22.3 8.63l-2.677 13.507s-.375.937-1.406.486l-6.182-4.74-2.25-1.084L6 15.527s-.58-.205-.639-.656c-.058-.451.657-.691.657-.691l15.046-5.9c0-.007 1.237-.551 1.237.35z"
      ></path>
      <path
        fill="#D2E4F0"
        d="M11.555 21.984s-.182-.017-.405-.726c-.222-.71-1.365-4.46-1.365-4.46l9.088-5.77s.527-.317.504 0c0 0 .094.058-.188.316-.28.263-7.136 6.428-7.136 6.428"
      ></path>
      <path
        fill="#B5CFE4"
        d="M14.402 19.7l-2.443 2.232s-.193.146-.399.052l.47-4.142"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2_114"
          x1="15"
          x2="15"
          y1="0"
          y2="29.891"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41BCE7"></stop>
          <stop offset="1" stopColor="#22A6DC"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Telegram;

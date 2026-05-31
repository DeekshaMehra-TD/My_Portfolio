import React from 'react';

export const SparkleIcon = ({ className = '', style = {}, color = 'currentColor', width = 32, height = 32, ...props }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" fill={color}/>
  </svg>
);

export const HeartIcon = ({ className = '', style = {}, color = 'currentColor', width = 32, height = 32, ...props }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill={color}/>
  </svg>
);

export const StarIcon = ({ className = '', style = {}, color = 'currentColor', width = 32, height = 32, ...props }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={color}/>
  </svg>
);

export const FlowerIcon = ({ className = '', style = {}, color = 'currentColor', width = 40, height = 40, ...props }) => (
  <svg className={className} style={style} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#FCE4E6"/>
    <path d="M12 8C14.2091 8 16 6.20914 16 4C16 1.79086 14.2091 0 12 0C9.79086 0 8 1.79086 8 4C8 6.20914 9.79086 8 12 8Z" fill={color}/>
    <path d="M12 24C14.2091 24 16 22.2091 16 20C16 17.7909 14.2091 16 12 16C9.79086 16 8 17.7909 8 20C8 22.2091 9.79086 24 12 24Z" fill={color}/>
    <path d="M20 16C22.2091 16 24 14.2091 24 12C24 9.79086 22.2091 8 20 8C17.7909 8 16 9.79086 16 12C16 14.2091 17.7909 16 20 16Z" fill={color}/>
    <path d="M4 16C6.20914 16 8 14.2091 8 12C8 9.79086 6.20914 8 4 8C1.79086 8 0 9.79086 0 12C0 14.2091 1.79086 16 4 16Z" fill={color}/>
  </svg>
);

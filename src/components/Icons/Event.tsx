import * as React from 'react';

export interface EventIconProps {
  className?: string;
}

export const EventIcon: React.FC<EventIconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g id="Icons/Event/Black" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M17,12 L12,12 L12,17 L17,17 L17,12 Z M16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.89,3 3.01,3.9 3.01,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L18,3 L18,1 L16,1 Z M19,19 L5,19 L5,8 L19,8 L19,19 Z" id="Shape" fill="#000000" fillRule="nonzero" />
        <polygon id="Path" points="0 0 24 0 24 24 0 24" />
      </g>
    </svg>
  )
}

import * as React from 'react';

export interface ScheduleIconProps {
  className?: string;
}

export const ScheduleIcon: React.FC<ScheduleIconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g id="Icons/Schedule/Black" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M11.99,2 C6.47,2 2,6.48 2,12 C2,17.52 6.47,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 11.99,2 Z M12,20 C7.58,20 4,16.42 4,12 C4,7.58 7.58,4 12,4 C16.42,4 20,7.58 20,12 C20,16.42 16.42,20 12,20 Z" id="Shape" fill="#000000" fillRule="nonzero"></path>
        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
        <polygon id="Path" fill="#000000" fillRule="nonzero" points="12.5 7 11 7 11 13 16.25 16.15 17 14.92 12.5 12.25"></polygon>
      </g>
    </svg>
  )
}

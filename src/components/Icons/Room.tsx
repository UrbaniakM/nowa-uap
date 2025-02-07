import * as React from 'react';

export interface RoomIconProps {
  className?: string;
}

export const RoomIcon: React.FC<RoomIconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g id="Icons/Room/Black" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M12,2 C8.13,2 5,5.13 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.13 15.87,2 12,2 Z M12,11.5 C10.62,11.5 9.5,10.38 9.5,9 C9.5,7.62 10.62,6.5 12,6.5 C13.38,6.5 14.5,7.62 14.5,9 C14.5,10.38 13.38,11.5 12,11.5 Z" id="Shape" fill="#000000" fillRule="nonzero"></path>
        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
      </g>
    </svg>
  )
}

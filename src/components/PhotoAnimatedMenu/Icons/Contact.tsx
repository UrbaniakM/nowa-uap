import * as React from 'react';

export interface ContactAnimatedIconProps {
  className?: string;
}

export const ContactAnimatedIcon: React.FC<ContactAnimatedIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 L17,22 L17,20 L12,20 C7.66,20 4,16.34 4,12 C4,7.66 7.66,4 12,4 C16.34,4 20,7.66 20,12 L20,13.43 C20,14.22 19.29,15 18.5,15 C17.71,15 17,14.22 17,13.43 L17,12 C17,9.24 14.76,7 12,7 C9.24,7 7,9.24 7,12 C7,14.76 9.24,17 12,17 C13.38,17 14.64,16.44 15.54,15.53 C16.19,16.42 17.31,17 18.5,17 C20.47,17 22,15.4 22,13.43 L22,12 C22,6.48 17.52,2 12,2 Z M12,15 C10.34,15 9,13.66 9,12 C9,10.34 10.34,9 12,9 C13.66,9 15,10.34 15,12 C15,13.66 13.66,15 12,15 Z" id="Shape" fill="currentColor" fillRule="nonzero" />
    </svg>
  )
}



import * as React from 'react';

export interface YouTubeIconProps {
  className?: string;
}

export const YouTubeIcon: React.FC<YouTubeIconProps> = () => {
  return (
    <svg viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
      <g id="Social-Media/YouTube/Black" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M26.1533333,0.245500255 C21.348,-0.0824997454 10.6453333,-0.0811664121 5.84666667,0.245500255 C0.650666667,0.600166921 0.0386666667,3.73883359 0,12.0001669 C0.0386666667,20.2468336 0.645333333,23.3988336 5.84666667,23.7548336 C10.6466667,24.0815003 21.348,24.0828336 26.1533333,23.7548336 C31.3493333,23.4001669 31.9613333,20.2615003 32,12.0001669 C31.9613333,3.75350025 31.3546667,0.601500255 26.1533333,0.245500255 Z M12,17.3335003 L12,6.66683359 L22.6666667,11.9908336 L12,17.3335003 L12,17.3335003 Z" id="Shape" fill="currentColor" fillRule="nonzero" />
      </g>
    </svg>
  )
}
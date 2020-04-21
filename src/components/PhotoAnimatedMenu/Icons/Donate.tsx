import * as React from 'react';
import { keyframes, css } from "styled-components";

const heartAnimationT = keyframes`
  0% { transform: translate(0px,0px); animation-timing-function: cubic-bezier(0.42,0,1,1); } 
  38.4615% { transform: translate(12px,12px); } 
  100% { transform: translate(12px,12px); } }
`;
const heartAnimationD = keyframes`
  0% { d: path('M12,21.35C12,21.35,10.55,20.03,10.55,20.03C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3C9.24,3,10.91,3.81,12,5.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5C22,12.28,18.6,15.36,13.45,20.04C13.45,20.04,12,21.35,12,21.35Z'); animation-timing-function: cubic-bezier(0.42,0,1,1); } 
  38.4615% { d: path('M0,10C-2.25332,10,-4.33257,9.25472,-6.0047,7.9972C-8.43092,6.17257,-10,3.26953,-10,0C-10,-3.26953,-8.43092,-6.17257,-6.0047,-7.9972C-4.33257,-9.25472,-2.25332,-10,0,-10C2.25332,-10,4.33257,-9.25472,6.0047,-7.9972C8.43092,-6.17257,10,-3.26953,10,0C10,3.26953,8.43092,6.17257,6.0047,7.9972C4.33257,9.25472,2.25332,10,0,10Z'); } 
  100% { d: path('M0,10C-2.25332,10,-4.33257,9.25472,-6.0047,7.9972C-8.43092,6.17257,-10,3.26953,-10,0C-10,-3.26953,-8.43092,-6.17257,-6.0047,-7.9972C-4.33257,-9.25472,-2.25332,-10,0,-10C2.25332,-10,4.33257,-9.25472,6.0047,-7.9972C8.43092,-6.17257,10,-3.26953,10,0C10,3.26953,8.43092,6.17257,6.0047,7.9972C4.33257,9.25472,2.25332,10,0,10Z'); } }
`;

const heartAnimationStyles = css`
  animation: 1.3s linear both ${heartAnimationT}, 1.3s linear both ${heartAnimationD};
`

const insideCircleAnimationT = keyframes`
  0% { transform: translate(11.5px,11.0172px) scale(1,1) translate(-3.092px,-4.99379px); } 
  38.4615% { transform: translate(11.5px,11.0172px) scale(1,1) translate(-3.092px,-4.99379px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 
  53.8461% { transform: translate(11.5px,11.0172px) scale(1.1,1.1) translate(-3.092px,-4.99379px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 
  69.2307% { transform: translate(11.5px,11.0172px) scale(1,1) translate(-3.092px,-4.99379px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 
  84.6153% { transform: translate(11.5px,11.0172px) scale(1.1,1.1) translate(-3.092px,-4.99379px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 
  100% { transform: translate(11.5px,11.0172px) scale(1,1) translate(-3.092px,-4.99379px); } }
`;
const insideCircleAnimationO = keyframes`
  0% { opacity: 0; animation-timing-function: steps(1); } 
  38.4615% { opacity: 1; } 
  100% { opacity: 1; } }
`;

const insideCircleStyles = css`
  animation: 1.3s linear both ${insideCircleAnimationT}, 1.3s linear both ${insideCircleAnimationO};
`

export interface DonateAnimatedIconProps {
  className?: string;
}

export const DonateAnimatedIcon: React.FC<DonateAnimatedIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path id="ebdx7h5226vx3v0ke7ssajk8" d="M12,21.35L10.55,20.03C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3C9.24,3,10.91,3.81,12,5.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5C22,12.28,18.6,15.36,13.45,20.04Z" fill="currentColor" stroke="none" css={heartAnimationStyles} />
      <path id="h8t7pwnt4lbo9dkze13c9cxg" d="M4.44028,11.8731L4.44028,10.4249C5.87476,10.1076,6.592,9.07314,6.592,7.73517C6.592,5.21104,2.97821,5.18346,2.97821,3.98346C2.97821,3.41793,3.30924,3.15588,3.90236,3.15588C4.46786,3.15588,4.97822,3.39036,5.43338,3.81793L6.50924,2.64552C5.97131,2.05242,5.30924,1.61104,4.44028,1.47312L4.44028,0.08L3.03338,0.08L3.03338,1.51448C1.72304,1.77655,0.936828,2.72828,0.936828,4.0938C0.936828,6.5076,4.55062,6.63174,4.55062,7.91448C4.55062,8.48,4.21958,8.79723,3.47476,8.79723C2.84028,8.79723,2.23338,8.63172,1.54372,8.05242L0.592,9.36277C1.26786,10.0662,2.15062,10.4111,3.03338,10.4938L3.03338,11.8731L4.44028,11.8731Z" fill="#000" fillRule="nonzero" fillOpacity="1" opacity="0" transform="translate(11.5,11.0172) translate(-3.092,-4.99379)" css={insideCircleStyles} />
    </svg>
  )
}



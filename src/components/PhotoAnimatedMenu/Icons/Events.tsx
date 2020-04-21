import * as React from 'react';
import { keyframes, css } from "styled-components";

const groupAnimation = keyframes`
  0% { transform: translate(12px,12px) rotate(0deg) translate(-7px,-10px); } 
  55.5555% { transform: translate(12px,12px) rotate(0deg) translate(-7px,-10px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 
  66.6666% { transform: translate(12px,12px) rotate(8deg) translate(-7px,-10px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 
  88.8888% { transform: translate(12px,12px) rotate(-5deg) translate(-7px,-10px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 
  100% { transform: translate(12px,12px) rotate(0deg) translate(-7px,-10px); }
`;

const groupAnimationStyles = css`
  animation: 0.9s linear both ${groupAnimation};
`;

const outsideAnimationT = keyframes`
  0% { transform: translate(-2px,-1px); animation-timing-function: cubic-bezier(0,0,0.58,1); } 
  44.4444% { transform: translate(-5px,-2px); } 
  100% { transform: translate(-5px,-2px); }
`;
const outsideAnimationD = keyframes`
  0% { d: path('M9,20C9,20,2,20,2,20C0.89,20,0,19.1,0,18C0,18,0.01,4,0.01,4C0.01,2.9,0.89,2,2,2C2,2,3,2,3,2C3,2,3,0,3,0C3,0,5,0,5,0C5,0,5,2,5,2C5,2,8.99713,2,8.99713,2C8.99713,2,13,2,13,2C13,2,13,0,13,0C13,0,15,0,15,0C15,0,15,2,15,2C15,2,16,2,16,2C17.1,2,18,2.9,18,4C18,4,18,18,18,18C18,19.1,17.1,20,16,20C16,20,9,20,9,20Z'); animation-timing-function: cubic-bezier(0,0,0.58,1); } 
  44.4444% { d: path('M12,22C12,22,11.6673,21.6317,11.147,21.0013C10.7233,20.4879,10.1753,19.8008,9.58112,18.9972C7.55782,16.2606,5,12.1736,5,9C5,8.30512,5.10091,7.63411,5.28889,7.00078C5.45762,6.43236,5.69648,5.89429,5.99549,5.39659C6.27794,4.92646,6.61406,4.49234,6.99541,4.10267C7.30118,3.79023,7.63602,3.50638,7.9956,3.25544C8.31317,3.03382,8.65003,2.83788,9.00319,2.67062C9.91132,2.24051,10.9272,2,12,2C13.0743,2,14.0915,2.24118,15.0006,2.67241C15.3524,2.83928,15.688,3.03461,16.0044,3.25544C16.3624,3.50525,16.6959,3.78769,17.0005,4.09847C17.382,4.48764,17.7183,4.92125,18.0011,5.39089C18.3024,5.89129,18.5428,6.43258,18.7123,7.00458C18.8995,7.63679,19,8.30651,19,9C19,12.1736,16.4422,16.2606,14.4189,18.9972C13.8247,19.8008,13.2767,20.4879,12.853,21.0013C12.3327,21.6317,12,22,12,22Z'); } 
  100% { d: path('M12,22C12,22,11.6673,21.6317,11.147,21.0013C10.7233,20.4879,10.1753,19.8008,9.58112,18.9972C7.55782,16.2606,5,12.1736,5,9C5,8.30512,5.10091,7.63411,5.28889,7.00078C5.45762,6.43236,5.69648,5.89429,5.99549,5.39659C6.27794,4.92646,6.61406,4.49234,6.99541,4.10267C7.30118,3.79023,7.63602,3.50638,7.9956,3.25544C8.31317,3.03382,8.65003,2.83788,9.00319,2.67062C9.91132,2.24051,10.9272,2,12,2C13.0743,2,14.0915,2.24118,15.0006,2.67241C15.3524,2.83928,15.688,3.03461,16.0044,3.25544C16.3624,3.50525,16.6959,3.78769,17.0005,4.09847C17.382,4.48764,17.7183,4.92125,18.0011,5.39089C18.3024,5.89129,18.5428,6.43258,18.7123,7.00458C18.8995,7.63679,19,8.30651,19,9C19,12.1736,16.4422,16.2606,14.4189,18.9972C13.8247,19.8008,13.2767,20.4879,12.853,21.0013C12.3327,21.6317,12,22,12,22Z'); }
`;

const outisdeAnimationStyles = css`
  animation: 0.9s linear both ${outsideAnimationT}, 0.9s linear both ${outsideAnimationD};
`;

const insideAnimationT = keyframes`
  0% { transform: translate(0px,6px); animation-timing-function: cubic-bezier(0,0,0.58,1); } 
  44.4444% { transform: translate(7px,7px); } 
  100% { transform: translate(7px,7px); }
`;
const insideAnimationD = keyframes`
  0% { d: path('M14,0C14,0,14,11,14,11C14,11,0,11,0,11C0,11,0,0,0,0C0,0,14,0,14,0Z'); animation-timing-function: cubic-bezier(0,0,0.58,1); } 
  44.4444% { d: path('M2.5,0C2.5,1.38071,1.38071,2.5,0,2.5C-1.38071,2.5,-2.5,1.38071,-2.5,0C-2.5,-1.38071,-1.38071,-2.5,0,-2.5C1.38071,-2.5,2.5,-1.38071,2.5,0Z'); } 
  100% { d: path('M2.5,0C2.5,1.38071,1.38071,2.5,0,2.5C-1.38071,2.5,-2.5,1.38071,-2.5,0C-2.5,-1.38071,-1.38071,-2.5,0,-2.5C1.38071,-2.5,2.5,-1.38071,2.5,0Z'); }
`;

const insideAnimationStyles = css`
  animation: 0.9s linear both ${insideAnimationT}, 0.9s linear both ${insideAnimationD};
`;

const rectangleAnimationT = keyframes`
  0% { transform: translate(9.5px,12.5px) scale(1,1) translate(-2.5px,-2.5px); animation-timing-function: cubic-bezier(0,0,0.58,1); } 
  44.4444% { transform: translate(7px,7px) scale(0,0) translate(-2.5px,-2.5px); } 
  100% { transform: translate(7px,7px) scale(0,0) translate(-2.5px,-2.5px); }
`;
const rectangleAnimationD = keyframes`
  0% { d: path('M0,0C0,0,5,0,5,0C5,0,5,5,5,5C5,5,0,5,0,5C0,5,0,0,0,0Z'); animation-timing-function: cubic-bezier(0,0,0.58,1); } 
  44.4444% { d: path('M0,-2.5C1.38071,-2.5,2.5,-1.38071,2.5,0C2.5,1.38071,1.38071,2.5,0,2.5C-1.38071,2.5,-2.5,1.38071,-2.5,0C-2.5,-1.38071,-1.38071,-2.5,0,-2.5Z'); } 
  100% { d: path('M0,-2.5C1.38071,-2.5,2.5,-1.38071,2.5,0C2.5,1.38071,1.38071,2.5,0,2.5C-1.38071,2.5,-2.5,1.38071,-2.5,0C-2.5,-1.38071,-1.38071,-2.5,0,-2.5Z'); }
`;

const rectangleAnimationStyles = css`
  animation: 0.9s linear both ${rectangleAnimationT}, 0.9s linear both ${rectangleAnimationD};
`

export interface EventsAnimatedIconProps {
  className?: string;
}

export const EventsAnimatedIcon: React.FC<EventsAnimatedIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <g id="ac7q11qb6ghe7z1gywur3f17" transform="translate(12,12) translate(-7,-10)" css={groupAnimationStyles}>
        <path id="bymxudvqi5e3cnirt42srnec" d="M9,20L2,20C0.89,20,0,19.1,0,18L0.01,4C0.01,2.9,0.89,2,2,2L3,2L3,0L5,0L5,2L8.99713,2L13,2L13,0L15,0L15,2L16,2C17.1,2,18,2.9,18,4L18,18C18,19.1,17.1,20,16,20Z" fill="currentColor" filter="none" transform="translate(7,10) translate(-9,-11)" css={outisdeAnimationStyles} />
        <path id="qvnagrzc49ttzlzkoawhvixw" fill="#000" stroke="none" d="M14,0L14,11L0,11L0,0Z" transform="translate(0,6)" css={insideAnimationStyles} />
        <path id="qn05mgdxcfukjwq2h7fjr61e" fill="currentColor" stroke="none" d="M0,0L5,0L5,5L0,5Z" transform="translate(9.5,12.5) translate(-2.5,-2.5)" css={rectangleAnimationStyles} />
      </g>
    </svg>
  )
}



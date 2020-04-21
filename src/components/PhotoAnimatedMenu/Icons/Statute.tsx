import * as React from 'react';
import { keyframes, css, Keyframes } from "styled-components";

const linesGroupAnimation = keyframes`
  0% { transform: translate(16.5px,12.91px) scale(1,1) translate(-16.5px,-12.91px); } 
  42.8571% { transform: translate(16.5px,12.91px) scale(1,1) translate(-16.5px,-12.91px); } 
  57.1428% { transform: translate(16.5px,12.91px) scale(1.05,1.05) translate(-16.5px,-12.91px); } 
  71.4285% { transform: translate(16.5px,12.91px) scale(1,1) translate(-16.5px,-12.91px); } 
  85.7142% { transform: translate(16.5px,12.91px) scale(1.05,1.05) translate(-16.5px,-12.91px); } 
  100% { transform: translate(16.5px,12.91px) scale(1,1) translate(-16.5px,-12.91px); }
`;

const linesGroupAnimationStyles = css`
  animation: 1.4s linear both ${linesGroupAnimation};
`

const firstMaskAnimation = keyframes`
  0% { width: 0px; } 
  28.5714% { width: 0px; } 
  42.8571% { width: 7px; } 
  100% { width: 7px; }
`;

const secondMaskAnimation = keyframes`
  0% { width: 0px; } 
  14.2857% { width: 0px; } 
  28.5714% { width: 7px; } 
  100% { width: 7px; }
`;

const thirdMaskAnimation = keyframes`
  0% { width: 0px; } 
  14.2857% { width: 7px; }
  100% { width: 7px; }
`;

const maskAnimationStyles = (animationClass: Keyframes) => css`
  animation: 1.4s linear both ${animationClass};
`;

export interface StatuteAnimatedIconProps {
  className?: string;
}

export const StatuteAnimatedIcon: React.FC<StatuteAnimatedIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <defs>
        <mask id="p0muc22ac49xqi6xl08nwm4q">
          <rect width="0" height="4" fill="#ffffff" stroke="none" transform="translate(16.5,15.5) translate(-3.5,-2)" css={maskAnimationStyles(firstMaskAnimation)} />
        </mask>
        <mask id="v5b0cm22jrt1juov9vfxbt4y">
          <rect width="0" height="4" fill="#ffffff" stroke="none" transform="translate(16.5,13) translate(-3.5,-2)" css={maskAnimationStyles(secondMaskAnimation)} />
        </mask>
        <mask id="a7rg3y8ocnmsf7h6uezk94su">
          <rect width="0" height="4" fill="#ffffff" stroke="none" transform="translate(16.5,10.25) translate(-3.5,-2)" css={maskAnimationStyles(thirdMaskAnimation)} />
        </mask>
      </defs>
      <g id="ee5p2fn7s62pz6id5jg38lbr" fill="currentColor">
        <path id="ikzglpw4pyklwb72n6s40dr6" d="M21,5C19.89,4.65,18.67,4.5,17.5,4.5C15.55,4.5,13.45,4.9,12,6C10.55,4.9,8.45,4.5,6.5,4.5C4.55,4.5,2.45,4.9,1,6L1,20.65C1,20.9,1.25,21.15,1.5,21.15C1.6,21.15,1.65,21.1,1.75,21.1C3.1,20.45,5.05,20,6.5,20C8.45,20,10.55,20.4,12,21.5C13.35,20.65,15.8,20,17.5,20C19.15,20,20.85,20.3,22.25,21.05C22.35,21.1,22.4,21.1,22.5,21.1C22.75,21.1,23,20.85,23,20.6L23,6C22.4,5.55,21.75,5.25,21,5ZM21,18.5C19.9,18.15,18.7,18,17.5,18C15.8,18,13.35,18.65,12,19.5L12,8C13.35,7.15,15.8,6.5,17.5,6.5C18.7,6.5,19.9,6.65,21,7L21,18.5Z" />
        <g id="x3v1vem115md3xkf4zxrd99g" transform="translate(16.5,12.91) translate(-16.5,-12.91)" css={linesGroupAnimationStyles}>
          <path id="pd0svsfvk18zbrdshy4x5bdl" d="M17.5,14.33C15.8,14.33,14.26,14.62,13,15.16L13,16.82C14.13,16.18,15.7,15.83,17.5,15.83C18.38,15.83,19.23,15.92,20,16.09L20,14.57C19.21,14.41,18.36,14.33,17.5,14.33Z" mask="url(#p0muc22ac49xqi6xl08nwm4q)" />
          <path id="kgqvlo97993kz92pbe3apom1" d="M13,12.49L13,14.15C14.13,13.51,15.7,13.16,17.5,13.16C18.38,13.16,19.23,13.25,20,13.42L20,11.9C19.21,11.75,18.36,11.66,17.5,11.66C15.8,11.66,14.26,11.96,13,12.49Z" mask="url(#v5b0cm22jrt1juov9vfxbt4y)" />
          <path id="hygqeotinhsabado710gcbrt" d="M17.5,10.5C18.38,10.5,19.23,10.59,20,10.76L20,9.24C19.21,9.09,18.36,9,17.5,9C15.8,9,14.26,9.29,13,9.83L13,11.49C14.13,10.85,15.7,10.5,17.5,10.5Z" mask="url(#a7rg3y8ocnmsf7h6uezk94su)" />
        </g>
      </g>
    </svg>
  )
}



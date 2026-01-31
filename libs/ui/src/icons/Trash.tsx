import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <g clipPath="url(#trash_svg__a)" filter="url(#trash_svg__b)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M25.11 12.584v12.522c0 1.89-1.523 3.42-3.427 3.42H10.318a3.42 3.42 0 0 1-3.427-3.42V12.584zm-2.278 0v12.524c0 .63-.519 1.14-1.14 1.14H10.31c-.631 0-1.141-.519-1.141-1.14V12.584zM12.584 6.89a1.14 1.14 0 0 1 1.128-1.138h4.576c.623 0 1.128.505 1.128 1.138a1.14 1.14 0 0 1-1.128 1.139h-4.576a1.13 1.13 0 0 1-1.128-1.139m0 7.968c0-.628.505-1.136 1.139-1.136.628 0 1.138.516 1.138 1.136v6.839c0 .627-.505 1.135-1.138 1.135a1.14 1.14 0 0 1-1.14-1.135zm4.555 0c0-.628.505-1.136 1.138-1.136.629 0 1.14.516 1.14 1.136v6.839c0 .627-.506 1.135-1.14 1.135a1.14 1.14 0 0 1-1.138-1.135zm-6.833-6.83H5.742c-.61 0-1.13.511-1.13 1.14 0 .633.506 1.138 1.13 1.138h20.516c.61 0 1.13-.51 1.13-1.138 0-.633-.506-1.14-1.13-1.14h-4.564V6.89a3.42 3.42 0 0 0-3.417-3.416h-4.553a3.42 3.42 0 0 0-3.417 3.416z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="trash_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
      <filter
        id="trash_svg__b"
        width={43.758}
        height={46.035}
        x={-5.879}
        y={-6.493}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.525} />
        <feGaussianBlur stdDeviation={5.246} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_13_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_13_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgTrash;

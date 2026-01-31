import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M30.335 9.055c.277.267.431.622.431.99 0 .369-.154.723-.431.99L18.132 22.62c-.269.26-.593.466-.952.607a3.1 3.1 0 0 1-2.27 0 2.9 2.9 0 0 1-.952-.607L1.665 10.952a1.354 1.354 0 0 1-.015-1.967c.134-.133.296-.24.476-.313a1.55 1.55 0 0 1 1.147-.007c.182.07.346.175.481.306L15.002 19.65c.134.13.296.233.475.304a1.55 1.55 0 0 0 1.137 0c.18-.07.341-.174.476-.304L28.248 9.057q.204-.196.476-.304a1.55 1.55 0 0 1 1.135 0q.272.106.476.302"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrow;

import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTickMark = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.752 15.601 4.521-.06a16.8 16.8 0 0 1 4.655 3.96c3.48-5.772 7.48-10.5 11.875-14.441h3.445c-6.146 6.827-11.161 14.138-15.173 21.88-2.144-4.599-5.145-8.47-9.323-11.339"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTickMark;

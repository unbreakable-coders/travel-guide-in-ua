import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.086 4.643c.288-.883 1.54-.883 1.828 0l2.321 7.124a.96.96 0 0 0 .914.662h7.513c.93 0 1.317 1.188.565 1.733l-6.079 4.403a.96.96 0 0 0-.349 1.071l2.322 7.125c.288.882-.725 1.616-1.478 1.07l-6.078-4.402a.96.96 0 0 0-1.13 0l-6.078 4.403c-.753.545-1.766-.189-1.478-1.071l2.322-7.125a.96.96 0 0 0-.35-1.07l-6.077-4.404c-.753-.545-.366-1.733.564-1.733h7.513a.96.96 0 0 0 .914-.662z"
    />
  </svg>
);
export default SvgStar;

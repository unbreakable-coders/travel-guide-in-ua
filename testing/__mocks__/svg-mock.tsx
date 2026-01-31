import React from 'react';

const SVGMock = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => <svg ref={ref} {...props} />
);

SVGMock.displayName = 'SVGMock';

export default SVGMock;

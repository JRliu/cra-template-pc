/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const Iconzhankai: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1433 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 144.7936l686.8992 686.8992L1373.5936 144.7936 1228.8 0 686.8992 542.1056 144.7936 0z"
        fill={getIconColor(color, 0, '#979797')}
      />
    </svg>
  );
};

Iconzhankai.defaultProps = {
  size: 18,
};

export default Iconzhankai;

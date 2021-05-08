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

const Iconhuanyuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M304.192 66.432l62.4 14.4-10.496 45.44a416 416 0 1 1-259.84 400.704L96 512h64a352 352 0 1 0 225.088-328.448l53.44 12.416-14.4 62.336-155.904-35.968 35.968-155.904z"
        fill={getIconColor(color, 0, '#8C8C8C')}
      />
    </svg>
  );
};

Iconhuanyuan.defaultProps = {
  size: 18,
};

export default Iconhuanyuan;

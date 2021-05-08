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

const Iconguanbi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M795.968 139.648l90.496 90.496L615.04 501.696l271.488 271.488-90.496 90.496-271.488-271.488-271.552 271.488-90.496-90.496L433.92 501.696 162.432 230.144l90.496-90.496 271.552 271.552z"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
    </svg>
  );
};

Iconguanbi.defaultProps = {
  size: 18,
};

export default Iconguanbi;

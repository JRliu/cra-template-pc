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

const Iconqingchu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m183.168 268.48L512 451.648 328.832 268.48a42.624 42.624 0 1 0-60.352 60.352L451.648 512l-183.168 183.168a42.624 42.624 0 1 0 60.352 60.288L512 572.288l183.168 183.168a42.56 42.56 0 0 0 60.288 0 42.624 42.624 0 0 0 0-60.288L572.352 512l183.104-183.168a42.624 42.624 0 1 0-60.288-60.352z"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
    </svg>
  );
};

Iconqingchu.defaultProps = {
  size: 18,
};

export default Iconqingchu;

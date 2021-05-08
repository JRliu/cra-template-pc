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

const Iconyouxiu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M832.448 435.648H627.968c79.232-292.608-54.528-307.52-54.528-307.52-56.768 0-44.992 44.8-49.28 52.288 0 143.104-152 255.232-152 255.232v405.76c0 40.064 54.592 54.464 76.032 54.464h307.2c28.864 0 52.48-75.776 52.48-75.776 75.968-258.432 75.968-335.36 75.968-335.36 0-53.376-51.392-49.088-51.392-49.088z m-544.192 0.128H165.888c-25.344 0-25.728 24.832-25.728 24.832l25.28 409.216c0 26.048 26.112 26.048 26.112 26.048H297.6c22.08 0 21.888-17.216 21.888-17.216V466.816c0-31.424-31.168-31.04-31.168-31.04z"
        fill={getIconColor(color, 0, '#15BA89')}
      />
    </svg>
  );
};

Iconyouxiu.defaultProps = {
  size: 18,
};

export default Iconyouxiu;

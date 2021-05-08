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

const Iconshouqi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1433 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 686.8992L686.8992 0l686.6944 686.8992L1228.8 831.488 686.8992 289.5872 144.7936 831.6928z"
        fill={getIconColor(color, 0, '#979797')}
      />
    </svg>
  );
};

Iconshouqi.defaultProps = {
  size: 18,
};

export default Iconshouqi;

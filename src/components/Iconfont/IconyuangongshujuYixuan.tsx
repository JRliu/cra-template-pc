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

const IconyuangongshujuYixuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1102 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M493.725538 227.879385L44.740923 20.637538A31.507692 31.507692 0 0 0 0 49.230769v718.375385a31.507692 31.507692 0 0 0 18.274462 28.514461l448.984615 207.241847a31.507692 31.507692 0 0 0 44.740923-28.593231v-718.375385a31.507692 31.507692 0 0 0-18.274462-28.514461z"
        fill={getIconColor(color, 0, '#2C77F4')}
      />
      <path
        d="M609.043692 227.879385l448.984616-207.241847A31.507692 31.507692 0 0 1 1102.769231 49.230769v718.375385a31.507692 31.507692 0 0 1-18.274462 28.514461l-448.984615 207.241847a31.507692 31.507692 0 0 1-44.740923-28.593231v-718.375385a31.507692 31.507692 0 0 1 18.274461-28.514461z"
        fill={getIconColor(color, 1, '#A7D1FF')}
      />
    </svg>
  );
};

IconyuangongshujuYixuan.defaultProps = {
  size: 18,
};

export default IconyuangongshujuYixuan;

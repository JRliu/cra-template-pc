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

const IconmendianshujuYixuanbeifen: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M0 950.857143h1024v73.142857H0z"
        fill={getIconColor(color, 0, '#A7D1FF')}
      />
      <path
        d="M102.4 0h672.914286c16.091429 0 29.257143 13.165714 29.257143 29.257143V950.857143H73.142857V29.257143c0-16.091429 13.165714-29.257143 29.257143-29.257143z"
        fill={getIconColor(color, 1, '#2C77F4')}
      />
      <path
        d="M292.571429 219.428571h292.571428v73.142858H292.571429zM394.971429 731.428571h87.771428c16.091429 0 29.257143 13.165714 29.257143 29.257143V950.857143H365.714286v-190.171429c0-16.091429 13.165714-29.257143 29.257143-29.257143z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <path
        d="M804.571429 292.571429h117.028571c16.091429 0 29.257143 13.165714 29.257143 29.257142V950.857143h-146.285714V292.571429z"
        fill={getIconColor(color, 3, '#A7D1FF')}
      />
    </svg>
  );
};

IconmendianshujuYixuanbeifen.defaultProps = {
  size: 18,
};

export default IconmendianshujuYixuanbeifen;

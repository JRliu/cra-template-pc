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

const IconpeizhiguanliYixuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M29.257143 950.857143H1024v43.885714a29.257143 29.257143 0 0 1-29.257143 29.257143H29.257143a29.257143 29.257143 0 0 1-29.257143-29.257143v-14.628571c0-16.091429 13.165714-29.257143 29.257143-29.257143z"
        fill={getIconColor(color, 0, '#A7D1FF')}
      />
      <path
        d="M102.4 0h746.057143c16.091429 0 29.257143 13.165714 29.257143 29.257143V950.857143H73.142857V29.257143c0-16.091429 13.165714-29.257143 29.257143-29.257143z"
        fill={getIconColor(color, 1, '#2C77F4')}
      />
      <path
        d="M877.714286 292.571429h117.028571c16.091429 0 29.257143 13.165714 29.257143 29.257142V950.857143h-146.285714V292.571429z"
        fill={getIconColor(color, 2, '#A7D1FF')}
      />
      <path
        d="M475.428571 146.285714l96.402286 96.402286h149.650286v149.650286L804.571429 475.428571 721.481143 558.518857v149.650286H571.830857L475.428571 804.571429 379.026286 708.169143H256V585.142857L146.285714 475.428571 256 365.714286V242.688h123.026286L475.428571 146.285714z m3.291429 162.889143c-94.134857 0-166.180571 72.045714-166.180571 166.253714 0 94.208 72.045714 166.253714 166.180571 166.253715 94.208 0 166.253714-72.045714 166.253714-166.253715 0-94.208-72.045714-166.253714-166.253714-166.253714z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
      <path
        d="M475.428571 538.112a61.586286 61.586286 0 0 0 62.683429-62.683429 61.586286 61.586286 0 0 0-62.683429-62.683428 61.586286 61.586286 0 0 0-62.683428 62.683428c0 35.547429 27.136 62.683429 62.683428 62.683429z"
        fill={getIconColor(color, 4, '#CCCCCC')}
      />
    </svg>
  );
};

IconpeizhiguanliYixuan.defaultProps = {
  size: 18,
};

export default IconpeizhiguanliYixuan;

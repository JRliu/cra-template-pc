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

const IconshujudaoruYixuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M884.370286 239.469714l102.4 307.2a29.257143 29.257143 0 0 1-27.794286 38.473143h-189.220571a29.257143 29.257143 0 0 0-27.794286 20.041143l-59.830857 179.346286a29.257143 29.257143 0 0 1-27.794286 20.041143h-284.525714a29.257143 29.257143 0 0 1-27.721143-20.041143L282.331429 605.184A29.257143 29.257143 0 0 0 254.537143 585.142857H65.024a29.257143 29.257143 0 0 1-27.794286-38.546286l102.4-307.2A29.257143 29.257143 0 0 1 167.424 219.428571h689.298286a29.257143 29.257143 0 0 1 27.794285 20.041143z"
        fill={getIconColor(color, 0, '#A7D1FF')}
      />
      <path
        d="M1024 687.542857v307.2a29.257143 29.257143 0 0 1-29.257143 29.257143H29.257143a29.257143 29.257143 0 0 1-29.257143-29.257143V687.542857c0-16.091429 13.165714-29.257143 29.257143-29.257143h169.106286a29.257143 29.257143 0 0 1 27.794285 20.041143l59.757715 179.346286a29.257143 29.257143 0 0 0 27.794285 20.041143h396.653715a29.257143 29.257143 0 0 0 27.794285-20.041143l59.757715-179.346286a29.257143 29.257143 0 0 1 27.794285-20.041143H994.742857c16.091429 0 29.257143 13.165714 29.257143 29.257143zM438.857143 0h146.285714v146.285714h73.142857L512 292.571429 365.714286 146.285714h73.142857V0z"
        fill={getIconColor(color, 1, '#2C77F4')}
      />
    </svg>
  );
};

IconshujudaoruYixuan.defaultProps = {
  size: 18,
};

export default IconshujudaoruYixuan;

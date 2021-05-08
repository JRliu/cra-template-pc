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

const Iconbianji: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M461.092571 29.549714l313.782858 187.099429-370.688 656.091428-279.259429 93.622858-37.010286-268.580572L461.092571 29.549714z m440.32 861.915429v73.142857h-435.2v-73.142857h435.2zM168.96 750.006857l16.384 119.003429 119.003429-40.009143-135.387429-78.994286z m235.812571-469.650286l-220.16 394.166858 186.148572 108.470857 219.648-388.827429-185.636572-113.810286zM488.228571 130.925714l-47.762285 85.504 186.002285 113.956572 49.444572-87.478857L488.228571 130.925714z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </svg>
  );
};

Iconbianji.defaultProps = {
  size: 18,
};

export default Iconbianji;

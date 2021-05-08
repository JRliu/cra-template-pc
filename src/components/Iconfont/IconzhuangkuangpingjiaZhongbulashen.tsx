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

const IconzhuangkuangpingjiaZhongbulashen: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M431.104 22.716632v981.719579H377.317053V22.743579h53.786947z m215.578947 0v981.719579H592.896V22.743579h53.786947z"
        fill={getIconColor(color, 0, '#EBE3D1')}
      />
    </svg>
  );
};

IconzhuangkuangpingjiaZhongbulashen.defaultProps = {
  size: 18,
};

export default IconzhuangkuangpingjiaZhongbulashen;

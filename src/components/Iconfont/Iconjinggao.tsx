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

const Iconjinggao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M560.192 98.176c16.192 9.28 29.504 23.04 38.528 39.68l327.424 606.464c26.624 49.28 9.344 111.424-38.528 138.88-14.72 8.32-31.36 12.8-48.192 12.8H184.576c-54.848 0-99.2-45.696-99.2-102.08 0-17.344 4.224-34.432 12.416-49.6l327.488-606.464a97.792 97.792 0 0 1 134.912-39.68z m-48.32 558.848a49.984 49.984 0 0 0-37.504 14.976c-11.136 10.048-16 22.912-16 38.592 0 15.744 4.864 28.608 16 38.592a50.56 50.56 0 0 0 37.504 15.744 55.488 55.488 0 0 0 38.848-15.04 55.296 55.296 0 0 0 15.36-39.296 53.568 53.568 0 0 0-15.36-38.592 54.336 54.336 0 0 0-38.848-14.976z m47.232-316.992H465.28l17.344 278.4h59.008l17.408-278.4z"
        fill={getIconColor(color, 0, '#F42135')}
      />
    </svg>
  );
};

Iconjinggao.defaultProps = {
  size: 18,
};

export default Iconjinggao;

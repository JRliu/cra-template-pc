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

const IconzhuangkuangpingjiaDibujiaocha: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 33060 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M32563.2 1015.515429c136.045714 0 247.954286-103.189943 261.909943-235.52a263.460571 263.460571 0 0 0 235.402971-254.039772V0.058514h-58.397257v518.144a204.917029 204.917029 0 0 1-175.659886 202.810515V0.058514h-58.397257v723.002515H292.483657V0.058514H234.144914v720.954515a204.917029 204.917029 0 0 1-175.542857-195.7888l-0.117028-7.021715V0.058514H0.058514v518.144a263.285029 263.285029 0 0 0 235.52 261.792915 263.255771 263.255771 0 0 0 254.039772 235.402971l7.753143 0.087771h32065.828571z m0-58.397258H497.371429a204.917029 204.917029 0 0 1-202.810515-175.689142h32471.4496a204.917029 204.917029 0 0 1-195.759543 175.572114l-7.050971 0.117028z"
        fill={getIconColor(color, 0, '#EBE3D1')}
      />
    </svg>
  );
};

IconzhuangkuangpingjiaDibujiaocha.defaultProps = {
  size: 18,
};

export default IconzhuangkuangpingjiaDibujiaocha;

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

const IconzhuangkuangpingjiaDingbujiaocha: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 33060 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M32563.2 0.058514c136.045714 0 247.954286 103.189943 261.909943 235.52a263.460571 263.460571 0 0 1 235.402971 254.039772v525.867885h-58.397257V497.371429a204.917029 204.917029 0 0 0-175.659886-202.810515V1015.515429h-58.397257V292.483657H292.483657V1015.515429H234.144914V294.619429a204.917029 204.917029 0 0 0-175.542857 195.730285L58.455771 497.371429v518.144H0.058514V497.371429a263.285029 263.285029 0 0 1 235.52-261.792915A263.255771 263.255771 0 0 1 489.647543 0.175543L497.371429 0.058514h32065.828571z m0 58.397257H497.371429a204.917029 204.917029 0 0 0-202.810515 175.689143h32471.4496a204.917029 204.917029 0 0 0-195.759543-175.572114l-7.050971-0.117029z"
        fill={getIconColor(color, 0, '#EBE3D1')}
      />
    </svg>
  );
};

IconzhuangkuangpingjiaDingbujiaocha.defaultProps = {
  size: 18,
};

export default IconzhuangkuangpingjiaDingbujiaocha;

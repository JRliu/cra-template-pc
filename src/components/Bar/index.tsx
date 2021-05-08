/**
 * @author liujianrong
 * @date 2021-05-07 15:26
 * @since 0.1.0
 */

import React from 'react';
//import classnames from 'classnames';
//import style from './style.module.scss';

interface BarProps {}

const Bar: React.FC<BarProps> = (props) => {
    return <h1>Bar</h1>;
};

export default React.memo(Bar);

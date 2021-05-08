/**
 * @author liujianrong
 * @date 2021-05-07 15:20
 * @since 0.1.0
 */

import React from 'react';
//import classnames from 'classnames'
//import style from './style.module.scss'

interface FooProps {}

const Foo: React.FC<FooProps> = (props) => {
    return (
        <div>
            foo foo
            <p>foo ooasofo</p>
        </div>
    );
};

export default React.memo(Foo);

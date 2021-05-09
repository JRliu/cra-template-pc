/**
 * @author liujianrong
 * @date 2021-04-28 16:49
 * @since 0.1.0
 */

import React from 'react';
//import classnames from 'classnames'
//import style from './style.module.scss'
import { observer } from 'mobx-react-lite';
import store from '@/store';
import { useParams } from 'react-router-dom';
import { renderRoutes } from '@/router';

interface TestProps {}

const Test: React.FC<TestProps> = (props) => {
    const pa = useParams() as any;

    return (
        <div>
            {store.personStore.name}，{pa.id} wodiu
            {/**  @ts-ignore **/}
            {renderRoutes(props.route.routes)}
        </div>
    );
};

export default observer(Test);

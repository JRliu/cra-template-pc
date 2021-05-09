import React, { Suspense } from 'react';
import Test from '@/components/Test';
import _renderRoutes from './renderRoutes';
import { RouteConfig } from 'react-router-config';
import Icon from '@/components/Iconfont';

function LazyComponent(com: Promise<any>) {
    const YY = React.lazy(() => com);

    return () => (
        <Suspense fallback={null}>
            <YY></YY>
        </Suspense>
    );
}

const TestComponent = LazyComponent(
    import(/* webpackChunkName: "personal-center" */ '@/components/Foo')
);

const TTy = React.lazy(
    () => import(/* webpackChunkName: "personal-center" */ '@/components/Foo')
);

const TT = () => (
    <Suspense fallback={null}>
        <TTy></TTy>
    </Suspense>
);

const _routes: RouteConfig[] = [
    {
        path: '/test/:id',
        component: Test,
        routes: [
            {
                path: '/fuck',
                fallback: <p>加载紧啦。。。。</p>,
                render: (props) => {
                    return (
                        <div>
                            <Icon name="logohengban-lanse"></Icon>
                            gao mao a <TT></TT>
                            {props.route &&
                                props.route.routes &&
                                renderRoutes(props.route!.routes)}
                        </div>
                    );
                },
                // component: TT,
                test: 123,
                routes: [
                    {
                        path: '/mabi',
                        requireAuth: true,
                        permit: 'sing',
                        fallback: <p>w!!!</p>,
                        render: (props) => {
                            return (
                                <div>
                                    <Icon name="logohengban-lanse"></Icon>
                                    gao mao b <TestComponent />
                                    {props.route &&
                                        props.route.routes &&
                                        renderRoutes(props.route!.routes)}
                                </div>
                            );
                        },
                        routes: [
                            {
                                path: '/haha/:msg',
                                render: (props) => (
                                    <div>haha: {props.match.params.msg}</div>
                                ),
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        exact: true,
        render: () => <p>404</p>,
    },
];

/**
 * 给子路由的path，前面拼接上父路由的path
 * @param routes
 * @param prefix
 * @returns
 */
function formatRoutes(routes: RouteConfig[], prefix = ''): RouteConfig[] {
    return routes.map((route) => {
        route.path = `${prefix}${route.path}`;
        let rs = route.routes;
        if (rs && rs.length) {
            route.routes = formatRoutes(rs, route.path);
        }

        return route;
    });
}

export const routes = formatRoutes(_routes);
console.log(routes, '======rrr');

export const renderRoutes = _renderRoutes;

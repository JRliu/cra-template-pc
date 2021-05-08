import React, { Suspense } from 'react';
import { Switch, Route, SwitchProps, Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { Observer } from 'mobx-react-lite';
import store from '@/store';

const permits = ['eat', 'sing'];

function renderRoutes(
    routes: RouteConfig[],
    extraProps = {},
    switchProps: SwitchProps = {}
) {
    if (!routes) {
        return null;
    }

    return (
        <Observer>
            {() => (
                <Switch {...switchProps}>
                    {routes.map((route, ix) => (
                        <Route
                            key={route.key || ix}
                            path={route.path}
                            exact={route.exact}
                            strict={route.strict}
                            render={(props) => {
                                console.log(route, '===route');
                                // 验证登录状态
                                const rAuth = route.requireAuth;
                                if (rAuth && !store.authStore.authed) {
                                    return <Redirect to="/login" />;
                                }

                                // 验证权限
                                const rPermit = route.permit;
                                if (rPermit) {
                                    if (typeof rPermit === 'string') {
                                        if (!permits.includes(rPermit)) {
                                            return <p>没有权限！</p>;
                                        }
                                    }
                                }
                                return route.render
                                    ? route.render({
                                          ...props,
                                          ...extraProps,
                                          route,
                                      })
                                    : route.component && (
                                          <route.component
                                              {...props}
                                              {...extraProps}
                                              route={route}
                                          />
                                      );
                            }}
                        ></Route>
                    ))}
                </Switch>
            )}
        </Observer>
    );
}

export default renderRoutes;

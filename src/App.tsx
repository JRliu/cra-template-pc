import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.scss';
import Test from '@/components/Test';
import Icon from '@/components/Iconfont';
import request from '@/api/request';
import store from '@/store';
import { renderRoutes, routes } from '@/router';
import {
    Switch,
    Route,
    Link,
    useLocation,
    useRouteMatch,
    useHistory,
    useParams,
} from 'react-router-dom';

const TestComponent = React.lazy(
    () => import(/* webpackChunkName: "personal-center" */ '@/components/Test')
);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p
                    onClick={() => {
                        store.toggelName();
                        store.authStore.login();
                    }}
                >
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Link to="/test/123/fuck/mabi/haha/mama"> haha </Link>

                {renderRoutes(routes)}
            </header>
        </div>
    );
}

export default App;

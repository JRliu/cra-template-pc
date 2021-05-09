import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import store from '@/store';
import api from '@/api';
import { renderRoutes, routes } from '@/router';
import { Link } from 'react-router-dom';
import { Inspector, InspectParams } from 'react-dev-inspector';

const InspectorWrapper =
    process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

function App() {
    useEffect(() => {
        (async () => {
            const pet = await api.pet.pet.getPetById({ petId: 1 });
            console.log(pet, '====pet');
        })();
    }, []);

    return (
        <InspectorWrapper
            // props docs see:
            // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
            keys={['control', 'shift', 'command', 'c']}
            disableLaunchEditor={false}
            onHoverElement={(params: InspectParams) => {}}
            onClickElement={(params: InspectParams) => {}}
        >
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
        </InspectorWrapper>
    );
}

export default App;

import React from 'react';
import Router from '../../core/Router';
import Header from '../Header';
import './style.scss';

function App() {
    return (
        <div id="app">
            <Header />
            <div className="page">
                <Router />
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LandingPage from 'modules/landing-page';
import CreateNow from 'modules/create-now';
import reportWebVitals from './reportWebVitals';

import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/" element={<LandingPage />} />
                <Route path="/craete-now" element={<CreateNow />} />
            </Switch>
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

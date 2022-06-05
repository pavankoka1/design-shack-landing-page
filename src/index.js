import React from 'react';
import ReactDOM from 'react-dom/client';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import LandingPage from 'modules/landing-page';
import CreateNow from 'modules/create-now';
import Navbar from 'modules/landing-page/components/Navbar';
import Footer from 'modules/landing-page/components/footer';
import reportWebVitals from './reportWebVitals';

import './index.scss';

import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from 'react-router-dom';

const Wrapper = styled(Box)(({ theme }) => ({
    fontFamily: 'Raleway',
    width: 1184,
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        width: '100vw',
        padding: '0 20px',
        overflow: 'hidden',
    },
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Wrapper>
                <Switch>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/create-now" element={<CreateNow />} />
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

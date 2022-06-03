import React from 'react';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';

import Navbar from './components/Navbar';
import FirstFold from './components/first-fold';
import SecondFold from './components/second-fold';
import ThirdFold from './components/third-fold';
import FourthFold from './components/fourth-fold';
import FifthFold from './components/fifth-fold';
import SixthFold from './components/sixth-fold';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

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

function LandingPage() {
    return (
        <>
            <Navbar />
            <Wrapper>
                <FirstFold />
                <SecondFold />
                <ThirdFold />
                <FourthFold />
                <FifthFold />
                <SixthFold />
                <ContactUs />
                <Footer />
            </Wrapper>
        </>
    );
}

export default LandingPage;

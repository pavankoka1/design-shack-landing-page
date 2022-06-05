import React from 'react';

import FirstFold from './components/first-fold';
import SecondFold from './components/second-fold';
import ThirdFold from './components/third-fold';
import FourthFold from './components/fourth-fold';
import FifthFold from './components/fifth-fold';
import SixthFold from './components/sixth-fold';
import ContactUs from './components/contactUs';

function LandingPage() {
    return (
        <>
            <FirstFold />
            <SecondFold />
            <ThirdFold />
            <FourthFold />
            <FifthFold />
            <SixthFold />
            <ContactUs />
        </>
    );
}

export default LandingPage;

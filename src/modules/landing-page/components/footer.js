import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';

import LOGO from 'assets/logos/design-shack-white.svg';
import FOOTER_ICONS from 'assets/icons/footer.svg';

const FooterLink = styled(Link)(({ theme }) => ({
    fontFamily: 'Fraunces',
    fontWeight: 300,
    fontSize: '28px',
    lineHeight: '36px',
    margin: '0 36px',
    color: '#fff',
    width: 'fit-content',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        lineHeight: '22px',
        margin: '0 12px',
    },
}));

function Footer() {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Grid
            container
            direction="column"
            py={isSmallDevice ? 4 : 8}
            px={isSmallDevice ? 2 : 8}
            sx={{ background: '#383838' }}
            alignItems="center"
            justifyContent="center">
            <Grid item>
                <img src={LOGO} width={isSmallDevice ? 160 : 270} alt="logo" />
            </Grid>
            <Grid
                item
                container
                my={isSmallDevice ? 3 : 6}
                justifyContent="center">
                <FooterLink>Contact Us</FooterLink>
                <FooterLink>FAQs</FooterLink>
                <FooterLink>Gallery</FooterLink>
                <FooterLink>About Us</FooterLink>
            </Grid>
            <img
                src={FOOTER_ICONS}
                width={isSmallDevice ? 160 : 280}
                alt="footer logos"
            />
        </Grid>
    );
}

export default Footer;

import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';

import PHONE from 'assets/icons/phone.svg';
import MAIL from 'assets/icons/mail.svg';
import LOCATION from 'assets/icons/location.svg';

const Info = styled(Typography)(({ theme }) => ({
    fontFamily: 'Raleway',
    color: '#383838',
    fontWeight: 400,
    width: 450,
    fontSize: '24px',
    lineHeight: '30px',
    marginLeft: 16,
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        lineHeight: '24px',
        width: 'auto',
    },
}));

function ContactUs() {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Grid
            container
            direction="column"
            sx={{
                backgroundColor: '#FDD983',
                borderRadius: '24px',
            }}
            py={{
                xs: 2,
                lg: 6,
            }}
            px={{
                xs: 2,
                lg: 4,
            }}
            mb={{
                xs: 4,
                lg: 8,
            }}>
            <Grid item>
                <Typography
                    sx={{
                        fontFamily: 'Fraunces',
                        color: '#383838',
                        fontWeight: 400,
                        fontSize: {
                            xs: '24px',
                            lg: '32px',
                        },
                        lineHeight: {
                            xs: '44px',
                            lg: '60px',
                        },
                    }}
                    mb={{
                        xs: 1,
                        lg: 2,
                    }}>
                    Contact Us
                </Typography>
            </Grid>
            <Grid item container>
                <Grid item direction="column" xs={12} lg={6}>
                    <Typography
                        sx={{
                            fontFamily: 'Fraunces',
                            color: '#383838',
                            fontWeight: 300,
                            width: {
                                sx: '100%',
                                lg: 450,
                            },
                            fontSize: {
                                xs: '16px',
                                lg: '24px',
                            },
                            lineHeight: {
                                xs: '24px',
                                lg: '30px',
                            },
                        }}
                        mb={{
                            lg: 8,
                        }}>
                        Identify interpretations of new trending imagery as well
                        as textual information
                    </Typography>
                    <Grid
                        item
                        container
                        direction="column"
                        spacing={4}
                        xs={12}
                        my={{
                            xs: 4,
                            lg: 0,
                        }}>
                        <Grid container item alignItems="center">
                            <Grid item xs={1}>
                                <img
                                    src={PHONE}
                                    alt="phone"
                                    width={isSmallDevice ? 20 : 40}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Info>+91 9818279080</Info>
                            </Grid>
                        </Grid>
                        <Grid container item alignItems="center">
                            <Grid item xs={1}>
                                <img
                                    src={MAIL}
                                    width={isSmallDevice ? 20 : 40}
                                    alt="mail"
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Info>info@theprintscompany.com</Info>
                            </Grid>
                        </Grid>
                        <Grid container item alignItems="center" spacing={2}>
                            <Grid item xs={1}>
                                <img
                                    src={LOCATION}
                                    width={isSmallDevice ? 20 : 40}
                                    alt="location"
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Info>
                                    2118 Thornridge Cir. Syracuse, Connecticut
                                    35624
                                </Info>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{
                        background: '#F8EDEA',
                        borderRadius: '16px',
                        padding: isSmallDevice ? '32px 16px' : '80px 24px 28px',
                    }}>
                    <TextField
                        required
                        label="Your email address"
                        variant="outlined"
                        fullWidth={true}
                        placeholder="stevejobs@apple.com"
                        size={isSmallDevice ? 'small' : 'medium'}
                        sx={{
                            marginBottom: '32px',
                        }}
                    />
                    <TextField
                        required
                        multiline
                        rows={4}
                        label="Please enter your message here"
                        variant="outlined"
                        fullWidth={true}
                        placeholder="text goes here ..."
                        size={isSmallDevice ? 'small' : 'medium'}
                        sx={{
                            marginBottom: '32px',
                        }}
                    />
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                        }}>
                        <Button
                            variant="outlined"
                            size={isSmallDevice ? 'small' : 'large'}
                            color="error">
                            Submit
                        </Button>
                    </span>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ContactUs;

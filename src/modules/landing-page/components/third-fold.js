import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LEFT_IMAGE from 'assets/images/third-fold-left.png';

function ThirdFold() {
    return (
        <Grid container mt={{ lg: 16, xs: 4 }} spacing={{ sx: 0, lg: 8 }}>
            <Grid item lg={6} sm={12}>
                <img src={LEFT_IMAGE} alt="right" width="100%" />
            </Grid>
            <Grid
                container
                item
                lg={6}
                sm={12}
                mt={{
                    lg: 8,
                }}
                spacing={4}
                direction="column">
                <Grid item>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'Fraunces',
                            color: '#383838',
                            fontSize: {
                                xs: '36px',
                                lg: '48px',
                            },
                            lineHeight: {
                                xs: '44px',
                                lg: '60px',
                            },
                        }}>
                        Design by just text inputs
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Raleway',
                            color: '#383838',
                            fontWeight: 300,
                            fontSize: {
                                xs: '16px',
                                lg: '20px',
                            },
                            lineHeight: {
                                xs: '20px',
                                lg: '24px',
                            },
                        }}>
                        Simply ‘Type in’ your desired images or designs and let
                        AI (Magically) create instantly
                        <br />
                        <br />
                        Every creation is unique and everytime you click
                        ‘Generate button’ a new set of images are generated for
                        the given text inputs
                        <br />
                        <br />
                        But sometimes you just have visual images and no text…
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ThirdFold;

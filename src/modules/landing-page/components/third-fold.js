import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LEFT_IMAGE from 'assets/images/third-fold-left.png';

function ThirdFold() {
    return (
        <Grid container mt={16} spacing={8}>
            <Grid item lg={6} sm={12}>
                <img src={LEFT_IMAGE} alt="right" width="100%" />
            </Grid>
            <Grid container item lg={6} sm={12} spacing={4} direction="column">
                <Grid item>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'Fraunces',
                            color: '#383838',
                            marginTop: '100px',
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

import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RIGHT_IMAGE from 'assets/images/fourth-fold-right.svg';

function FourthFold() {
    return (
        <Grid container spacing={8} alignItems="center" mt={{ xs: 2, lg: 0 }}>
            <Grid container item lg={6} sm={12} spacing={4} direction="column">
                <Grid item>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'Fraunces',
                            color: '#383838',
                            textAlign: {
                                xs: 'left',
                                lg: 'right',
                            },
                            fontSize: {
                                xs: '36px',
                                lg: '48px',
                            },
                            lineHeight: {
                                xs: '44px',
                                lg: '60px',
                            },
                        }}>
                        Get variation for a
                        <br /> starting image
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Raleway',
                            color: '#383838',
                            fontWeight: 300,
                            textAlign: {
                                xs: 'left',
                                lg: 'right',
                            },
                            fontSize: {
                                xs: '16px',
                                lg: '20px',
                            },
                            lineHeight: {
                                xs: '20px',
                                lg: '24px',
                            },
                        }}>
                        You can either use your own image or one that is
                        generated to get new images or more variations which are
                        influenced by the input image
                        <br />
                        <br />
                        You can as well quantify the weightage you wish to give
                        the text and image for generation
                        <br />
                        <br />
                        But sometimes you just need to change style of an image
                        and preserve the shapes
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg={6} sm={12}>
                <img src={RIGHT_IMAGE} alt="right" width="100%" />
            </Grid>
        </Grid>
    );
}

export default FourthFold;

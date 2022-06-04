import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import WIDE_IMAGE from 'assets/images/sixth-fold.png';

function ThirdFold() {
    return (
        <Grid container direction="column" m={0} mb={8}>
            <Grid item mb={1}>
                <Typography
                    sx={{
                        fontFamily: 'Fraunces',
                        color: '#383838',
                        fontWeight: 400,
                        fontSize: {
                            xs: '36px',
                            lg: '48px',
                        },
                        lineHeight: {
                            xs: '44px',
                            lg: '60px',
                        },
                    }}>
                    Use Cases
                </Typography>
            </Grid>
            <Grid item mb={3}>
                <Typography
                    sx={{
                        fontFamily: 'Fraunces',
                        color: '#606060',
                        fontWeight: 300,
                        fontSize: {
                            xs: '20px',
                            lg: '28px',
                        },
                        lineHeight: {
                            xs: '28px',
                            lg: '36px',
                        },
                    }}>
                    Art for frames at home and offices
                </Typography>
            </Grid>
            <Grid item>
                <img width="100%" src={WIDE_IMAGE} alt="wide" />
            </Grid>
        </Grid>
    );
}

export default ThirdFold;

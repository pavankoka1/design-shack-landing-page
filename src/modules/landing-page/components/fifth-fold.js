import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LEFT_IMAGE from 'assets/images/fifth-fold-left.svg';

function ThirdFold() {
    return (
        <Grid container my={16} alignItems="center" spacing={8}>
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
                        }}>
                        Apply new styles to any image
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
                        Use a image you have and apply contextual styles from
                        our library or a custom style from an image of your own
                        choice
                        <br />
                        <br />
                        The style stransfer will amaze what creations you can do
                        from simple objects and iterate rapidy
                        <br />
                        <br />
                        But that’s not all, you wish to see what the world is
                        doing …
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ThirdFold;

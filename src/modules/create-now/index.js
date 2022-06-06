import React from 'react';
import Grid from '@mui/material/Grid';
import Text from './components/text';

function CreateNow() {
    return (
        <Grid container spacing={{ xs: 2, lg: 4 }} py={{ xs: 2, lg: 4 }}>
            <Grid item container sx={12} lg={6} direction="column">
                <Text />
            </Grid>
            <Grid item container sx={12} lg={6}>
                {/* <Text /> */}
            </Grid>
        </Grid>
    );
}

export default CreateNow;

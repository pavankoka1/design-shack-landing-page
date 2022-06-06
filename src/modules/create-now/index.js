import React from 'react';
import Grid from '@mui/material/Grid';
import Text from './components/text';
import Styles from './components/styles';

function CreateNow() {
    return (
        <Grid
            container
            spacing={{ xs: 2, lg: 4 }}
            py={{ xs: 2, lg: 4 }}
            columns={12}>
            <Grid item xs={12} lg={6} direction="column" m={0}>
                <Text />
                <Styles />
            </Grid>
            <Grid item container xs={12} lg={6}>
                {/* <Text /> */}
            </Grid>
        </Grid>
    );
}

export default CreateNow;

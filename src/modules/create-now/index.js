import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Text from './components/text';
import Styles from './components/styles';
import Advanced from './components/advanced';
import { post } from 'apis';

const baseURL = {
    development: 'http://localhost:1729/',
    production: 'https://design-shack.netlify.app/',
};

function CreateNow() {
    const token = localStorage.getItem('access_token');

    useEffect(() => {
        if (!token) {
            const queryString = window.location.hash.substring(1);
            if (queryString !== '') {
                const urlParams = new URLSearchParams(queryString);
                const accessToken = urlParams.get('access_token');
                const idToken = urlParams.get('id_token');
                localStorage.setItem('id_token', idToken);
                localStorage.setItem('access_token', accessToken);
                var replacedUrl = window.location.href.replace(
                    window.location.hash,
                    '',
                );
                window.location.href = replacedUrl;
            } else {
                window.location.href = baseURL[process.env.NODE_ENV];
            }
        }
    }, []);

    useEffect(() => {
        if (token) {
            getImages();
        }
    }, [token]);

    async function getImages() {
        const request = {
            prompt: '',
            negative_prompt: '',
            width: '',
            height: '',
            guidance_scale: '',
            batch_size: '',
            init_image: '',
            skip_timesteps: '',
            upscaler: '',
            steps: '',
        };
        const response = await post('glid-3-xl-jack', request);
        console.log('response', response);
    }
    return (
        <Grid
            container
            spacing={{ xs: 2, lg: 4 }}
            py={{ xs: 2, lg: 4 }}
            columns={12}>
            <Grid item xs={12} lg={6} m={0}>
                <Text />
                <Styles />
                <Advanced />
            </Grid>
            <Grid item container xs={12} lg={6}>
                {/* <Text /> */}
            </Grid>
        </Grid>
    );
}

export default CreateNow;

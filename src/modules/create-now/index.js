import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Text from './components/text';
import Styles from './components/styles';
import Advanced from './components/advanced';
import Images from './components/images';
import { post, appUrl } from 'apis';

function CreateNow() {
    const [images, setImages] = useState([]);
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
                window.location.href = appUrl;
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
            batch_size: 4,
            guidance_scale: 5,
            height: 256,
            init_image: '',
            negative_prompt: '',
            prompt: 'New York skyline in Cubist style by Pablo Picasso',
            skip_timesteps: 0,
            steps: 25,
            upscaler: '',
            width: 256,
        };
        const response = await post('glid-3-xl-jack', request);
        setImages(response.images);
    }
    return (
        <Grid
            container
            spacing={{ xs: 2, lg: 8 }}
            py={{ xs: 2, lg: 4 }}
            columns={12}>
            <Grid item xs={12} lg={6} m={0}>
                <Text />
                <Styles />
                <Advanced />
            </Grid>
            <Grid item container xs={12} lg={6}>
                <Images images={images} />
            </Grid>
        </Grid>
    );
}

export default CreateNow;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import IMAGE_1 from 'assets/images/first-fold-1.svg';
import IMAGE_2 from 'assets/images/first-fold-2.svg';
import IMAGE_3 from 'assets/images/first-fold-3.svg';
import IMAGE_4 from 'assets/images/first-fold-4.svg';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';

const boxShadowValue =
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';

const Wrapper = styled(Grid)(({ theme }) => ({
    fontFamily: 'Fraunces',
}));

const AnimatedText = styled(Typical)(() => ({
    fontFamily: 'Raleway',
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 400,
    letterSpacing: 0,
    background: '#DEDEDE',
    borderRadius: '4px',
    color: '#606060',
    padding: '8px 14px',
    marginTop: '32px',
    height: '44px',
    overflow: 'hidden',
}));

function FirstFold() {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        var i = 0;
        setInterval(() => {
            i = i + 1;
            setActiveImage((act) => {
                return i % 4;
            });
        }, 5000);
    }, []);

    function renderAnimatedText() {
        switch (activeImage) {
            case 0:
                return (
                    <AnimatedText
                        steps={['New York skyline in Cubist Style', 5000]}
                    />
                );
            case 1:
                return (
                    <AnimatedText steps={['Volcano in oil painting', 5000]} />
                );
            case 2:
                return (
                    <AnimatedText
                        steps={['Mushroom in watercolor painting', 5000]}
                    />
                );
            case 3:
                return (
                    <AnimatedText steps={['Tree in pencil sketching', 5000]} />
                );
            default:
                return null;
        }
    }

    return (
        <Wrapper container my={12} spacing={2}>
            <Grid container item sm={12} lg={6} direction="column" spacing={4}>
                <Grid item>
                    <Typography
                        variant="p"
                        sx={{
                            fontFamily: 'Fraunces',
                            fontSize: '56px',
                            lineHeight: '70px',
                            letterSpacing: 0,
                            color: '#383838',
                            fontWeight: '400',
                        }}>
                        Instant New Designs.
                        <br /> No Photoshop.
                        <br /> Copyright Free
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="p"
                        sx={{
                            fontFamily: 'Fraunces',
                            fontSize: '28px',
                            lineHeight: '36px',
                            letterSpacing: 0,
                            color: '#606060',
                            fontWeight: '300',
                        }}>
                        “Our powerful AI models generate novel designs by just
                        using text and images”
                    </Typography>
                </Grid>
                <Grid item container spacing={2}>
                    <Grid item sm={12}>
                        {renderAnimatedText()}
                    </Grid>
                    <Grid item>
                        <Button
                            size="large"
                            color="error"
                            variant="outlined"
                            children="Create Now"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item sm={12} lg={6} spacing={4}>
                <Grid
                    container
                    item
                    sm={12}
                    alignItems="center"
                    spacing={4}
                    sx={{ marginLeft: 'auto' }}>
                    <Grid item>
                        <motion.img
                            src={IMAGE_1}
                            alt="first-fold"
                            width={218}
                            style={{
                                marginBottom: '16px',
                                boxShadow:
                                    activeImage === 0 ? boxShadowValue : '',
                                zIndex: activeImage === 0 ? 10 : 1,
                                borderRadius: '5px',
                            }}
                            animate={{
                                scale: activeImage === 0 ? 1.2 : 1,
                            }}
                            transition={{ duration: 2 }}
                        />
                    </Grid>
                    <Grid item>
                        <motion.img
                            src={IMAGE_2}
                            alt="first-fold"
                            width={189}
                            style={{
                                boxShadow:
                                    activeImage === 2 ? boxShadowValue : '',
                                zIndex: activeImage === 2 ? 10 : 1,
                                borderRadius: '5px',
                            }}
                            animate={{
                                scale: activeImage === 2 ? 1.2 : 1,
                            }}
                            transition={{ duration: 2 }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    sm={12}
                    alignItems="center"
                    spacing={4}
                    sx={{ marginLeft: 'auto' }}>
                    <Grid item>
                        <motion.img
                            src={IMAGE_3}
                            alt="first-fold"
                            width={218}
                            style={{
                                boxShadow:
                                    activeImage === 1 ? boxShadowValue : '',
                                zIndex: activeImage === 1 ? 10 : 1,
                                borderRadius: '5px',
                            }}
                            animate={{
                                scale: activeImage === 1 ? 1.2 : 1,
                            }}
                            transition={{ duration: 2 }}
                        />
                    </Grid>
                    <Grid item>
                        <motion.img
                            src={IMAGE_4}
                            alt="first-fold"
                            width={218}
                            style={{
                                boxShadow:
                                    activeImage === 3 ? boxShadowValue : '',
                                zIndex: activeImage === 3 ? 10 : 1,
                                borderRadius: '5px',
                            }}
                            animate={{
                                scale: activeImage === 3 ? 1.2 : 1,
                            }}
                            transition={{ duration: 2 }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
}

export default FirstFold;

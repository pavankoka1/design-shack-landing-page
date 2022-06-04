import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';

import TESTIMONIAL_1 from 'assets/icons/testimonial-1.svg';
import TESTIMONIAL_2 from 'assets/icons/testimonial-2.svg';
import TESTIMONIAL_3 from 'assets/icons/testimonial-3.svg';

const Wrapper = styled(Grid)(({ theme }) => ({
    fontFamily: 'Raleway',
    width: '580px',
    border: '2px dashed #606060',
    borderRadius: '20px',
    padding: '24px 24px 40px',
    margin: 0,
    height: 'fit-content',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marging: '0 !important',
    },
}));

function Testimonial({ icon, name, desc }) {
    return (
        <Wrapper container spacing={3}>
            <Grid item container spacing={2} alignItems="center">
                <Grid item>
                    <img src={icon} alt="icon" />
                </Grid>
                <Grid item>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'Raleway',
                            fontWeight: '400',
                            color: '#383838',
                            lineHeight: '28px',
                        }}>
                        {name}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: 'Raleway',
                        fontWeight: '400',
                        color: '#606060',
                        lineHeight: '28px',
                    }}>
                    {desc}
                </Typography>
            </Grid>
        </Wrapper>
    );
}

function SecondFold() {
    return (
        <Grid container direction="column" my={8} spacing={4}>
            <Grid item container justifyContent="space-between">
                <Testimonial
                    icon={TESTIMONIAL_1}
                    name="Wade Warren (Designer)"
                    desc="DS helps me in rapifly prototype my ideas and generate mood boards in few hours compared to days previously"
                />
                <div style={{ marginTop: '72px' }}>
                    <Testimonial
                        icon={TESTIMONIAL_2}
                        name="Wade Warren (Designer)"
                        desc="DS helps me in rapifly prototype my ideas and generate mood boards in few hours compared to days previously"
                    />
                </div>
            </Grid>
            <Grid
                item
                sx={{
                    marginLeft: {
                        lg: '90px',
                    },
                }}>
                <Testimonial
                    icon={TESTIMONIAL_3}
                    name="Wade Warren (Designer)"
                    desc="DS helps me in rapifly prototype my ideas and generate mood boards in few hours compared to days previously"
                />
            </Grid>
        </Grid>
    );
}

export default SecondFold;

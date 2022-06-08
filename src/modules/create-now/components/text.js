import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Button, TextField, Typography, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';

const suggestions = [
    {
        id: 'suggestion-1',
        label: 'Tree in pencil sketching',
    },
    {
        id: 'suggestion-2',
        label: 'Charcoal Sketch',
    },
    {
        id: 'suggestion-3',
        label: 'New York skyline in Cubist Style',
    },
    {
        id: 'suggestion-4',
        label: 'suggestion 4',
    },
    {
        id: 'suggestion-5',
        label: 'suggestion 5',
    },
];

const Pill = styled(Button)({
    fontFamily: 'Raleway',
    color: '#383838',
    border: '1px solid #383838',

    '&:hover': {
        border: '1px solid #383838',
        background: 'rgb(56, 56, 56, 0.1)',
    },

    '&.MuiButton-contained': {
        background: '#383838',
        color: '#fff',
        border: 'none',
    },
});

function Text() {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('lg'));

    const [selectedSuggestions, setSelectedSuggestions] = useState([]);

    function handleSuggestionClick(suggestion) {
        const clonedSuggestions = cloneDeep(selectedSuggestions);
        if (selectedSuggestions.includes(suggestion)) {
            const index = clonedSuggestions.indexOf(suggestion);

            clonedSuggestions.splice(index, 1);
            setSelectedSuggestions(clonedSuggestions);
        } else {
            clonedSuggestions.push(suggestion);
            setSelectedSuggestions(clonedSuggestions);
        }
    }

    return (
        <Grid
            item
            container
            direction="column"
            py={{ xs: 2, lg: 8 }}
            xs={12}
            rowGap={2}
            // spacing={2}
        >
            <Grid item>
                <Typography
                    variant="p"
                    sx={{
                        fontFamily: 'Fraunces',
                        fontSize: {
                            xs: '20px',
                            lg: '28px',
                        },
                        lineHeight: {
                            xs: '28px',
                            lg: '36px',
                        },
                        letterSpacing: 0,
                        color: '#383838',
                        fontWeight: '300',
                    }}>
                    Text prompt
                </Typography>
            </Grid>
            <Grid item>
                <TextField
                    required
                    label=""
                    variant="outlined"
                    fullWidth={true}
                    placeholder="New York skyline in Cubist style by Pablo Picasso"
                    size={isSmallDevice ? 'small' : 'medium'}
                    sx={{
                        fontFamily: 'Raleway',
                        fontSize: {
                            xs: '16px',
                            lg: '24px',
                        },
                        lineHeight: {
                            xs: '20px',
                            lg: '28px',
                        },
                        letterSpacing: 0,
                        color: '#383838',
                        fontWeight: '300',
                    }}
                />
            </Grid>
            <Grid item container spacing={1} alignItems="center">
                {suggestions.map((item) => (
                    <Grid item id={item.id}>
                        <Pill
                            size={isSmallDevice ? 'small' : 'medium'}
                            variant={
                                selectedSuggestions.includes(item.id)
                                    ? 'contained'
                                    : 'outlined'
                            }
                            onClick={() => handleSuggestionClick(item.id)}>
                            {item.label}
                        </Pill>
                    </Grid>
                ))}
                <Grid item>
                    <Button
                        variant="text"
                        size="small"
                        color="error"
                        endIcon={<ArrowForwardIosIcon />}>
                        View More
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Text;

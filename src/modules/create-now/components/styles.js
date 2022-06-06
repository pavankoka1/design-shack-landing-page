import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Button, Typography, Grid, Box, Tabs, Tab } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import DoneIcon from '@mui/icons-material/Done';

const keywords = [
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

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

const useStyles = makeStyles(() => ({
    tabs: {
        '& .MuiTabs-indicator': {
            backgroundColor: '#FF624F',
            fontFamily: 'Fraunces',
            fontWeight: 300,
            fontSize: '24px',
            lineHeight: '30px',
            color: '#383838',
        },
        '& .MuiTab-root': {
            fontFamily: 'Fraunces',
            fontWeight: 300,
            fontSize: '24px',
            lineHeight: '30px',
            color: '#383838',
        },
        '& .MuiTab-root.Mui-selected': {
            color: '#383838',
        },
    },
}));

function Styles() {
    const tabClasses = useStyles();
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('lg'));

    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    function handleTabChange(event, newTab) {
        setSelectedTab(newTab);
    }

    function handleSuggestionClick(suggestion) {
        const clonedkeywords = cloneDeep(selectedKeywords);
        if (selectedKeywords.includes(suggestion)) {
            const index = clonedkeywords.indexOf(suggestion);

            clonedkeywords.splice(index, 1);
            setSelectedKeywords(clonedkeywords);
        } else {
            clonedkeywords.push(suggestion);
            setSelectedKeywords(clonedkeywords);
        }
    }

    return (
        <Grid
            item
            container
            direction="column"
            py={{ xs: 2, lg: 8 }}
            px={{ xs: 2, lg: 4 }}
            xs={12}
            spacing={2}
            sx={{
                boxShadow: '0px 0px 23px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
            }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    aria-label="basic tabs example"
                    className={tabClasses.tabs}
                    TabIndicatorProps={{ className: tabClasses.indicator }}>
                    <Tab label="Styles" />
                    <Tab label="Add Keywords" />
                </Tabs>
            </Box>
            <TabPanel value={selectedTab} index={0}>
                Styles
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
                <Grid item container spacing={1} alignItems="center">
                    {keywords.map((item) => (
                        <Grid item id={item.id}>
                            <Pill
                                variant={
                                    selectedKeywords.includes(item.id)
                                        ? 'contained'
                                        : 'outlined'
                                }
                                onClick={() => handleSuggestionClick(item.id)}
                                endIcon={
                                    selectedKeywords.includes(item.id) ? (
                                        <DoneIcon />
                                    ) : null
                                }>
                                {item.label}
                            </Pill>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
        </Grid>
    );
}

export default Styles;

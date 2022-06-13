import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import {
    Button,
    TextField,
    Typography,
    Grid,
    Switch,
    Stack,
    Checkbox,
    Slider,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import UPLOAD_IMAGE from 'assets/images/create-now/upload.svg';

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

const SliderWrapper = styled(Slider)({
    '.MuiSlider-markLabel': {
        fontFamily: 'Raleway',
        color: '#383838',
    },
    '.MuiSlider-track': {
        color: '#FCBFB8',
    },
    '.MuiSlider-thumb': {
        color: '#FF624F',
    },
});

const CheckboxWrapper = styled(Checkbox)({
    '&.Mui-checked': {
        color: '#FF624F',
    },
});

const SwitchWrapper = styled(Switch)({
    '.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        backgroundColor: '#FFA297',
    },
    '.MuiSwitch-switchBase.Mui-checked': {
        color: '#FF624F',
    },
});

const sliderMarks = [
    {
        value: 1,
        label: 'weak',
    },
    {
        value: 5,
        label: 'normal',
    },
    {
        value: 12,
        label: 'strong',
    },
    {
        value: 15,
        label: '',
    },
];

const FieldHeader = ({ text, noMargin }) => (
    <Typography
        variant="p"
        sx={{
            marginBottom: noMargin ? 0 : '8px',
            fontFamily: 'Fraunces',
            fontSize: {
                xs: '16px',
                lg: '24px',
            },
            lineHeight: {
                xs: '22px',
                lg: '30px',
            },
            letterSpacing: 0,
            color: '#383838',
            fontWeight: 300,
        }}>
        {text}
    </Typography>
);

const Header = ({ text }) => (
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
        {text}
    </Typography>
);

const prompts = ['Weak', 'Normal', 'Strong'];

function Advanced() {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('lg'));
    const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
    const [increaseResolution, setIncreaseResolution] = useState(false);
    const [textPrompt, setTextPrompt] = useState(1);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imagePrompt, setImagePrompt] = useState(5);
    const [noOfImages, setNoOfImages] = useState(8);

    function handleToggle(e, value) {
        setShowAdvancedOptions(value);
    }

    return (
        <Grid item container direction="column">
            <Grid
                item
                xs={12}
                direction="column"
                mx={0}
                my={4}
                sx={{
                    boxShadow: '0px 0px 23px rgba(0, 0, 0, 0.1)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                }}
                container>
                <Grid
                    item
                    container
                    justifyContent="space-between"
                    py={{ xs: 2, lg: 4 }}
                    px={{ xs: 2, lg: 3 }}
                    sx={{
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                    }}>
                    <Grid item>
                        <Header text="Adavance options" />
                    </Grid>
                    <Grid item>
                        <SwitchWrapper
                            checked={showAdvancedOptions}
                            onChange={handleToggle}
                        />
                    </Grid>
                </Grid>
                {showAdvancedOptions ? (
                    <Grid
                        item
                        container
                        py={{ xs: 4, lg: 8 }}
                        px={{ xs: 2, lg: 3 }}
                        rowSpacing={{
                            xs: 4,
                            lg: 8,
                        }}
                        direction="column">
                        <Grid item container spacing={4}>
                            <Grid item xs={12} lg={4}>
                                <Stack>
                                    {<FieldHeader text="Seed Value" />}
                                    <TextField
                                        required
                                        label=""
                                        variant="outlined"
                                        fullWidth={true}
                                        placeholder="New York skyline in Cubist style by Pablo Picasso"
                                        size={
                                            isSmallDevice ? 'small' : 'medium'
                                        }
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
                                </Stack>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <Stack direction="row" spacing={2}>
                                    <Stack>
                                        {<FieldHeader text="No. of Image" />}
                                        <Stack
                                            spacing={1}
                                            direction="row"
                                            alignItems="center">
                                            {[2, 4, 6, 8].map((no) => (
                                                <Stack
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
                                                        color:
                                                            no === noOfImages
                                                                ? '#fff'
                                                                : '#383838',
                                                        fontWeight: '300',
                                                        width:
                                                            no === noOfImages
                                                                ? '48px'
                                                                : '40px',
                                                        height:
                                                            no === noOfImages
                                                                ? '48px'
                                                                : '40px',
                                                        backgroundColor:
                                                            no === noOfImages
                                                                ? '#FF624F'
                                                                : '#FDD983',
                                                        borderRadius: '100%',
                                                        cursor: 'pointer',
                                                    }}
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    onClick={() =>
                                                        setNoOfImages(no)
                                                    }>
                                                    {no}
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Stack>
                                {
                                    <FieldHeader text="Influence of Text Prompt" />
                                }
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={2}
                                    alignItems="center"
                                    mt={{ xs: 1, lg: 1 }}>
                                    {prompts.map((value, index) => (
                                        <Grid
                                            item
                                            key={`image-prompt-${value}`}>
                                            <Pill
                                                variant={
                                                    textPrompt === index
                                                        ? 'contained'
                                                        : 'outlined'
                                                }
                                                size="small"
                                                onClick={() =>
                                                    setTextPrompt(index)
                                                }
                                                endIcon={
                                                    textPrompt === index ? (
                                                        <DoneIcon />
                                                    ) : null
                                                }>
                                                {value}
                                            </Pill>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack>
                                <FieldHeader text="Upload Input Image" />

                                <Dropzone
                                    onDrop={(acceptedFiles) => {
                                        const [file] = acceptedFiles;
                                        const image = URL.createObjectURL(file);
                                        setUploadedImage(image);
                                    }}>
                                    {({ getRootProps, getInputProps }) => (
                                        <div
                                            {...getRootProps({
                                                className: 'dropzone',
                                            })}
                                            style={{ cursor: 'pointer' }}>
                                            <input {...getInputProps()} />
                                            <Stack
                                                sx={{
                                                    width: '100%',
                                                    height: '200px',
                                                    border: '2px dashed #606060',
                                                    borderRadius: '4px',
                                                }}
                                                alignItems="center"
                                                justifyContent="center"
                                                mt={{
                                                    xs: 1,
                                                    lg: 2,
                                                }}>
                                                {!uploadedImage ? (
                                                    <img
                                                        src={UPLOAD_IMAGE}
                                                        alt="upload"
                                                        height="64px"
                                                    />
                                                ) : (
                                                    <img
                                                        src={uploadedImage}
                                                        alt="upload"
                                                        width="64px"
                                                    />
                                                )}
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: {
                                                            xs: '12px',
                                                            lg: '16px',
                                                        },
                                                        lineHeight: {
                                                            xs: '16px',
                                                            lg: '20px',
                                                        },
                                                        letterSpacing: 0,
                                                        color: '#383838',
                                                        fontWeight: 400,
                                                    }}
                                                    mt={{
                                                        xs: 1,
                                                        lg: 2,
                                                    }}>
                                                    Drag & Drop to Upload Input
                                                    Image
                                                </Typography>
                                            </Stack>
                                        </div>
                                    )}
                                </Dropzone>
                            </Stack>
                        </Grid>
                        {uploadedImage ? (
                            <Grid item>
                                <Stack spacing={2}>
                                    <FieldHeader text="Influence of Image Prompt" />
                                    <SliderWrapper
                                        onChange={(e, value) =>
                                            setImagePrompt(value)
                                        }
                                        value={imagePrompt}
                                        step={1}
                                        min={0}
                                        max={15}
                                        marks={sliderMarks}
                                        valueLabelDisplay="auto"
                                    />
                                </Stack>
                            </Grid>
                        ) : null}
                    </Grid>
                ) : null}
            </Grid>
            <Grid item ml={{ xs: 1, lg: 2 }}>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    mb={{ xs: 2 }}>
                    <FieldHeader text="Increse Resolution" noMargin />
                    <CheckboxWrapper
                        mb={{ xs: 4, lg: 1 }}
                        checked={increaseResolution}
                        onChange={(e, value) => setIncreaseResolution(value)}
                    />
                </Stack>
                <Button
                    variant="contained"
                    color="warning"
                    size={isSmallDevice ? 'small' : 'large'}>
                    Generate
                </Button>
            </Grid>
        </Grid>
    );
}

export default Advanced;

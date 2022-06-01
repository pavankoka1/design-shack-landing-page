// import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import SIGN_UP from 'assets/icons/sign-up.svg'
import DESIGN_SHACK from "assets/logos/design-shack.svg";
import styles from "./Navbar.module.scss";

// function Navbar() {
//   return (
//     <div className={styles.wrapper}>
//         {/* <img src={DESIGN_SHACK} alt='logo' />
//         <div className={styles.links}>
//           <p>About</p>
//           <p>Create Now</p>
//           <p>Gallery</p>
//           <div className={styles.signUp}>
//             <img src={SIGN_UP} alt='sign up' />
//             <p>Sign Up</p>
//           </div>
//         </div> */}
//         <AppBar position="fixed">
//           <Toolbar>koka</Toolbar>
//         </AppBar>
//         <Toolbar />
//     </div>
//   )
// }

// export default Navbar

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pages = ["About", "Create Now", "Gallery", "Sign Up"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const darkTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#fff",
        },
    },
});

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="sticky" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <img src={DESIGN_SHACK} alt="logo" />
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={anchorElNav ? true : false}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <img src={DESIGN_SHACK} alt="logo" />
                        </Typography>
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: '24px' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: page !== 'Sign Up' ? "black" : '',
                                        display: "flex",
                                        marginLeft: "auto",
                                    }}
                                    size="large"
                                    color={page === 'Sign Up' ? 'error' : 'primary'}
                                    startIcon={page === 'Sign Up' ? <PersonIcon /> : null}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default ResponsiveAppBar;
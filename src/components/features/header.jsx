import React from "react";
import './header.css'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <Box sx={{ flexGrow: 1, width: '85vw' }}>
                <AppBar position="static" >
                    <Toolbar style={{ display: "flex", justifyContent: 'space-between' }}>
                        <Typography variant="h6" component="div" >
                            Herolo/Abra/Itzhak Kasie
                        </Typography>
                        <div style={{ width: '30%', display: "flex", justifyContent: 'flex-end' }}>

                            <Link to="/" style={{ color: 'inherit' }}>
                                <HomeRoundedIcon style={{
                                    flexGrow: 0.2,
                                    height: "50", width: "50",
                                }} color="inherit" />
                            </Link>
                            <Link to="/favorite" style={{ color: 'inherit' }}>
                                <AccountBoxRoundedIcon style={{
                                    flexGrow: 0.1,
                                    height: "50", width: "50",
                                }} color="inherit" />
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}
export default Header
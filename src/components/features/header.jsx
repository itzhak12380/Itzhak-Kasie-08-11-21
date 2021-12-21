import React, { useState } from "react";
import './header.css'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { changeThem } from "../../redux/weather/weather";
import { light,dark } from "./them";
import { useDispatch ,useSelector} from "react-redux";
const Header = () => {
    let iconStyle = {
        height: "35", width: "35",
    }
    const dispatch = useDispatch()
    const ThemColor = useSelector(state => state.ThemColor.data)
    const [Them, setThem] = useState(true)
    const isTrue = ()=>{
        if(Them == true){
            dispatch(changeThem(dark))
            setThem(false)
        }
        else{
            dispatch(changeThem(light))
            setThem(true)
        }
    }
    return (
        <header>
            <Box className="header"  >
                <AppBar position="static" style={{ backgroundColor:ThemColor.headerColor }} >
                    <Toolbar className="Toolbar" >
                        <p className="title"  >
                            Itzhak Kasie
                        </p>
                        <div className="routs" >
                            <Stack direction="row" spacing={1} alignItems="center">
                                <span className="themButton">dark</span>
                                <Switch onClick={isTrue} defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                <span className="themButton">light</span>
                            </Stack>
                            <Link to="/" className="Link" >
                                <HomeRoundedIcon style={iconStyle} color="inherit" />
                            </Link>
                            <Link to="/favorite" className="Link">
                                <AccountBoxRoundedIcon style={iconStyle} className="icon" />
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}
export default Header
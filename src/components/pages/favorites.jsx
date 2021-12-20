import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { cut } from '../../redux/weather/weather';
import { Link } from "react-router-dom";
import { fetchData } from '../features/fetchData'


function Favorites() {
    const [ErrorHandling, setErrorHandling] = useState()
    const favoritList = useSelector(state => state.favorits.data)
    const ThemColor = useSelector(state => state.ThemColor.data)
    const dispatch = useDispatch()
    function deleteLocation(index) {
        return dispatch(cut(index))
    }

    function ShowForcast(city) {
        fetchData(city, setErrorHandling, dispatch)
    }
    const style = {
        "width": "85vw",
        "height": "70vh",
        "display": "flex",
        "flexWrap": "wrap",
        "color": ThemColor.color,
        "justifyContent": "space-evenly",
    }
    return (
        <div >
            <h3>faviorit locations lists</h3>
            <div style={style}>
                {favoritList.map((card, index) => {
                    return (
                        <Card sx={{ minWidth: 275, height: "fit-content" }} key={index}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {card.Key}
                                </Typography>

                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {card.LocalizedName}
                                </Typography>
                                <Typography variant="body2">
                                    {card.weather}
                                </Typography>
                                <Typography variant="body2">
                                    {card.temperature}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to="/">
                                    <Button type="buttun" size="small" onClick={() => ShowForcast(card.LocalizedName)}>show forcast</Button>
                                </Link>

                                <Button type="buttun" size="small" onClick={() => deleteLocation(index)}>delete</Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites

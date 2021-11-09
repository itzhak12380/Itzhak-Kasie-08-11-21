import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const fakeList = [
    {
        id: 272557,
        city: 'tel-aviv',
        currntWeather: 35
    },
    {
        id: 4583234,
        city: 'bat-yam',
        currntWeather: 45
    },
    {
        id: 7623486,
        city: "holon",
        currntWeather: 89
    },
    {
        id: 4894334,
        city: 'log',
        currntWeather: 87
    },
]
const style = {
    "width": "85vw",
    "height": "70vh",
    "display": "flex",
    "flex-wrap":"wrap",
    "color": "black",
    "justify-content": "space-evenly",
}
function Favorites() {
    return (
        <div  >
            <h3>faviorit location lists</h3>
            <div style={style}>
            {fakeList.map((card, index) => {
                return (
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {card.id}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {card.city}
                            </Typography>
                            <Typography variant="body2">
                                {card.currntWeather}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">show forcast</Button>
                        </CardActions>
                    </Card>
                )
            })}
            </div>
        </div>
    )
}

export default Favorites

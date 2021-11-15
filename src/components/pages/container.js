import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Home from './Home'
import Header from '../features/header'
import Favorites from './favorites'
import {
    HashRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import { fetchData } from '../features/fetchData'
import ErrorComponent from '../features/errorComponent'
const style = {
    height: '96vh',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    alignItems: 'center',
    flexDirection: 'column'
}
function Container() {
    const dispatch = useDispatch()
    const [HandleError, setHandleError] = useState()
    useEffect(() => {
        const geoLocatin = (position) => {
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_APIKEY}&q=${position.coords.latitude},${position.coords.longitude}`).then((res) => { return res.json() }).then((responce) => { return fetchData(responce.AdministrativeArea.LocalizedName || "tel aviv", setHandleError, dispatch) })
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoLocatin);
        }
        else {
            return null
        }
    }, [])
    if (HandleError) {
        return (
            <ErrorComponent/>
        )
    }
    return (
        <Router>
            <div style={style}>
                <div style={{ height: "10%" }}>
                    <Header />
                </div >

                <div style={{ height: "90%" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorite" element={<Favorites />} />
                    </Routes>
                </div>

            </div>
        </Router>
    )
}

export default Container

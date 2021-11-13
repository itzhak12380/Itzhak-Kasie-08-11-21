import React, { useState, useRef, useEffect } from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../features/fetchData';
import CityCard from '../features/cityCard';
function Home() {
    const dispatch = useDispatch();
    const myForcast = useSelector(state => state.forcast)
    const ThemColor = useSelector(state => state.ThemColor.data)
    const [CityAraay, setCityAraay] = useState([])
    const [Display, setDisplay] = useState(false)
    let [input, setinput] = useState()
    const [ErorrCatch, setErorr] = useState(false)
    const cityName = async (e) => {

        const base = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
        const query = `?apikey=${process.env.REACT_APP_APIKEY}&q=${e.target.value}`
        const responce = await fetch(base + query)
        const data = await responce.json();
        setCityAraay(data)
        if (e.target.value === "") {
            // setDisplay(false)
            console.log("empty");
        }
        setinput((item) => { return item = e.target.value })

    }
    if (ErorrCatch) {
        return (
            <div>
                <img style={{ width: "300px", height: '250px' }} src='http://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1571606089' />
                <h1> Error page not found</h1>
                <h2>please refresh the page or try again later</h2>
            </div>
        )
    }
    const chooseCity = value => {
        console.log(value);
        setinput(value)
        console.log(input);
        setDisplay(false)
    }
    return (
        <div >
            <div className="HomeContainer" style={{ backgroundImage: `url("${ThemColor.backgorundImg}")`, color: ThemColor.color }}>
                <div className="searcContainer">
                    <div className="search">
                        <input className="searchInput" id="searchInput" onClick={() => { setDisplay(true) }} onChange={cityName} placeholder="search city" />
                        <button className="searchButton" style={{ backgroundColor: ThemColor.buttonColor }} variant="text" onClick={() => { fetchData(input, setErorr, dispatch) }}>search</button>
                    </div>
                    <div className="athocomplete">
                        {Display && CityAraay.map((city, index) => {
                            return (
                                <div>
                                    <div onClick={() => document.getElementById("searchInput").value = city.LocalizedName} className="option" tabIndex="0" key={index}>
                                        <span >{city.LocalizedName}</span>
                                    </div>
                                </div>

                            )
                        })}

                    </div>
                    {Display && <button className="searchButton" style={{ backgroundColor: ThemColor.buttonColor }} onClick={() => setDisplay(false)}>close</button>}
                </div>
                <div >

                    <CityCard />
                </div>
                <div className="weatherForcast">
                    {myForcast.data.map((day, index) => {
                        let forcastDays = day.Date.split("T")[0];
                        return (
                            <div className="day" key={index}>
                                <h3>day : {forcastDays}</h3>
                                <label > Temperature <br />
                                    <span > Minimum : <p style={{ display: 'inline' }}>{day.Temperature.Minimum.Value} {day.Temperature.Minimum.Unit}</p> </span>
                                    <br />
                                    <span > Maximum : <p style={{ display: 'inline' }}>{day.Temperature.Maximum.Value} {day.Temperature.Maximum.Unit}</p> </span>
                                </label>
                                <br />
                                {day.Day.Icon < 10 ? <p > <img src={`http://openweathermap.org/img/wn/0${day.Day.Icon}d@2x.png`} /> {day.Day.IconPhrase} </p> :
                                    <img src={`http://openweathermap.org/img/wn/${day.Day.Icon}d@2x.png`} />
                                }
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Home

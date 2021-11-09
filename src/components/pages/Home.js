import React from 'react'
import './Home.css'
import Header from '../features/header';
const fakeInfo = {
    "Headline": {
        "EffectiveDate": "2021-11-09T01:00:00+02:00",
        "EffectiveEpochDate": 1636412400,
        "Severity": 7,
        "Text": "Warm late Monday night",
        "Category": "heat",
        "EndDate": "2021-11-09T07:00:00+02:00",
        "EndEpochDate": 1636434000,
        "MobileLink": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2021-11-08T07:00:00+02:00",
            "EpochDate": 1636347600,
            "Temperature": {
                "Minimum": {
                    "Value": 66,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 88,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?lang=en-us",
            "Link": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?lang=en-us"
        },
        {
            "Date": "2021-11-09T07:00:00+02:00",
            "EpochDate": 1636434000,
            "Temperature": {
                "Minimum": {
                    "Value": 69,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 83,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?day=1&lang=en-us"
        },
        {
            "Date": "2021-11-10T07:00:00+02:00",
            "EpochDate": 1636520400,
            "Temperature": {
                "Minimum": {
                    "Value": 67,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 80,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?day=2&lang=en-us"
        },
        {
            "Date": "2021-11-11T07:00:00+02:00",
            "EpochDate": 1636606800,
            "Temperature": {
                "Minimum": {
                    "Value": 66,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 76,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?day=3&lang=en-us"
        },
        {
            "Date": "2021-11-12T07:00:00+02:00",
            "EpochDate": 1636693200,
            "Temperature": {
                "Minimum": {
                    "Value": 66,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 79,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/bat-yam/212477/daily-weather-forecast/212477?day=4&lang=en-us"
        }
    ]
}
function Home() {
    return (
        <div >
            <div className="HomeContainer">
                <div className="search">
                    <input className="searchInput" placeholder="search city" />
                    <button className="searchButton" variant="text">search</button>
                </div>
                <div className="weatherForcast">
                    {fakeInfo.DailyForecasts.map((day, index) => {
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

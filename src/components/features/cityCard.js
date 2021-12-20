import React from 'react'
import './cityCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../redux/weather/weather'
function CityCard() {
    const dispatch = useDispatch()
    const City = useSelector(state => state.currntCity.data)
    const ThemColor = useSelector(state => state.ThemColor.data)
    const favorite = useSelector(state => state.favorits.data)
    function addToFavorite() {
        dispatch(add(City))
    }
    const isFavo = () => {
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i].Key === City.Key) {
                return true
            }
        }
        return false
    }
    return (
        <div className="card" style={{ color: ThemColor.color }}>
            <h3>city: {City.LocalizedName}</h3>
            <h3>key: {City.Key}</h3>
            {isFavo() ? <span style={{ color: ThemColor.color }} className="saveSpan"> location saved</span> : <button style={{ backgroundColor: ThemColor.buttonColor }} type="button" className="saveButton" onClick={addToFavorite}> save locations </button>}

        </div>
    )
}

export default CityCard

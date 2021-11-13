import { configureStore } from '@reduxjs/toolkit'
import { citySlice, watherForcastSlice, favoriteSlice ,ThemColor} from './weather/weather'
const city = citySlice.reducer
const weatherForcast = watherForcastSlice.reducer
const favorite = favoriteSlice.reducer
const them = ThemColor.reducer
export const store = configureStore({
    reducer: {
        currntCity: city,
        ThemColor:them,
        favorits: favorite,
        forcast: weatherForcast
    }
})

export const AppDispatch = store.dispatch
export const RootState = store.getState
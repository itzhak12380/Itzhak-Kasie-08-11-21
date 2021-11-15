import { createSlice } from '@reduxjs/toolkit'
import { light } from '../../components/features/them'
export const citySlice = createSlice({
    name: "city",
    initialState: { data: { Key: "", LocalizedName: "", temperature: "", weather: "" } },
    reducers: {
        currntCity: (state, { payload }) => {
            state.data = payload
        }
    }
})
export const ThemColor = createSlice({
    name: "city",
    initialState: { data: light},
    reducers: {
        changeThem: (state, { payload }) => {
            state.data = payload
        }
    }
})
export const watherForcastSlice = createSlice({
    name: "forcast",
    initialState: { data: [] },
    reducers: {
        Forcast: (state, { payload }) => {
            state.data = payload
        }
    }
})

export const favoriteSlice = createSlice({
    name: "favorit-locations",
    initialState: { data: [] },
    reducers: {
        add: (state, { payload }) => {
            state.data.push(payload)
        },
        cut: (state, { payload }) => {
            state.data = state.data.filter((element, index) => {
                return index !== payload
            })
        }
    }
})
export const { currntCity } = citySlice.actions;
export const { changeThem } = ThemColor.actions;
export const { Forcast } = watherForcastSlice.actions;
export const { add, cut } = favoriteSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from './WatchListReducer'
import moviesReducer from './moviesReducer'

const store = configureStore({
    reducer:{
        watchListData: watchlistReducer,
        moviesData: moviesReducer
    }
})

export default store
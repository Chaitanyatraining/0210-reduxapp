import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from './WatchListReducer'

const store = configureStore({
    reducer:{
        watchListData: watchlistReducer,
    }
})

export default store
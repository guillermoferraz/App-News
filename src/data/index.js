import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

import newsSlice from "./newsData";

const store = configureStore({
    reducer:{
        news: newsSlice.reducer
    } 
})

export default store
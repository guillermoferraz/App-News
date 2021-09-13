import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import newsData from '../services/newsData'

export const getNews = createAsyncThunk("getNews", async (data, {rejectWithValue}) => {
    try{
        const response = await newsData.getNews(data)
        return response
    }catch (err) {
        console.error(err)
        let errorMessage = 'ERROR REDUX GET NEWS'
        return rejectWithValue({
            newsErrorGet: errorMessage
        })
    }
})

const initialState = {
    news: null,
    newsErrorGet: null,
    loadingGetNews: false
}

//Slice
const newsSlice = createSlice({
    name:"news",
    initialState,
    reducers:{
        resetNews: (state) => initialState
    },
    extraReducers:{
        [getNews.pending]: (state, action) => {
            state.loadingGetNews = false
        },
        [getNews.fulfilled]: (state, action) => {
            state.loadingGetNews = false
            state.news = action.payload
        },
        [getNews.rejected]: (state, action) => {
            state.loadingGetNews = false
            state.newsErrorGet = action.payload.newsErrorGet
        }
    }
})

export default newsSlice
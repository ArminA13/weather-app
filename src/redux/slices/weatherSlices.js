import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "47c64fa9893fb8eb43031eeb394f2699";
const BASE_URL = `https://api.openweathermap.org/data/2.5/`;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const response = await axios.get(
      `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);

export const fetchFiveDaysData = createAsyncThunk(
  "weather/fetchFiveDaysData",
  async (city) => {
    const response = await axios.get(
      `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);

const initialState = {
  weatherData: null,
  status: "empty",
  forecast: [],
  error: null,
};

const weatherSlices = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchFiveDaysData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFiveDaysData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.forecast = action.payload.list;
      })
      .addCase(fetchFiveDaysData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlices.reducer;

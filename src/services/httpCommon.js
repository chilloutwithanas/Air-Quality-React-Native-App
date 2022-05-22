import axios from "axios";

export const API_KEY = 'add_a_new_api_key_token'
export const BASE_URL = 'https://api.openweathermap.org/data/2.5/air_pollution'

export const apiClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/air_pollution',
    /* headers: {
        'Content-Type': 'application/json',
    }, */
})


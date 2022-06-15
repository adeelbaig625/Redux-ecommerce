import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTlhOWM3ZDdhMzIxMjczZmM2MTc2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTMyNTQwNSwiZXhwIjoxNjU1NTg0NjA1fQ.LTzsc5sULNrL-kidGWiIG3OAB3lX1XNISd81Mkc-IAE";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})
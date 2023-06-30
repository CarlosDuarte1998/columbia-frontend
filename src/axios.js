import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'https://columbiagoatometer.com/backend/public/api';
// axios.defaults.headers.post['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;

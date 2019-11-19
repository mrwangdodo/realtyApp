
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

// 登录接口
export const loginApi = params => axios.post('/login', params)
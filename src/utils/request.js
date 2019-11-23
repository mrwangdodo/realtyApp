import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 拦截发送的请求并操作
    // console.log('config', config)
    let token = window.localStorage.getItem('token');
    if (token) config.headers.token = token;
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 拦截响应的数据并操作
    return response.data;
  },
  error => {
    Promise.reject(error);
    /* token过期响应-------------------------- */
    /* error.response.data === '无效的token...' ? (window.location.href = 'http://127.0.0.1:8080/home#/login') : error; */
  }
);

export default {
  get(url, params = {}) {
    return axios.get(url, { params });
  },
  post(url, params) {
    console.log('1111', url, params);
    return axios.post(url, params);
  }
};

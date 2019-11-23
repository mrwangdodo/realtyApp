
import req from '../utils/request';
// import axios from 'axios'

// 登录接口
export const loginApi = params => req.post('/login', params)

// 获取房产列表
export const apiOfHouseList = params => req.get('/getHouseList', params)
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk'; // 让aciton异步, dispatch可以发送函数的插件

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
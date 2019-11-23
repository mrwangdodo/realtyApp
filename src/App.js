import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css'; // Ant Design 样式
import { Routeguard, RouteguardIsLogin } from './utils/Routeguard'; // 路由守卫高阶组件
import './utils/request';
import Main from './pages/main/Main';
import Login from './pages/login/Login.js';
import Reg from './pages/register/Reg.js';
import City from './pages/City';
import Search from './pages/Search';
import Mappage from './pages/Mappage';
// redux
import store from './pages/store/store';
import { Provider } from 'react-redux';

function App() {
  // 跟类组件的区别：没有state
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Redirect from='/' exact to='/home' />
          <Route path='/home' component={Routeguard(Main)} />
          <Route path='/login' component={RouteguardIsLogin(Login)} />
          <Route path='/register' component={Routeguard(Reg)} />
          <Route path='/city' component={Routeguard(City)} />
          <Route path='/mappage' component={Routeguard(Mappage)} />
          <Route path='/search' component={Routeguard(Search)} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;

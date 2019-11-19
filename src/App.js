import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login.js';
import Reg from './pages/register/Reg.js';
import 'antd-mobile/dist/antd-mobile.css'; // Ant Design 样式

function App() { // 跟类组件的区别：没有state
  return (
    <HashRouter>
      <Switch>
        <Redirect from='/' exact to='/home' />
        <Route path="/home" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Reg} />
        <Route component={() => <div>404</div>} />
      </Switch>
    </HashRouter>
  );
}

export default App;

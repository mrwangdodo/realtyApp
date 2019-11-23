import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Wechat from './Wechat';
import History from './History';
import My from './My';
// import { Routeguard } from '../../utils/Routeguard'; // 路由守卫高阶组件

export default class Main extends Component {
  state = {
    selectedTab: '/home',
    tabBarList: [
      { id: 0, title: '首页', icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg', selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg', badge: '', url: '/home' },
      { id: 1, title: '微聊', icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg', selectedIcon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg', badge: 2, url: '/home/wechat' },
      { id: 2, title: '历史', icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg', selectedIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg', badge: '', url: '/home/history' },
      { id: 3, title: '我的', icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg', selectedIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg', badge: '●', url: '/home/my' }
    ]
  };
  componentDidMount() {
    this.setState({ selectedTab: this.props.location.pathname });
  }
  /* renderContent(id) {
        switch (id) {
            case 0:
                return <Home />;
            case 1:
                return <Wechat />;
            case 2:
                return <History />;
            default:
                return <My />;
        }
    } */
  render() {
    const { tabBarList } = this.state;
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar unselectedTintColor='#949494' tintColor='#33A3F4' barTintColor='white'>
          {tabBarList.map((item, index) => {
            return (
              <TabBar.Item
                title={item.title}
                key={item.id}
                icon={
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      background: `url(${item.icon}) center center /  21px 21px no-repeat`
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      background: `url(${item.selectedIcon}) center center /  21px 21px no-repeat`
                    }}
                  />
                }
                // 选中状态(高亮)
                selected={this.state.selectedTab === item.url}
                // 角标
                badge={item.badge}
                // tab点击事件
                onPress={() => {
                  this.props.history.push(item.url);
                  this.setState({
                    selectedTab: item.url
                  });
                }}>
                {/* {this.renderContent(item.id)} */}
                <HashRouter>
                  <Switch>
                    <Route path='/home' exact component={()=><Home/>} />
                    <Route path='/home/wechat' component={Wechat} />
                    <Route path='/home/history' component={()=><History/>} />
                    <Route path='/home/my' component={My} />
                  </Switch>
                </HashRouter>
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}

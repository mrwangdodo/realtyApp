import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import BScroll from 'better-scroll'; // better-scroll
import './city.scss';
import { connect } from 'react-redux';
import { changeCity } from '../pages/store/action';

const cityList = require('../json/city');
// console.log('cityList', cityList);

class City extends Component {
  componentDidMount() {
    this.cityScroll = new BScroll('#scrollBox', {
      scrollX: false, //横向滚动
      click: true, // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //竖向滚动
      probeType: 3
    });
    // 城市列表滚动事件
    this.cityScroll.on('scroll', ({ y }) => {
      console.log(y);
    });
  }

  state = {
    letter: 'A'
  };

  // 点击右侧字母定位跳转
  locationJump(city) {
    this.setState({ letter: city });
    this.cityScroll.scrollToElement(`.${city}`, 400);
  }

  // 点击城市
  sendCity = city => {
    console.log(this);
    this.props.dispatch(changeCity(city));
    this.props.history.push('/home');
  };

  render() {
    const { citys, hotcity } = cityList;
    return (
      <div className='city'>
        <Flex style={{ borderBottom: '1px solid #EFEFEF', height: 50, padding: '0 20px', background: '#fff' }}>
          <i className='icon iconfont icon-locatefuben'></i> &nbsp; 当前定位城市 成都
        </Flex>
        {/* 城市列表 */}
        <div id='scrollBox' style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: '#fff', overflow: 'auto', marginTop: 51 }}>
          <ul className='content'>
            {/* 热门城市 */}
            <div style={{ padding: '5px 0', marginLeft: '-15px' }}>
              <h3 style={{ color: '#B2B2B3', fontWeight: 500 }}>热门城市</h3>
              <Flex wrap='wrap'>
                {hotcity.map((item, index) => (
                  <Flex key={index} onClick={() => this.sendCity(item)} justify='center' style={{ background: '#F1F1F1', width: 66, height: 36, margin: '0 8px 15px 0' }}>
                    {item}
                  </Flex>
                ))}
              </Flex>
            </div>
            {/* 字母城市 */}
            {citys.map((item, index) => (
              <div key={index} className={item.title} style={{ padding: '8px 50px 0 0', marginLeft: '-15px' }}>
                <h3 style={{ color: '#B2B2B3', fontWeight: 500 }}>{item.title}</h3>
                {item.lists.map((item, index) => (
                  <Flex key={index} onClick={() => this.sendCity(item)} style={{ borderTop: '1px solid #EFEFEF', height: 42 }}>
                    {item}
                  </Flex>
                ))}
              </div>
            ))}
          </ul>
        </div>
        {/* 右侧字母导航 */}
        <Flex direction='column' style={{ position: 'fixed', bottom: 20, right: 0, width: 42 }}>
          {citys.map((item, index) => (
            <Flex key={index} className={item.title === this.state.letter ? 'active' : ''} onClick={() => this.locationJump(item.title)} style={{ width: 20, height: 20, marginBottom: 3 }} justify='center'>
              {item.title}
            </Flex>
          ))}
        </Flex>
      </div>
    );
  }
}

export default connect()(City);

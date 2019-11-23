import React, { Component } from 'react';
import { Flex, WingBlank, WhiteSpace, Grid, Carousel } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { apiOfHouseList } from '../../apis/apis';
import Houselist from '../../components/Houselist';
import { addHouseBrowseHistory, setHouseList, setHouseListAsync, changeCityAsync } from '../store/action';
import './home.scss';

// redux
import { connect } from 'react-redux';

// const data = Array.from(new Array(9)).map((_val, i) => ({
//   /* Array.from(new Array(9)) === [...new Array(9)] 转伪数组为真 */
//   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//   text: `name${i}`
// }));
const data = [
  { icon: 'icon (1).png', text: '新房' },
  { icon: 'icon (2).png', text: '二手房' },
  { icon: 'icon (3).png', text: '租房' },
  { icon: 'icon (4).png', text: '商铺' },
  { icon: 'icon (5).png', text: '卖房' },
  { icon: 'icon (6).png', text: '房产' },
  { icon: 'icon (7).png', text: '小区' },
  { icon: 'icon (8).png', text: '问答' },
  { icon: 'icon (9).png', text: '哈哈' },
  { icon: 'icon (10).png', text: '呵呵' },
  { icon: 'icon (11).png', text: '喜喜' },
  { icon: 'icon (12).png', text: '嘻嘻' },
  { icon: 'icon (13).png', text: '嘿嘿' },
  { icon: 'icon (14).png', text: '嘤嘤' },
  { icon: 'icon (1).png', text: '新房' },
  { icon: 'icon (2).png', text: '二手房' },
  { icon: 'icon (3).png', text: '租房' },
  { icon: 'icon (4).png', text: '商铺' },
  { icon: 'icon (5).png', text: '卖房' },
  { icon: 'icon (6).png', text: '房产' }
].map(item => {
  return { icon: require(`../../assets/imgs/icon/${item.icon}`), text: item.text };
});

class Home extends Component {
  state = {
    city: '定位中...',
    data: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
    imgHeight: 120,
    houseList: []
  };
  componentDidMount() {
    /* 获取房产列表 */
    // this.getHouseList();

    // 异步action，发送请求把数据存进reducer
    this.props.dispatch(setHouseListAsync());
    
    if (this.props.city !== '定位中...') return;
    this.props.dispatch(changeCityAsync());

    /* 高德地图api获取城市定位 */
    /* const _this = this;
    if (!window.AMap) return;
    window.AMap.plugin('AMap.CitySearch', () => {
      var citySearch = new window.AMap.CitySearch();
      citySearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          // 查询成功，result即为当前所在城市信息
          _this.setState({ city: result.city });
        }
      });
    }); */
  }
  // 获取房产列表函数
  getHouseList = () => {
    apiOfHouseList()
      .then(res => {
        // this.setState({ houseList: res.data }); // 数据存state
        this.props.dispatch(setHouseList(res.data)); // 数据存reducer
        // console.log('getHouseList', this.props)
      })
      .catch(err => false);
  };
  // 点击顶部按钮跳转
  ToPage = url => {
    // console.log(this);
    this.props.history.push(url);
  };
  // 点击房产列表中的项 - 向reducer发送通知对象
  clickHouseItem = item => {
    // console.log(item);
    this.props.dispatch(addHouseBrowseHistory(item));
  };
  render() {
    const { city } = this.props;
    const { houseList } = this.props;
    return (
      <div className='home' style={{ backgroundImage: 'linear-gradient(to right, #FFE14D , #FFC24D)', position: 'fixed', width: '100%', height: '100%', overflow: 'scroll' }}>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WingBlank size='lg'>
          <Flex justify='between' style={{}}>
            {/* 城市 */}
            <div style={{ fontSize: 18 }} onClick={() => this.ToPage('/city')}>
              <i className='icon iconfont icon-locatefuben'></i> {city}>
            </div>
            {/* 地图 */}
            <div style={{ fontSize: 22 }} className='icon iconfont icon-ditu' onClick={() => this.ToPage('/mappage')}></div>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        {/* 大盒子 */}
        <div style={{ backgroundImage: 'linear-gradient(to bottom, #fff , #F5F5F5)', borderTopRightRadius: 24, borderTopLeftRadius: 24 }}>
          <Flex>
            <WingBlank style={{ width: '100%' }}>
              <WhiteSpace size='lg' />
              <WhiteSpace size='sm' />
              {/* 点击搜索 */}
              <div onClick={() => this.ToPage('/search')} style={{ background: '#EDEDED', height: 42, width: '100%', borderRadius: 30, lineHeight: '42px', textIndent: 20, fontSize: 17, color: '#ABABAB' }}>
                <i className='icon iconfont icon-search' style={{ fontSize: 16, color: '#ABABAB', marginRight: 5 }}></i> 点击搜索
              </div>
            </WingBlank>
          </Flex>

          {/* banner */}
          <Carousel className='my-banner' autoplay={false} infinite autoplayInterval={6000} style={{ marginTop: 20 }}>
            {this.state.data.map(val => (
              <WingBlank key={val}>
                <a href='www.baidu.com' style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight, borderRadius: 15, overflow: 'hidden' }}>
                  <img src={require(`../../assets/imgs/${val}`)} alt='' style={{ width: '100%', height: '100%', verticalAlign: 'top' }} />
                </a>
              </WingBlank>
            ))}
          </Carousel>

          {/* 宫格 */}
          <WingBlank>
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 5px #00000010', padding: '10px 0 27px 0', marginTop: 15, backgroundColor: '#fff' }}>
              <Grid data={data} hasLine={false} columnNum={5} isCarousel />
            </div>
          </WingBlank>

          {/* 猜你喜欢 */}
          <WingBlank size='lg'>
            <h3 style={{ marginBottom: 20, marginTop: 25 }}>猜你喜欢</h3>
            {houseList.map(item => {
              return <Houselist item={item} key={item.id} onClick={this.clickHouseItem} />;
            })}
          </WingBlank>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.houseList.houseList)
  return { houseList: state.houseList.houseList, city: state.city.city };
};
export default connect(mapStateToProps)(withRouter(Home));

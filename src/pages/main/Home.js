import React, { Component } from 'react';
import { Flex, WingBlank, WhiteSpace } from 'antd-mobile';

export default class Home extends Component {
    state = {
        city: '定位中...'
    }
    componentDidMount() {
        const _this = this;
        if (!window.AMap) return;
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    _this.setState({ city: result.city })
                }
            })
        })
    }
    render() {
        const { city } = this.state;
        return (
            <div style={{ background: '#F7B95F', position: 'fixed', width: '100%', height: '100%' }}>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WingBlank size='lg'>
                    <Flex justify='between' style={{}}>
                        <div style={{ fontSize: 18 }}> <i className="icon iconfont icon-locatefuben"></i> {city}></div>
                        <div style={{ fontSize: 22 }} className="icon iconfont icon-ditu"></div>
                    </Flex>

                </WingBlank>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <div style={{ background: '#fff', height: 1000, borderTopRightRadius: 24, borderTopLeftRadius: 24 }}>
                    <Flex>
                        <WingBlank style={{ width: '100%' }}>
                            <WhiteSpace size='lg' />
                            <WhiteSpace size='sm' />
                            <WhiteSpace size='sm' />
                            <div style={{ background: '#EDEDED', height: 46, width: '100%', borderRadius: 30, lineHeight: '46px', textIndent: 20, fontSize: 17, color: '#ABABAB' }}> <i className='icon iconfont icon-search' style={{ fontSize: 16, color: '#ABABAB', marginRight: 5 }}></i> 点击搜索</div>
                        </WingBlank>
                    </Flex>
                </div>

            </div>
        )
    }
}

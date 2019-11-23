import React, { Component } from 'react';
import { Flex, WingBlank } from 'antd-mobile';
import bgImg from '../../assets/imgs/logo.png';
console.log('img: ', bgImg)

export default class My extends Component {
  render() {
    return (
      <div>
        <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: '#fff' }}>
          <WingBlank size='lg'>
            <Flex justify='between' style={{ marginTop: 30 }}>
              <div>
                <h3 style={{ fontWeight: '500', fontSize: 26 }}>带泪的大汉</h3>
                <p style={{ marginTop: -14 }}>
                  {' '}
                  <i className='icon iconfont icon-shouji'></i> 13800138000{' '}
                </p>
              </div>
              <img style={{ width: 75, }} src={require('../../assets/imgs/header.png')} alt='' />
            </Flex>
            {/* <Flex style={{ height: 100, background: `red url(${require('../../assets/imgs/bg.png')})`, marginTop: 50, borderRadius: 5 }}>

            </Flex> */}
          </WingBlank>
        </div>
      </div>
    );
  }
}

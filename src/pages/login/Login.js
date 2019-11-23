import React, { Component } from 'react';
import './login.scss';
import { Flex, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Link } from 'react-router-dom';
import { loginApi } from '../../apis/apis';

class Login extends Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (error) return;
      this.getLoginRequest(value);
    });
  };

  getLoginRequest = params => {
    // const { phoneNum, password } = params;
    loginApi(params)
      .then(res => {
        const { token, data } = res.data;
        if (token) {
          window.localStorage.setItem('token', token);
          window.localStorage.setItem('phone', data.phoneNum);
          this.props.history.replace('/');
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className='login'>
        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />
        <WhiteSpace size='xl' />
        <Flex className='logo-box' justify='center'>
          <img src={require('../../assets/imgs/logo.png')} alt='logo' />
        </Flex>
        <List>
          <InputItem
            {...getFieldProps('phoneNum', {
              // onChange() { },
              rules: [{ required: true }]
            })}
            clear
            type='phone'
            placeholder='请输入手机号码'
            className='input-box'>
            <div style={{ background: `url(${require('../../assets/imgs/phone.png')}) no-repeat`, backgroundSize: '100%', height: 24, width: 16, marginTop: 3 }} />
          </InputItem>
          <WhiteSpace size='xl' />
          <InputItem
            {...getFieldProps('password', {
              rules: [
                { required: true },
                {
                  validator(rule, value, callback, source, options) {
                    var errors = [];
                    return errors;
                  }
                }
              ]
            })}
            clear
            type='password'
            placeholder='请输入密码'
            className='input-box'>
            <div style={{ background: `url(${require('../../assets/imgs/pwd.png')}) no-repeat`, backgroundSize: '100%', height: 24, width: 16, marginTop: 3 }} />
          </InputItem>
          <WhiteSpace size='xl' />
          <WhiteSpace size='xl' />
          <Flex justify='center' className='sublim-btn'>
            <Button type='primary' onClick={this.submit} style={{ backgroundImage: 'linear-gradient(to right, #F4A323 , #F46921)' }}>
              登录
            </Button>
            <WhiteSpace />
          </Flex>
        </List>
        <WhiteSpace size='xl' />
        <Flex justify='center' style={{ color: '#F57937' }}>
          <Link style={{ color: '#F57937', fontSize: '.35rem' }} to=''>
            手机快速注册
          </Link>
          &emsp;|&emsp;
          <Link style={{ color: '#F57937', fontSize: '.35rem' }} to=''>
            忘记密码>
          </Link>
        </Flex>
      </div>
    );
  }
}

export default createForm()(Login);

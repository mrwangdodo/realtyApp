import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import PropTypes from 'prop-types';

export default class Houselist extends Component {
  static defaultProps = {
    item: {},
    onClick: () => {}
  };
  static propTypes = {
    item: PropTypes.object
  };
  render() {
    //   console.log(this.props)
    let { item, onClick } = this.props;
    return (
      <Flex key={item.id} onClick={() => onClick(item)} style={{ marginBottom: 5, backgroundColor: '#fff', borderRadius: 10, padding: '7px 10px' }}>
        <img src={item.pic} alt='' style={{ width: 90, height: 90, borderRadius: 10 }} />
        <Flex justify='between' style={{ flex: 1, paddingLeft: 10 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>{item.name}</h3>
            <span style={{ color: '#979797' }}>{item.address}</span>
            <p style={{ color: '#979797', marginTop: 11 }}>4室2厅 208平</p>
          </div>
          <p style={{ color: '#FF0000', fontSize: 18, fontWeight: 'bold', width: 100, textAlign: 'right' }}>{item.price}/平</p>
        </Flex>
      </Flex>
    );
  }
}

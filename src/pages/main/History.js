import React, { Component } from 'react';
import { connect } from 'react-redux';
import Houselist from '../../components/Houselist';
import { WingBlank } from 'antd-mobile';

class History extends Component {
  render() {
    let { houseBrowseHistory } = this.props;
    // console.log(houseBrowseHistory);
    return (
      <div style={{ marginTop: 20 }}>
        <WingBlank>
          <h3 style={{ color: '#B6B6B6', fontWeight: 500, marginBottom: 15 }}>浏览记录</h3>
        </WingBlank>
        <WingBlank size='lg'>
          {houseBrowseHistory.map(item => (
            <Houselist item={item} key={item.id} />
          ))}
        </WingBlank>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  houseBrowseHistory: state.history.houseBrowseHistory
});
export default connect(mapStateToProps)(History);

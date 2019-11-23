import { apiOfHouseList } from '../../apis/apis';

/* action - 修改历史记录 */
export const addHouseBrowseHistory = item => ({
  type: 'addHouseBrowseHistory',
  item
});

/* action - 设置房产列表 */
export const setHouseList = data => ({
  type: 'setHouseList',
  data
});
/* 异步action - 设置房产列表 */
export const setHouseListAsync = params => {
  return dispatch => {
    apiOfHouseList()
      .then(res => {
        dispatch(setHouseList(res.data)); // 数据存reducer
      })
      .catch(err => false);
  };
};

/* action - 改变定位城市 */
export const changeCity = city => ({
  type: 'changeCity',
  city
});
/* 异步action - 改变定位城市 */
export const changeCityAsync = params => {
  return dispatch => {
    if (!window.AMap) return;
    window.AMap.plugin('AMap.CitySearch', () => {
      var citySearch = new window.AMap.CitySearch();
      citySearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          dispatch(changeCity(result.city));
        }
      });
    });
  };
};

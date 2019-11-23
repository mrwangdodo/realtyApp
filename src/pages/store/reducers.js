import { combineReducers } from 'redux';

/* reducer - 房产历史记录 */
function HistoryReducer(state = { houseBrowseHistory: [] }, action) {
  let houseBrowseHistory = state.houseBrowseHistory;
  switch (action.type) {
    case 'addHouseBrowseHistory':
      let acItem = action.item;
      /* houseBrowseHistory.forEach((item, index) => {
        if (item === acItem) {
          houseBrowseHistory.splice(index, 1);
          break;
        }
      }); */
      for (let i = 0; i < houseBrowseHistory.length; i++) {
        const curHistoryItem = houseBrowseHistory[i];
        if (curHistoryItem.id === acItem.id) {
          houseBrowseHistory.splice(i, 1);
          break;
        }
      }
      return {
        ...state,
        houseBrowseHistory: [action.item, ...houseBrowseHistory]
      };

    default:
      return state;
  }
}

/* reducer - 房产列表 */
function houseListReducer(state = { houseList: [] }, action) {
  switch (action.type) {
    case 'setHouseList':
      return {
        ...state,
        houseList: action.data
      };

    default:
      return state;
  }
}

/* reducer - 定位城市 */
function changeCityReducer(state = { city: '定位中...' }, action) {
  switch (action.type) {
    case 'changeCity':
      return {
        ...state,
        city: action.city
      };

    default:
      return state;
  }
}

const allReducer = combineReducers({
  history: HistoryReducer,
  houseList: houseListReducer,
  city: changeCityReducer
});
export default allReducer;

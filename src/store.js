/* import { createStore } from 'redux';

const store = createStore(reducer); */

// function reducer(state = { houseBrowseHistory: [] }, action) {
//   let houseBrowseHistory = state.houseBrowseHistory;
//   switch (action.type) {
//     case 'addHouseBrowseHistory':
//       let acItem = action.item;
//       /* houseBrowseHistory.forEach((item, index) => {
//         if (item === acItem) {
//           houseBrowseHistory.splice(index, 1);
//           break;
//         }
//       }); */
//       for (let i = 0; i < houseBrowseHistory.length; i++) {
//         const curHistoryItem = houseBrowseHistory[i];
//         if (curHistoryItem.id === acItem.id) {
//           houseBrowseHistory.splice(i, 1);
//           break;
//         }
//       }
//       return {
//         ...state,
//         houseBrowseHistory: [action.item, ...houseBrowseHistory]
//       };

//     default:
//       return state;
//   }
// }

// action创建函数
// export const addHouseBrowseHistory = item => ({
//   type: 'addHouseBrowseHistory',
//   item
// });

// export default store;

const redux = require('redux');
const createStore = redux.createStore;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;

//actions
//ADD_SUBSCRIBER type을 가진 action 생성
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';
const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER, //ADD SUBSCRIBER라는 type 프로퍼티 오브젝트를 리턴하는 것이 일반적인 컨벤션
  };
};

const addViewCount = () => {
  return {
    type: ADD_VIEWCOUNT,
  };
};

//reducer
//action을 reducer에서 핸들링
const subscriberState = {
  subscribers: 365,
};
const subscriberReducer = (state = subscriberState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1,
      };
    default:
      return state;
  }
};

const viewState = {
  viewCount: 100,
};

const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case ADD_VIEWCOUNT:
      return {
        ...state,
        viewCount: state.viewCount + 1,
      };
    default:
      return state;
  }
};

//store (action, reducer를 통해 store 제어)

//rootReducer
const rootReducer = combineReducers({
  view: viewReducer,
  subscriber: subscriberReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

//subscribe - view - dispatch

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());

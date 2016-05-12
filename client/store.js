/**
 * app
 */

//加载依赖
import Vue from 'vue';
import Revue from 'revue';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers/index';

//插入中间件
let createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)
let redux_store;

if(process.env.NODE_ENV==='production'){
  redux_store = createStoreWithMiddleware(reducer,{});
}
else{
  //载入redux debug插件
  function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState, 
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
  }
  // Store
  redux_store = configureStore({});
}
// binding the store to Vue instance
const store = new Revue(Vue, redux_store);
// expose the store for your component to use
export default store;
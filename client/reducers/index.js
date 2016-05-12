/**
 * Reducer - index
 * 汇总
 */
//加载reducers
import login from './login';

import { combineReducers } from 'redux';

/**
 * 组织注入的object
 * @param  {object} state state数据
 * @return  {object}          返回的prop数据
 */
export function propMap(state){
    return {
        routing:state.routing,
        login:state.login
    }
}

export const reducer = combineReducers({
  login
});
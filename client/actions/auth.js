/**
 * Action - auth
 * 验证方法
 */
//加载依赖
import Router from '../router';

//导入常量
import { LOGIN_STATUS_IN } from '../actions/login';

/*
 * action 创建函数
 */

/**
 * [authLoginStatus description]
 * @param  {string}   login_status  登录状态
 * @param  {boolen} check_status 须检测的状态,true为检测是否登录(当未登录时,跳转到登录页),false为检测是否未登录(当登录时,跳转到dashboard页)
 * @return  {function}                  [description]
 */
export function authLoginStatus(login_status,check_status=true){
    if(!login_status){
        throw new Error('没有须检测的状态');
        dispatch(Router.go('/'));
        return false;
    }
    return function(dispatch) {
        //检测登录,当未登录时,跳转到登录页
        if(check_status&&login_status!==LOGIN_STATUS_IN){
            dispatch(Router.go('/'));
        }
        //检测未登录,当登录时,跳转到dashboard页
        if(!check_status&&login_status===LOGIN_STATUS_IN){
            dispatch(Router.go('/dashboard/'));
        }
    }
}
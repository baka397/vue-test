/**
 * Action - login
 * 登录,控制登录操作
 */
//加载依赖
import fetch from 'isomorphic-fetch';
import {
    API_LOGIN, API_LOGOUT
}
from '../config';
import Router from '../router';

/*
 * action 类型
 */
//登入请求
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RECEIVE = 'LOGIN_RECEIVE';
export const LOGIN_ERROR = 'LOGIN_ERROR';
//登出请求
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_RECEIVE = 'LOGOUT_RECEIVE';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
//状态
export const LOGIN_STATUS_OUT = 'out'; //登出
export const LOGIN_STATUS_IN = 'in'; //登入
export const LOGIN_STATUS_LOAD = 'load'; //加载
export const LOGIN_STATUS_ERROR = 'error'; //出错
/*
 * action 创建函数
 */
//登录
export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginReceive(data) {
    return {
        type: LOGIN_RECEIVE,
        info: data
    }
}

export function loginError(data) {
    return {
        type: LOGIN_ERROR,
        msg: data
    }
}

export function loginPost(data) {
    return function(dispatch) {
        if (!data.name || !data.password) {
            dispatch(loginError('没有输入用户名或密码'));
            return false;
        }
        dispatch(loginRequest());
        let headers = new Headers(data);
        let request = new Request(API_LOGIN, {
            method: 'GET',
            headers: headers
        })
        fetch(request).then(response => response.json())
            .then(json => {
                if (json.head.status === 200) {
                    dispatch(loginReceive(json.body));
                    //跳转到登录后首页
                    //dispatch(push('/dashboard/'));
                    Router.go('/dashboard/');
                } else {
                    dispatch(loginError(json.head.msg));
                }
            }).catch(error => {
                console.log(error);
                dispatch(loginError('网络错误,请重试'));
            })
    }
}

//登出
export function logoutRequest() {
    return {
        type: LOGOUT_REQUEST
    }
}

export function logoutReceive(data) {
    return {
        type: LOGOUT_RECEIVE,
        info: data
    }
}

export function logoutError(data) {
    return {
        type: LOGOUT_ERROR,
        msg: data
    }
}

export function logoutPost() {
    return function(dispatch) {
        dispatch(logoutRequest());
        let request = new Request(API_LOGOUT, {
            method: 'GET'
        });
        fetch(request).then(response => response.json())
            .then(json => {
                if (json.head.status === 200) {
                    dispatch(logoutReceive(json.body));
                    //跳转到登录后首页
                    //dispatch(push('/'));
                    Router.go('/');
                } else {
                    dispatch(logoutError(json.head.msg));
                }
            }).catch(error =>
                dispatch(loginError('网络错误,请重试'))
            )
    }
}
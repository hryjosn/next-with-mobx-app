import axios from 'axios';
import Router from 'next/router';

const API_URL = process.env.API_URL;

export const post = async (url, data, debug = false, timeout = 6000) => {
    const token = localStorage.getItem('token');
    return axios({
        method: 'POST',
        url: API_URL + url,
        data: data, // post Data
        timeout: timeout, // timeout
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json;',
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            // const hasToken = !!response.headers.authorization;
            // if (hasToken && process.browser) {
            //     // console.log('have token')
            //     // console.log(response.headers.authorization)
            //     refreshToken(response.headers.authorization);
            // }
            if (response && debug) {
                console.log(`------------------res:${url}------------------`);
                console.log(response.data);
            }
            if (response.status !== 200) {
                alert(response.data.msg)
            }
            return response.data;
        })
        .catch((e) => {
            catchError(e);
            return e;
        });
};
export const get = async (endPoint, params, debug = false, timeout = 6000) => {
    const token = localStorage.getItem('token');
    return axios.get(API_URL + endPoint, {
            params,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Accept: 'application/json;',
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
            if (response && debug) {
                console.log(`------------------res:${url}------------------`);
                console.log(response.data);
            }
            if (response.status !== 200) {
                return response
            }
            return response.data;
        })
        .catch((e) => {
            catchError(e);
            return e;
        });
};
const catchError = (e) => {
    if (e?.response?.status === 401) {
        const localStorageKeys = Object.keys(localStorage);
        if (localStorageKeys.length > 0) {
            localStorage.clear();
        }
        Router.push('/');
    }
};

/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callGetUserInfo } from '@api';
import { parsePhoneNumber } from 'react-phone-number-input'
import Router from 'next/router';
import { callLoginUser } from "@/api/api";
import * as AllStore from "@store/store";
import { LayoutStore } from "@store";

const initState = {
    visible: false,
    params: {
        email: "",
        password: "",
    }
};


class LoginModalStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action onSubmit = async (e) => {
        e.preventDefault();
        const postData = this.params;
        const res = await callLoginUser(postData);
        if (res.status === 200) {
            localStorage.setItem("userId", res.data.id)
            localStorage.setItem("token", res.data.token)
            this.reset();
            LayoutStore.checkUserInfo()
        }
    }

    @action logout = async () => {
        Object.keys(AllStore).forEach(storeKey => {
            if (storeKey !== 'useStores') {
                AllStore[storeKey].reset();
            }
        });
        const localStorageKeys = Object.keys(localStorage);
        if (localStorageKeys.length > 0) {
            localStorage.clear();
        }
    }


}

const store = new LoginModalStore();
export default store;



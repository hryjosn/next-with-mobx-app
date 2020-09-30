/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callAddNewIssue } from '@api';
import { HomeStore } from '@store'

const initState = {
    visible: false,
    params: {
        description: "",
        title: ""
    }
};

class IssueModalStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action onSubmit = async (e) => {
        e.preventDefault();
        const postData = this.params;
        await callAddNewIssue(postData);
        this.reset();
        HomeStore.getList();
    }


}

const store = new IssueModalStore();
export default store;



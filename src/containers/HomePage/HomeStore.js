/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';

const initState = {
    snackBarContent: '',
    snackBarVisible: false,
    userId: '',
    token: '',
};
const api = {
}

class HomeStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action init = () => {
    }
    @action handleClose = () => {
        this.assignData({ snackBarVisible: false })
    }


}

const store = new HomeStore();
export default store;



/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, computed, extendObservable } from 'mobx';
import storeAction from './storeAction';

const initState = {
  lastUpdate: 0,
  light: false,
  text: 'test',
  text2: 'test'
};

class testStore extends storeAction {
  constructor() {
    super();
    // this.initState = initState;
    extendObservable(this, initState);
  }

  @action change = () => {
    // this.updateData('text', 'success')
    this.assignData({ text: 'success', text2: 'success' })
  }


  // @computed .......
  // @action updateData ......
  // @action assignData ......
  // @action reset ......
}

const store = new testStore();
export default store;



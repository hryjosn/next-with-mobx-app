/** 此處定義全部的 store */
import { reaction } from 'mobx'
import testStore from './testStore.js'

export {
    testStore,
}
export async function fetchInitialStoreState() {
    // You can do anything to fetch initial store state
    return {}
}

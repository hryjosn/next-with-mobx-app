/** 此處定義全部的 store */
import { reaction } from 'mobx'
import testStore from './testStore.js'
import LayoutStore from './LayoutStore.js'
import { MobXProviderContext } from "mobx-react";
import React from "react";

const useStores = () => React.useContext(MobXProviderContext);

export {
    useStores,
    testStore,
    LayoutStore
}

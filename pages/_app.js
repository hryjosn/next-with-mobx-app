import App from 'next/app'
import React from 'react'
import { fetchInitialStoreState, testStore } from '../src/store'
import { Provider } from 'mobx-react'
import * as stores from '../src/store'

class MyMobxApp extends App {

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)
    const initialStoreState = await fetchInitialStoreState()

    return {
      ...appProps,
      initialStoreState,
    }
  }

  // Hydrate serialized state to store
  // static getDerivedStateFromProps(props, state) {
  //   state.store.hydrate(props.initialStoreState)
  //   // return state
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...stores}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
export default MyMobxApp

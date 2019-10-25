import React from 'react'
import Page from '../src/components/Page'
import Clock from "../src/components/Clock";
import { inject, observer } from 'mobx-react'
import "../src/styles/styles.scss"

@inject('testStore')  @observer
class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { text,text2, change } = this.props.testStore;
    return (<Page title="Index Page" linkTo="/other">
      <div style={{ padding: '10px' }}>
        {text}
      </div>
      <div style={{ padding: '10px' }}>
        {text2}
      </div>
      <button style={{ padding: '10px' }} onClick={change}>
        click
      </button>
      <div className="example">
        Hello World!
      </div>
    </Page>)
  }
}

export default Counter

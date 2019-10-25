import React from 'react'
import Page from '../src/components/Page'
import { inject } from "mobx-react";
@inject('testStore')

class Counter extends React.Component {
  render() {
    return (<Page title="Other Page" linkTo="/">
        <div>
          {this.props.text}
        </div>
      </Page>
    )

  }
}
export default Counter

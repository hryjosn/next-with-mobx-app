import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'

@inject('testStore')
@observer
class Page extends React.Component {

  render() {
    const { children } = this.props
    return (
      <div>
        <div>
          {children}
        </div>
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    )
  }
}

export default Page

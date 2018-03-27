import React, { Component } from 'react'
import { AccountsReactComponent } from 'meteor/meteoreact:accounts'

class App extends Component {
  state = {
    theme : 'semantic'
  }

  render () {
    return (
      <div id='content'>
        <div id='accounts-wrapper' className={this.state.theme}>
          <AccountsReactComponent />
        </div>
      </div>
    )
  }
}

export default App

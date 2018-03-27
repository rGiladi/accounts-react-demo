import React, { Component, Fragment } from 'react'
import { AccountsReact, AccountsReactComponent } from 'meteor/meteoreact:accounts'

/* Components */
import Navbar from './Navbar'

class App extends Component {

  state = {
    theme : 'semantic'
  }

  render () {
    return (
      <Fragment>
        <Navbar
          items={this.navbar}
          activeItem={this.state.theme}
        />
        <div id='content'>
          <div id='accounts-wrapper' className={this.state.theme}>
            <AccountsReactComponent key={this.state.theme} />
          </div>
        </div>
      </Fragment>
    )
  }

  navbar = {
    left: [
      {
        key: 'unstyled',
        text: 'Unstyled',
        onClick: () => {
          AccountsReact.style(Package['meteoreact:accounts-unstyled'], true)
          this.setState({ theme: 'unstyled' })
        }
      },
      {
        key: 'semantic',
        text: 'Semantic',
        onClick: () => {
          AccountsReact.style(Package['meteoreact:accounts-semantic'], true)
          this.setState({ theme: 'semantic' })
        }
      }
    ],
    right: [
      { key: 'logout', text: 'Logout' }
    ]
  }
}

export default App

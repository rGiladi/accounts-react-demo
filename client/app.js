import React, { Component, Fragment } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { AccountsReact, AccountsReactComponent } from 'meteor/meteoreact:accounts'

/* Components */
import Navbar from './Navbar'

class App extends Component {

  state = {
    theme : 'semantic'
  }

  render () {
    const { user } = this.props

    return (
      <Fragment>
        <Navbar
          items={this.navbar}
          activeItem={this.state.theme}
          user={user}
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
      {
        key: 'logout',
        text: 'Logout',
        onClick: () => {
          AccountsReact.logout()
        },
        action: true
      }
    ]
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  }
})(App)

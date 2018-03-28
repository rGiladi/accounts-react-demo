import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { AccountsReact } from 'meteor/meteoreact:accounts'


/* Includes */

import Navbar from './includes/Navbar'
import Footer from './includes/Footer'

/* Pages */

import Home from './pages/Home'
import Auth from './pages/Auth'

class App extends Component {

  state = {
    theme : 'semantic'
  }

  render () {
    const { user }  = this.props
    const { theme } = this.state

    return (
      <Fragment>
        <Navbar
          items={this.navbar}
          activeItem={this.state.theme}
          user={user}
        />
        <Router>
          <Fragment>

            <div id='content'>
              <Route exact path='/' render={props => (
                <Home
                  user={user}
                  theme={theme}
                  {...props}
                />
              )} />

              <Auth
                theme={theme}
              />
            </div>

            <Route path='*' component={Footer} />
          </Fragment>
        </Router>
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
    auth: {
      right: [
        {
          key: 'logout',
          text: 'Logout',
          onClick: () => {
            AccountsReact.logout()
          },
          action: true
        }
      ],
      left: [
        {
          key: 'forgotPwd',
          text: 'Forgot your password?',
          onClick: () => {
            //
          }
        },
        {
          key: 'changePwd',
          text: 'Change you password',
          onClick: () => {

          }
        }
      ]
    }
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  }
})(App)

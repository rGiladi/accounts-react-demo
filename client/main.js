import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import '/imports/both/startup'
import { AccountsReact } from 'meteor/meteoreact:accounts'

Meteor.startup(() => {

  // This call sets the default package to display.
  AccountsReact.style(Package['meteoreact:accounts-semantic'], true)

  const sub = Meteor.subscribe('users.user')

  const interval = setInterval(() => {
    if (sub.ready()) {
      clearInterval(interval)
      ReactDOM.render(
        <App />,
        document.getElementById('root')
      )
    }
  }, 333)
})

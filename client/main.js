import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import { AccountsReact } from 'meteor/meteoreact:accounts'
import '/imports/both/startup'

AccountsReact.style(Package['meteoreact:accounts-semantic'])

Meteor.startup(() => {
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

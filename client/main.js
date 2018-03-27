import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import { AccountsReact } from 'meteor/meteoreact:accounts'

AccountsReact.style(Package['meteoreact:accounts-semantic'])

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
})

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
})

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight'

import AccountsBox from '/client/components/AccountsBox'

class User extends Component {

  render () {
    const {
      user,
      theme
    } = this.props

    const service = user.services ? user.services['google'] || user.services['facebook'] : false
    if (service) {
      const serviceName = user.services['google'] ? 'Google' : 'Facebook'

      return (
        <div className='user-data'>
          <h1>This is all the data about you provided by {serviceName}</h1>
          <Highlight className='json '>
            {JSON.stringify(service, null, 2)}
          </Highlight>
        </div>
      )
    }

    return (
      <AccountsBox
        theme={theme}
        state='changePwd'
      />
    )
  }

}

User.propTypes = {
  theme: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default User

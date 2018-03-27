import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'

class Navbar extends Component {

  state = {
    activeItem: this.props.activeItem
  }

  render () {
    const {
      left,
      right,
      both
    } = this.props.items

    const MenuFactory = this.MenuFactory

    return (
      <div className='baz navbar'>
        <MenuFactory items={left}  clazz='left'  />
        <MenuFactory items={right} clazz='right' />
        <MenuFactory items={both}  clazz='both'  />
      </div>
    )
  }

  MenuFactory = ({ items, clazz }) => {
    return items ? (
      <div className={clazz}>
        {items.map(item => (
          <NavItem
            key={item.key || item.text}
            text={item.text}
            active={this.state.activeItem === item.key}
            onClick={() => this.wrapClick(item)}
          />
        ))}
      </div>
    ) : null
  }

  wrapClick = ({ key, onClick }) => {
    this.setState({ activeItem: key })
    onClick()
  }
}

Navbar.propTypes = {
  items: PropTypes.object.isRequired,
  activeItem: PropTypes.string
}

export default Navbar

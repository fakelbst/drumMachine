import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'
import MdKeyboard from 'react-icons/lib/md/keyboard'

const randomColorIndex = Math.floor(Math.random() * 3)

class ControlPanel extends Component {

  render() {
    const colors = this.props.colors
    const actions = this.props.actions

    return (
      <div className={style.main} style={{backgroundColor: '#'+colors.bgc, color: '#'+colors.cs[randomColorIndex]}}>
        <MdKeyboard size={50} onClick={() => actions.toggleShortcut()} style={{cursor: 'pointer'}}/>
      </div>
    )
  }
}

export default ControlPanel

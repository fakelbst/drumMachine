import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class DrumKit extends Component {

  render() {
    const { sources, actions } = this.props
    return (

      <div className={style.main}>
        {sources.map(source => 
          <div className={classnames({[style.block]: true, [style['block-'+source.title]]:true})} onClick={(el) => actions.playSound(source.title)}>
            <span>{source.title.slice(1)}</span>
          </div>
        )}
      </div>
    )
  }
}

export default DrumKit

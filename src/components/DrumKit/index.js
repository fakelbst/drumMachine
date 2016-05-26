import React, { Component } from 'react'
import GoUnmute from 'react-icons/lib/go/unmute'
import classnames from 'classnames'
import style from './style.css'

class DrumKit extends Component {

  render() {
    const { sources, actions } = this.props
    return (

      <div className={style.main}>
        {sources.map(source =>
          <div key={source.title} className={classnames({[style.block]: true, [style['block-'+source.title]]:true})} onClick={(el) => actions.playSound(source.title)}>
            <span>{source.title.slice(1)}</span>
            <GoUnmute className={classnames({[style.icon]: true, [style.playing]: source.playing})} />
          </div>
        )}
      </div>
    )
  }
}

export default DrumKit

import React, { Component } from 'react'
import GoUnmute from 'react-icons/lib/go/unmute'
import classnames from 'classnames'
import style from './style.css'

class DrumKit extends Component {

  render() {
    const { sources, actions } = this.props
    const columns = ['_cymbal', '_hihat', '_snare', '_bass', '_tom']
    return (
      <div className={style.main}>
        {columns.map(c => 
          <div className={classnames({[style.block]: true, [style['block-'+c]]:true})}>
            {sources.map(source =>
              source.type === c ? 
              <div className={classnames({[style.block]: true})} onClick={(el) => actions.playSound(source.title)}>
                <span>{source.title.slice(1)}</span>
                <GoUnmute className={classnames({[style.icon]: true, [style.playing]: source.playing})} />
                <span className={style.bottom}></span>
              </div> : ''
            )}
          </div>
        )}
      </div>
    )
  }
}

export default DrumKit

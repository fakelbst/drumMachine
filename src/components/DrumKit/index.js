import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class DrumKit extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { playSound } = this.props.actions
    return (
      <div className={style.main}>
        <div className={classnames({[style.block]: true, [style['block-1']]:true})} onClick={(el) => playSound('_cymbal')}>
          <span>Cymbal</span>
        </div>
        <div className={classnames({[style.block]: true, [style['block-2']]:true})} onClick={(el) => playSound('_hihat')}>
          <span>hi-hat</span>
        </div>
        <div className={classnames({[style.block]: true, [style['block-3']]:true})} onClick={(el) => playSound('_bass')}>
          <span>Bass</span>
        </div>
        <div className={classnames({[style.block]: true, [style['block-4']]:true})} onClick={(el) => playSound('_snare')}>
          <span>snare</span>
        </div>
        <div className={classnames({[style.block]: true, [style['block-5']]:true})} onClick={(el) => playSound('_tom1')}>
          <span>tom1</span>
        </div>
        <div className={classnames({[style.block]: true, [style['block-6']]:true})} onClick={(el) => playSound('_tom3')}>
          <span>tom3</span>
        </div>
      </div>
    )
  }
}

export default DrumKit

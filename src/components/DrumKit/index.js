import React, { Component } from 'react'
import GoUnmute from 'react-icons/lib/go/unmute'
import classnames from 'classnames'
import style from './style.css'
import ControlPanel from '../../components/ControlPanel'

const keyMap = {
  82: '_cymbal', // r
  68: '_hihat_open', // d
  67: '_hihat_closed', // c
  86: '_bass', // v
  70: '_snare', // f
  72: '_tom1', // h
  74: '_tom2', // j
  75: '_tom3' // k
}
const titleMap = {
  '_cymbal': 'R',
  '_hihat_open': 'D',
  '_hihat_closed': 'C',
  '_bass': 'V',
  '_snare': 'F',
  '_tom1': 'H',
  '_tom2': 'J',
  '_tom3': 'K'
}

class DrumKit extends Component {

  componentWillMount() {
    this.setState({
      randomIndex: Math.floor(Math.random() * this.props.colors.length)
    })
  }

  componentDidMount() {
    let that = this
    document.addEventListener('keydown', function(e){
      that.props.actions.playSound(keyMap[e.keyCode])
    })
  }

  render() {
    const { sources, actions, colors, shortcutDisplay } = this.props
    const columns = ['_cymbal', '_hihat', '_snare', '_bass', '_tom']
    let randomIndex = this.state.randomIndex

    return (
      <div className={style.containers}>
        <div className={style.main}>
          {columns.map((c, index) =>
            <div className={classnames({[style.block]: true})} style={{backgroundColor: '#'+colors[randomIndex][index]}}>
              {sources.map(source =>
                source.type === c ?
                <div className={classnames({[style.block]: true})} onClick={(el) => actions.playSound(source.title)} onKeyPress={this.handleKeyPress}>
                  <span className={style.title}>{source.title.slice(1)}</span>
                  { shortcutDisplay? <span className={style.shortcut}>{titleMap[source.title]}</span>: '' }
                  <GoUnmute className={classnames({[style.icon]: true, [style.playing]: source.playing})} style={{animationDuration: Math.round(source.el.duration * 100) / 100 + 's'}} />
                  <span className={style.bottom}></span>
                </div> : ''
              )}
            </div>
          )}
        </div>
        <ControlPanel colors={{bgc: colors[randomIndex][4], cs: [colors[randomIndex][0], colors[randomIndex][1], colors[randomIndex][2]] }} classnames={style.controls} actions={actions}></ControlPanel>
      </div>
    )
  }
}

export default DrumKit

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
        {columns.map((c, index) =>
          <div className={classnames({[style.block]: true})} style={{backgroundColor: '#'+colorPatterns[randomIndex][index]}}>
            {sources.map(source =>
              source.type === c ?
              <div className={classnames({[style.block]: true})} onClick={(el) => actions.playSound(source.title)}>
                <span>{source.title.slice(1)}</span>
                <GoUnmute className={classnames({[style.icon]: true, [style.playing]: source.playing})} style={{animationDuration: Math.round(source.el.duration * 100) / 100 + 's'}} />
                <span className={style.bottom}></span>
              </div> : ''
            )}
          </div>
        )}
      </div>
    )
  }
}

const colorPatterns = [
  [ "FCEBB6", "5E412F", "F07818", "78C0A8", "F0A830" ],
  [ "F8F4D7", "F4DEC2", "F4B36C", "E98977", "F2B4A8" ],
  [ "ECD078", "D95B43", "C02942", "542437", "53777A" ],
  [ "FFFFFF", "F2EFEB", "FAF5ED", "EDE9E4", "F0ECE9" ],
  [ "F9CDAD", "FE4365", "FC9D9A", "83AF9B", "C8C8A9" ],
  [ "027B7F", "FFA588", "D62957", "BF1E62", "572E4F" ],
  [ "E7E4D5", "C84648", "FFF3DB", "D3C8B4", "703E3B" ],
  [ "E8D3A9", "E39B7D", "6E6460", "89B399", "BCBFA3" ],
  [ "BBC793", "77CCA4", "827551", "F1EEC5", "FECC99" ],
  [ "EFD88B", "FE4D83", "10C4C0", "E5D3BB", "433B50" ],
  [ "D07E0E", "E9DEB0", "2F615E", "482C21", "A73E2B" ],
  [ "2A0308", "924F1B", "E2AC3F", "F8EDC6", "7BA58D" ],
  [ "140D1A", "42142A", "FF2E5F", "FFD452", "FAEECA" ],
  [ "EAC388", "DD423E", "3F2C26", "A2A384", "C5AD4B" ]
]
const randomIndex = Math.floor(Math.random() * colorPatterns.length + 1) + 1

export default DrumKit

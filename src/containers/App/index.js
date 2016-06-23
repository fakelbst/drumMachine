import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DActions from '../../actions'
import DrumKit from '../../components/DrumKit'
import Sounds from '../../components/Sounds'
import style from './style.css'

const colorPatterns = [
  [ "FCEBB6", "5E412F", "F07818", "78C0A8", "F0A830" ],
  [ "F8F4D7", "F4DEC2", "F4B36C", "E98977", "F2B4A8" ],
  [ "ECD078", "D95B43", "C02942", "542437", "53777A" ],
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

class App extends Component {
  render() {
    const { sources, actions, shortcutDisplay } = this.props
    return (
      <div className={style.fullheight}>
        <DrumKit sources={sources} actions={actions} colors={colorPatterns} shortcutDisplay={shortcutDisplay}/>
        <Sounds sels={{}} actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sources: state.plays,
    shortcutDisplay: state.controls
  }
}

function mapDispatchToProps(dispatch) {
  return {
     actions: bindActionCreators(DActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

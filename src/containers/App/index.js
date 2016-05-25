import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DActions from '../../actions'
import DrumKit from '../../components/DrumKit'
import Sounds from '../../components/Sounds'
import style from './style.css'

class App extends Component {
  render() {
    const { actions } = this.props
    return (
      <div className={style.fullheight}>
        <DrumKit actions={actions}/>
        <Sounds sels={{}} actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playing: state.playing
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

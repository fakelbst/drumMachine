import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Sounds extends Component {

  componentDidMount() {
    for(let k in this.props.sels){
      this.props.actions.setEl({dom: this.props.sels[k], title: k})
    }
  }

  handlePlayEnded(title) {
    this.props.actions.playEnded(title)
  }

  render() {

    return (
      <div>
        <audio onEnded={() => this.handlePlayEnded('_hihat')} preload="auto" ref={(c) => this.props.sels['_hihat'] = c}>
          <source src="public/media/Yamaha-RX15-Closed-Hi-Hat.wav" type="audio/wav" />
        </audio>
        <audio onEnded={() => this.handlePlayEnded('_tom1')} preload="auto" ref={(c) => this.props.sels['_tom1'] = c}>
          <source src="public/media/Yamaha-RX15-Tom1.wav" type="audio/wav" />
        </audio>
        <audio onEnded={() => this.handlePlayEnded('_tom3')} preload="auto" ref={(c) => this.props.sels['_tom3'] = c}>
          <source src="public/media/Yamaha-RX15-Tom3.wav" type="audio/wav" />
        </audio>
        <audio onEnded={() => this.handlePlayEnded('_snare')} preload="auto" ref={(c) => this.props.sels['_snare'] = c}>
          <source src="public/media/Yamaha-RX15-Hi-Tune-Snare.wav" type="audio/wav" />
        </audio>
        <audio onEnded={() => this.handlePlayEnded('_cymbal')} preload="auto" ref={(c) => this.props.sels['_cymbal'] = c}>
          <source src="public/media/Yamaha-RX15-Crash-Cymbal.wav" type="audio/wav" />
        </audio>
        <audio onEnded={() => this.handlePlayEnded('_bass')} preload="auto" ref={(c) => this.props.sels['_bass'] = c}>
          <source src="public/media/Yamaha-RX15-Bass-Drum.wav" type="audio/wav" />
        </audio>
      </div>
    )
  }
}

export default Sounds

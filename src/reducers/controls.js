import { handleActions } from 'redux-actions'

const initialState = [{
  el: '',
  title: '_cymbal',
  playing: false,
  type: '_cymbal'
}, {
  el: '',
  title: '_hihat_closed',
  playing: false,
  type: '_hihat'
}, {
  el: '',
  title: '_hihat_open',
  playing: false,
  type: '_hihat'
}, {
  el: '',
  title: '_bass',
  playing: false,
  type: '_bass'
}, {
  el: '',
  title: '_snare',
  playing: false,
  type: '_snare'
}, {
  el: '',
  title: '_tom1',
  playing: false,
  type: '_tom'
}, {
  el: '',
  title: '_tom2',
  playing: false,
  type: '_tom'
}, {
  el: '',
  title: '_tom3',
  playing: false,
  type: '_tom'
}]

export default handleActions({
  'set el' (state, actions) {
    return state.map(s => {  
      return s.title === actions.payload.title 
      ? { ...s, el: actions.payload.dom }: s
    })
  },

  'play ended' (state, actions) {
    return state.map(s => {  
      return s.title === actions.payload 
      ? { ...s, playing: false }: s
    })
  },

  'playsound' (state, actions) {
    return state.map(s => {  
      if(s.title === actions.payload ){
        s.el.play();
        return { ...s, playing: true }
      }
      else{
        return s;
      }
    })
  }
}, initialState)

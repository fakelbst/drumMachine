import { handleActions } from 'redux-actions'

const initialState = [{
  el: '',
  title: '_cymbal',
  playing: false
}, {
  el: '',
  title: '_hihat',
  playing: false
}, {
  el: '',
  title: '_bass',
  playing: false
}, {
  el: '',
  title: '_snare',
  playing: false
}, {
  el: '',
  title: '_tom1',
  playing: false
}, {
  el: '',
  title: '_tom3',
  playing: false
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

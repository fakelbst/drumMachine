import { handleActions } from 'redux-actions'

export default handleActions({
  'shortcut display' (state, actions) {
    return !state
  }
}, 0)

import { combineReducers } from 'redux'
import plays from './plays'
import controls from './controls'

export default combineReducers({
  plays,
  controls
})

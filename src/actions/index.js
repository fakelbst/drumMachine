import { createAction } from 'redux-actions'

export const setEl = createAction('set el')
export const play = createAction('play')
export const playSound = createAction('playsound')
export const playEnded = createAction('play ended')
export const toggleShortcut = createAction('shortcut display')

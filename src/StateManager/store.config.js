import { useActions } from "./useActions";
import {
  defaultState as notelistDefault,
  notelistReducer,
  notelistActions,
  useNotelistGetters,
} from '../Features/Notelist/notelist.store'

export const initialState = {
  notelist: notelistDefault,
}

export const reducer = ({ notelist }, action) => {
  return {
    notelist: notelistReducer(notelist, action),
  }
}

export const useMyGetters = state => ({
  ...useNotelistGetters(state)
})

const useNotelistActions = dispatch => useActions(dispatch, notelistActions)

export const useMyActions = dispatch => ({
  notelist: useNotelistActions(dispatch),
})
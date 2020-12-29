export const defaultState = {}

export const notelistReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case 'addNote':
      return {
        ...state,
        [payload.note.id]: payload.note
      }
    case 'setNotes':
      return {
        ...payload.notes
      }
    case 'deleteNote':
      return {
        ...Object.keys(state).map(x => state[x]).filter(n => n.id !== payload.id),
      }

    default:
      return state;
  }
}

export const notelistActions = {
  setNotes: payload => ({
    type: 'setNotes',
    payload
  }),
  addNote: payload => ({
    type: 'addNote',
    payload
  }),
  updateNote: payload => ({
    type: 'updateNote',
    payload
  }),
  deleteNote: payload => ({
    type: 'deleteNote',
    payload
  }),
}
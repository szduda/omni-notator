export const defaultState = {}

export const notelistReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case 'addNote':
      return {
        ...state,
        [payload.note.date]: payload.note
      }
    case 'setNotes':
      return {
        ...payload.notes
      }
    case 'deleteNote':
      const {[payload.date]: removed, ...rest} = state
      return {
        ...rest
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

export const useNotelistGetters = ({ notelist }) => ({
  getNote: ({ date }) => notelist[date]
})
const fetchNotes = () => JSON.parse(localStorage.getItem('omni-notator-notes'))

export const DataService = {
  fetchNotes,
  addNote: ({ note }) => {
    const notes = fetchNotes()
    localStorage.setItem('omni-notator-notes', JSON.stringify({ ...notes, [note.date]: note }))
  },
  deleteNote: ({ date }) => {
    const notes = fetchNotes()
    const { [date]: remove, ...rest } = notes
    localStorage.setItem('omni-notator-notes', JSON.stringify({ ...rest }))
  }
}

export default DataService
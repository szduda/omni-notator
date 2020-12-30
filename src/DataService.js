export const DataService = {
  fetchNotes: async () => {
    const date = 1609340000000
    const notes = {
      1609340000000: {id: 8, date, markdownText: '# This is markdown\n__Some text__  And here some long text  multiline as well  test everything.\n## Another heading' }, 
      [date-1800000]: {id: 1, date: date - 1800000, markdownText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }, 
      [date-3600000]: {id: 2, date: date - 3600000, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      1600000000000: {id: 3, date: 1600000000000, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      1609000000000: {id: 4, date: 1609000000000, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    }
    return notes
  },
  addNote: async ({ item }) => {
    const response = { key: 'fake-id' }
    return response.key
  }
}

export default DataService
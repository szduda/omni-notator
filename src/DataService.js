export const DataService = {
  fetchNotes: async () => {
    const date = Date.now();
    const notes = [
      {id: 8, date, markdownText: '# This is markdown __Some text__' }, 
      {id: 1, date: date - 1800000, markdownText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }, 
      {id: 2, date: date - 3600000, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      {id: 3, date: date - 3600001, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      {id: 4, date: date - 3600002, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      {id: 5, date: date - 3600003, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      {id: 6, date: date - 3600004, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      {id: 7, date: date - 3600005, markdownText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ];
    return notes
  },
  addNote: async ({ item }) => {
    const response = { key: 'fake-id' }
    return response.key
  }
}

export default DataService
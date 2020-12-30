import React, { useState, useEffect, useRef } from 'react'
import { useStore } from '../../StateManager/Store'
import { Notelist } from './Notelist'
import { getNextId } from '../../appHelper'

export const useNotelist = ({ DataService }) => {
  const useNotelistContext = () => {
    const { state, actions } = useStore()
    const { notelist } = state
    const [visibility, setVisibility] = useState({
      form: false
    })

    const fetchNotes = useRef(DataService.fetchNotes)
    const setNotes = useRef(actions.notelist.setNotes)

    const [shouldRefresh, setShouldRefresh] = useState(!!!Object.keys(state.notelist || {}).length)

    useEffect(() => {
      if (!shouldRefresh) return
      setNotes.current({ notes: fetchNotes.current() })
      setShouldRefresh(false)
    }, [fetchNotes, setNotes, shouldRefresh])

    const addNote = note => {
      const tempItem = { ...note, id: getNextId() }
      actions.notelist.addNote({ note: tempItem })
      DataService.addNote({ note })
    }

    const deleteNote = date => {
      actions.notelist.deleteNote({ date })
      DataService.deleteNote({ date })
    }

    const notes = Object.values(notelist);
    
    return { notes, addNote, deleteNote, visibility, setVisibility }
  }

  return () => <Notelist {...{ useNotelistContext }} />
}
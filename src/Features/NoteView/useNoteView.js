import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useStore } from '../../StateManager/Store'
import { NoteView } from './NoteView'
import { Redirect } from 'react-router-dom'
import { getRouteParam } from '../../appHelper'

export const useNoteView = ({ DataService }) => {
  const useNoteViewContext = () => {
    const { state, actions, getters } = useStore()
    const { pathname } = useLocation()
    const fetchNotes = useRef(DataService.fetchNotes)
    const setNotes = useRef(actions.notelist.setNotes)
    const dateParam = Number(getRouteParam({ pathname, param: 'note' }))

    const [shouldRefresh, setShouldRefresh] = useState(!!!Object.keys(state.notelist || {}).length)

    useEffect(() => {
      if (!shouldRefresh) return
      setNotes.current({ notes: fetchNotes.current() })
      setShouldRefresh(false)
    }, [fetchNotes, setNotes, shouldRefresh])

    const note = getters.getNote({ date: dateParam })

    const deleteNote = () => {
      actions.notelist.deleteNote({ date: note?.date })
      DataService.deleteNote({ date: note?.date })
    }

    const redirectGuard = !shouldRefresh && !!!note && <Redirect to={'/'} />

    return { note, deleteNote, redirectGuard }
  }

  return () => <NoteView {...{ useNoteViewContext }} />
}
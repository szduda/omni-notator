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
    const [note, setNote] = useState(shouldRefresh ? null : getters.getNote({ date: dateParam }))

    useEffect(() => {
      const asyncEffect = async () => {
        setNotes.current({ notes: await fetchNotes.current() })
        setShouldRefresh(false)
      }
      shouldRefresh && asyncEffect()
    }, [fetchNotes, setNotes, shouldRefresh])

    useEffect(() => {
      const currentNote = getters.getNote({ date: dateParam })
      setNote(currentNote)
    }, [dateParam, getters])

    const deleteNote = () => {
      actions.notelist.deleteNote({ date: note?.date })
      DataService.deleteNote({ date: note?.date })
    }
    const redirectGuard = !shouldRefresh && !!!note && <Redirect to={'/'} />

    return { note, deleteNote, redirectGuard }
  }

  return () => <NoteView {...{ useNoteViewContext }} />
}
/** @jsx jsx */
import { useRef, forwardRef } from 'react'
import { jsx, css, } from '@emotion/core'
import { Box } from './Box'
import { sortByDate } from '../../appHelper'
import { AddNoteForm, AddFormTrigger } from './AddNote'

const Wrapper = forwardRef((props, ref) => (
  <div ref={ref} css={css`
  padding: 64px 4px calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  `} {...props} />
))


export const Notelist = ({ useNotelistContext }) => {
  const { notes, addNote, deleteNote, visibility, setVisibility } = useNotelistContext()

  const addNoteClick = () => {
    setVisibility({ form: !visibility.form })
    formRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const submitForm = item => {
    setVisibility({ form: false })
    addNote(item)
  }

  const formRef = useRef()

  return (
    <Wrapper ref={formRef}>
      <AddNoteForm onSubmit={submitForm} formVisible={visibility.form} />
      {notes.sort(sortByDate).map((item, key) =>
        <Box {...{
          key,
          item,
          onDelete: deleteNote,
        }} />
      )}
      <AddFormTrigger onClick={addNoteClick} />
    </Wrapper>
  )
}
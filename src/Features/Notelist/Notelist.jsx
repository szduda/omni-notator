/** @jsx jsx */
import { useRef, forwardRef } from 'react'
import { jsx, css, } from '@emotion/core'
import { Box } from '../../Components/Box'
import { sortByDate } from '../../appHelper'
import { AddNoteForm, AddFormTrigger } from '../../Components/AddNote'

const Wrapper = forwardRef((props, ref) => (
  <div ref={ref} css={css`
  padding: 68px 4px 64px;
  display: flex;
  flex-direction: column;
  `} {...props} />
))


export const Notelist = ({ useNotelistContext }) => {
  const { notes, addNote, deleteNote, visibility, setVisibility } = useNotelistContext()

  const addNoteClick = () => {
    setVisibility({ form: !visibility.form })
    if (visibility.form) {
      formRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
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
/** @jsx jsx */
import { useRef, forwardRef } from 'react'
import { jsx, css } from '@emotion/core'
import { Box } from '../../Components/Box'
import { sortByDate } from '../../appHelper'
import { AddNoteForm, AddFormTrigger } from '../../Components/AddNote'
import { colors } from '../../theme'

const Wrapper = forwardRef((props, ref) => (
  <div ref={ref} css={css`
  padding: 68px 4px 64px;
  display: flex;
  flex-direction: column;
  `} {...props} />
))

const EmptyList = () => (
  <h3 css={css`
    padding-left: 12px;
    font-weight: 400;
    color: ${colors.white};
  `}>
    Your notepad is empty
  </h3>
)

export const Notelist = ({ useNotelistContext }) => {
  const { notes, addNote, deleteNote, visibility, setVisibility } = useNotelistContext()

  const addNoteClick = () => {
    setVisibility({ form: !visibility.form })
    if (!visibility.form) {
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
      {(!notes || !notes.length) && <EmptyList />}
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
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Box } from '../../Components/Box'

const Wrapper = props => (
  <div css={css`
  padding: 68px 4px 64px;
  display: flex;
  flex-direction: column;
  `} {...props} />
)

export const NoteView = ({ useNoteViewContext }) => {
  const { note, deleteNote, redirectGuard } = useNoteViewContext()

  return (
    <Wrapper>
      {redirectGuard}
      <Box rich item={note} onDelete={deleteNote} />
    </Wrapper>
  )
}
/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core'
import { Box } from '../../Components/Box'
import { colors } from '../../theme'

const Wrapper = props => (
  <div css={css`
  padding: 68px 4px 64px;
  display: flex;
  flex-direction: column;
  `} {...props} />
)

export const NotelistLink = () => (
  <Link 
    to="/"
    css={css`
      align-self: flex-end;
      right: unset;
      cursor: pointer;
      z-index: 1000;
      position: fixed;
      top: 16px;
      display: flex;
      padding: 8px 12px;
      margin: 0;
      color: ${colors.yellow} !important;
  `}>
    Show list
  </Link>
)

export const NoteView = ({ useNoteViewContext }) => {
  const { note, deleteNote, redirectGuard } = useNoteViewContext()

  return (
    <Wrapper>
      {redirectGuard}
      <NotelistLink/>
      <Box rich item={note} onDelete={deleteNote} />
    </Wrapper>
  )
}
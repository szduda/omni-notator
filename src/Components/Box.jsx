/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx, css, } from '@emotion/core'
import { colors, Flex, RoundButton, Icons } from '../theme'
import ReactMarkdown from 'react-markdown'

const Wrapper = ({ collapsed, ...rest }) => (
  <Flex.Col
    valign="space-between"
    css={css`
      background: ${colors.white};
      color: ${colors.black};
      padding: 0 16px;
      margin: 0 0 8px 0;
      border-radius: 4px;
      box-shadow: 0 2px 4px 0 ${colors.grayDark}44;
      position: relative;
      overflow: hidden;
    `} {...rest} />
)

const DeleteNoteButton = ({ deleteNote }) => (
  <RoundButton
    top
    onClick={deleteNote}
    css={css`
      box-shadow: none; 
      background: ${colors.grayLighter}; 
      border: none; 
      right: 8px; 
      top: 8px;
      z-index: 100;
  `}>
    <Icons.Delete />
  </RoundButton>
)

const DateTitle = ({ date, rich }) => (
  <h2 css={css`
    margin: 8px 0 4px !important;
    font-size: 24px;
    line-height: 1 !important;
    color: ${colors.gray};
    font-variant: all-small-caps;
  `}>
    <Link to={`/note/${date}`} css={css`${rich && 'pointer-events: none;'}`}>
      {new Date(date).toLocaleString()}
    </Link>
  </h2>
)

const MarkdownText = ({ text, rich }) => (
  <ReactMarkdown css={css`
    color: ${colors.black} !important;
    width: calc(100% - 48px);
    margin-bottom: 8px;
    overflow: hidden;
    overflow-wrap: break-word;
    ${!rich && 'max-height: 96px'};
  `}>
    {text}
  </ReactMarkdown>
)

export const Box = ({ item, onDelete, rich }) => {
  const { date, markdownText: text, } = item || {}
  const deleteNote = () => onDelete(item.date)

  return (
    <Wrapper>
      <DateTitle {...{ date, rich }} />
      <MarkdownText {...{ text, rich }} />
      <DeleteNoteButton {...{ deleteNote }} />
    </Wrapper>
  )
}
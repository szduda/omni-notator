/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx, css, } from '@emotion/core'
import { colors, Flex, FAB, Icons } from '../theme'
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
      font-size: 12px;
      line-height: 14px;
      box-shadow: 0 2px 4px 0 ${colors.grayDark}44;
      position: relative;
      overflow: hidden;
      transition: opacity 200ms ease-out 200ms;

      > * {
        flex-shrink: 0;
      }
    `} {...rest} />
)

const DeleteNoteButton = ({ deleteNote }) => (
  <FAB
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
  </FAB>
)

const DateTitle = ({ date }) => (
  <h2 css={css`
    margin: 8px 0;
    font-size: 24px;
    line-height: 1;
    color: ${colors.gray};
    font-variant: all-small-caps;
  `}>
    <Link to={`/note/${date}`}>
      {new Date(date).toLocaleString()}
    </Link>
  </h2>
)

const MarkdownText = ({ text, rich }) => (
  <ReactMarkdown css={css`
    color: ${colors.black} !important;
    padding: 0 48px 0 0;
    width: calc(100% - 48px);
    ${!rich && 'max-height: 48px'};
    margin-bottom: 8px;
    overflow: hidden;
  `}>
    {text}
  </ReactMarkdown>
)

export const Box = ({ item, onDelete, rich }) => {
  const { date, markdownText: text, } = item || {}
  const deleteNote = () => onDelete(item.date)

  return (
    <Wrapper>
      <DateTitle {...{ date }} />
      <MarkdownText {...{ text, rich }} />
      <DeleteNoteButton {...{ deleteNote }} />
    </Wrapper>
  )
}
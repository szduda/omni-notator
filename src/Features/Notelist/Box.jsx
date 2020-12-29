/** @jsx jsx */
import { jsx, css, } from '@emotion/core'
import { colors, Flex, FAB, Icons } from '../theme'

const Wrapper = ({ collapsed, fullHeight, ...rest }) => (
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
      transform: translateY(${collapsed ? -20 : fullHeight ? 64 : 0}px);
      overflow: hidden;
      transition: opacity 200ms ease-out 200ms;
      opacity: ${collapsed ? 0 : 1};
      z-index: ${fullHeight ? 10000 : 'inherit'};

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
    width: calc(100% - 48px);
    font-size: 24px;
    line-height: 1;
    color: ${colors.gray};
    font-variant: all-small-caps;
  `}>
    {new Date(date).toLocaleString()}
  </h2>
)

const MarkdownText = ({ text, rich }) => {
  return (
    <p css={css`
    color: ${colors.black} !important;
    padding: 0 48px 16px 0;
    width: calc(100% - 48px);
    ${rich ? 'overflow-y: auto' : 'overflow: hidden'};
    ${rich ? 'min-height: 60%' : 'min-height: 24px'};
    ${rich && 'flex-grow: 1;'}
    ${!rich && 'text-overflow: ellipsis;'}
    white-space: ${rich ? 'pre-line' : 'nowrap'};
  `}>
      {text}
    </p>
  )
}

export const Box = ({ item, onDelete, rich, hidden }) => {
  const { date, markdownText, } = item
  const deleteNote = () => {
    onDelete(item.id)
  }
  return (
    <Wrapper collapsed={hidden} fullHeight={rich}>
      <DateTitle {...{ date }} />
      <MarkdownText {...{ text: markdownText, rich }} />
      <DeleteNoteButton {...{ deleteNote, rich }} />
    </Wrapper>
  )
}
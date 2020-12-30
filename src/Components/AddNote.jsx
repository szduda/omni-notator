/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react';
import { colors, Icons, Button, FAB } from '../theme'

export const AddFormTrigger = props => (
  <div css={css`
    align-self: flex-end;
    margin-right: 64px;
  `}>
    <FAB top css={css`position: fixed; right: unset;`} {...props}>
      <Icons.Add color={colors.yellow} />
    </FAB>
  </div>
)

const Textbox = ({ label = '', wide = false, ...props }) => (
  <label css={css`
    position: relative;
    width: ${wide ? '100%' : 'auto'};
  `}>
    <textarea
      placeholder={label}
      css={css`
        height: 24px;
        resize: none;
      `} {...props} />
  </label>
)

const validate = ({ markdownText }, setValid) => {
  const isValid = !!markdownText
  setValid(isValid)
  return isValid
}

export const AddNoteForm = ({ onSubmit, formVisible, ...rest }) => {
  const [item, setItem] = useState({
    markdownText: '',
  })
  const [isValid, setValid] = useState(true)

  const submit = e => {
    e.preventDefault();
    const result = validate(item, setValid) && onSubmit({ ...item, date: Date.now() })
    setItem({ markdownText: '' })
    return result;
  }

  return (
    <div css={css`
      width: 100%;
      position: relative;
      transition: height 400ms ease-out;
      height: ${formVisible ? '284px' : 0};
      overflow: hidden;
      `} {...rest}>
      <form css={css`
        color: ${colors.grayLight};
        padding: 16px;
        margin: 4px 0 16px;
        border-radius: 4px;
        background: ${colors.white};
      `}>
        <Textbox wide value={new Date().toLocaleString()} disabled />
        <Textbox
          wide
          label="Markdown text"
          value={item.markdownText}
          css={css`height: 112px;`}
          onChange={event => setItem({ ...item, markdownText: event.target.value })} />
        <div css={css`display: flex; justify-content: flex-end;`}>
          <Icons.Exclamation
            color={colors.red}
            css={css`
            visibility: ${isValid ? 'hidden' : 'visible'};
            margin-right: 8px;
          `} />
          <Button onClick={submit} role="submit" css={css`border: 1px solid ${colors.grayLight}`}>
            <Icons.Add color={colors.green} />
            <span css={css`
            margin: 0 4px 0 2px;
            align-self: center;
            font-size: 14px;
            line-height: 1;
          `}>Add note</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react';
import { colors, Icons, Button, RoundButton } from '../theme'

export const AddFormTrigger = props => (
  <div css={css`
    align-self: flex-end;
    margin-right: 56px;
  `}>
    <RoundButton top css={css`position: fixed; right: unset;`} {...props}>
      <Icons.Add color={colors.yellow} />
    </RoundButton>
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

const Wrapper = ({ formVisible, children, ...props }) => (
  <div css={css`
  width: 100%;
  position: relative;
  transition: height 400ms ease-out;
  height: ${formVisible ? '284px' : 0};
  box-shadow: 0 2px 4px 0 ${colors.grayDark}44;
  overflow: hidden;
  `} {...props}>
    <form css={css`
    color: ${colors.grayLight};
    padding: 16px;
    margin: 4px 0 16px;
    border-radius: 4px;
    background: ${colors.white};
  `}>
      {children}
    </form>
  </div>
)

const SubmitButton = props => (
  <Button role="submit" css={css`border: 1px solid ${colors.grayLight}`} {...props}>
    <Icons.Add color={colors.green} />
    <span css={css`
    margin: 0 4px 0 2px;
    align-self: center;
    font-size: 14px;
    line-height: 1;
  `}>Add note</span>
  </Button>
)

const ValidationMark = ({ visible }) => (
  <Icons.Exclamation
    color={colors.red}
    css={css`
    position: absolute;
    bottom: 24px;
    right: 0;
    visibility: ${visible ? 'visible' : 'hidden'};
    margin-right: 8px;
  `} />
)

export const AddNoteForm = ({ onSubmit, formVisible, ...props }) => {
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
    <Wrapper {...{ ...props, formVisible }}>
      <Textbox wide value={new Date().toLocaleString()} disabled />
      <div css={css`
        position: relative;
      `}>
        <Textbox
          wide
          label="Enter your text. You can use Markdown syntax."
          value={item.markdownText}
          css={css`height: 112px;`}
          onChange={event => setItem({ ...item, markdownText: event.target.value })} />
        <ValidationMark visible={!isValid} />
      </div>
      <div css={css`display: flex; justify-content: flex-end;`}>
        <SubmitButton onClick={submit} />
      </div>
    </Wrapper>
  )
}
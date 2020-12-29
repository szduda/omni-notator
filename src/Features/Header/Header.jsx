/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../theme'

const Wrapper = props => (
  <div css={css`
  background: ${colors.black};
  color: ${colors.white};
  padding: 12px 16px;
  box-shadow: 0 0 4px #000;
  `} {...props} />
)

const Title = () => (
  <h1 css={css`
    display: inline-flex;
    flex-direction: column; 
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 1.5;
  `}>
    omni notator
  </h1>
)

export const Header = () => {
  return (
    <Wrapper>
      <Title />
    </Wrapper>
  )
}
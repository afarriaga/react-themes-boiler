import React from 'react'
import Styled from 'styled-components'
import themes from 'themes'

const Button = Styled.button`
  background: #cacaca;
  color: #222;

  position: absolute;
  padding: .5rem;
  cursor: pointer;
  overflow: hidden;
  opacity: .5;
  top: 5px;
  right: 5px;
  border-radius: .25em;
  border: 1px solid transparent;

  &:hover {
    opacity: 1;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(255,255,255,.2);
    outline: 0;
  }
`;

const keys = Object.keys(themes);
let next = 1;
export default props => {
  const _onClick = event => {
    if (next > keys.length - 1) next = 0;

    const randomTheme = keys[next];
    const theme = themes[randomTheme];
    props.onClick(theme)
    next += 1
  }

  return (
    <Button onClick={_onClick}>
      Swtich Theme
    </Button>
  );
};

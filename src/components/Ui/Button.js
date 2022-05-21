import React from "react";
import styled, {useTheme} from "styled-components/macro";

export default (props) => {
  const theme = useTheme();

  let bg = props.bg || 'white';
  if (theme.colors[props.bg]) {
    bg = theme.colors[props.bg]
  }

  let mt = props.mt;
  if (theme.mt[props.mt]) {
    mt = theme.mt[props.mt]
  }

  let buttonSize = props.buttonSize || '100%';
  if (theme.buttonSize[props.buttonSize]) {
    buttonSize = theme.buttonSize[props.buttonSize]
  }

  let shadow = props.shadow || 'none';
  if (theme.shadow[props.shadow]) {
    shadow = theme.shadow[props.shadow]
  }

  return(
    <Button mt={mt}  onClick={props.onClick} shadow={shadow} bg={bg} shadow={shadow} buttonSize={buttonSize}>
      {props.children}
    </Button>
  )
}

const Button = styled.button`
  width: ${props => props.buttonSize};
  border-radius: 6px;
  margin-top: ${props => props.mt || 'none'};
  padding: 15px;
  outline: none;
	text-decoration: none;
	box-sizing: border-box;
  background: ${props => props.bg};
  border: none;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer !important;
  box-shadow: ${props => props.shadow};
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    cursor: pointer !important;
  };
  &:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      cursor: pointer !important;
    }
`

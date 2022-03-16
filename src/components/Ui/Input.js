import React from "react";
import styled, {useTheme} from "styled-components/macro";
import { IconContext } from "react-icons";

export default (props) => {

  const isActive = props.value != "";
  const iconLeft = props.iconLeft;
  const Icon = props.Icon;
  const theme = useTheme();
  let ml = props.ml;
  let mb = props.mb;
  if (theme.mb[props.mb]) {
    mb = theme.mb[props.mb]
  }


  return(
    <Container label={props.label} mb={mb}>
      <Input className={iconLeft ? "InputIconL" : ""} value={props.value} onChange={(e) => props.onChange(e.target.value)} />
        {props.iconLeft && (
          <IconContainer>
            <IconContext.Provider value={{ color: '#ffffff', size: '16px'}}>
              {props.Icon}
            </IconContext.Provider>
          </IconContainer>
        )}
        <Label ml={ml} className={ isActive ? "Active" : ""} >{props.label}</Label>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  position: relative;
  & .Active{
    transform: translate(4px, -5px) scale(0.95);
    font-size:14px;
    background: #381aae;
    padding: 0 12px;
  };
  margin-bottom: ${props => props.mb};
  & .InputIconL{
    padding-left: 30px;
  };
`

const Input = styled.input`
  padding: 14px;
  outline: 0;
  border: 1px solid #dddddd85;
  border-radius: 6px;
  background: none;
  color: #ffffff;
  font-size: 16px;
`

const Label = styled.label`
  padding: 0 17px;
  color: #ffffff;
  pointer-events: none;
  position: absolute;
  transform: translate(0,16px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
  margin-left: ${props => props.ml};
  ${Input}:focus ~ &  {
    transform: translate(4px, -5px) scale(0.95);
    font-size:14px;
    background: #381aae;
    padding: 0 12px;
    margin-left: 0;
  };
`

const IconContainer = styled.div`
  position: absolute;
  padding: 17px 12px;
`

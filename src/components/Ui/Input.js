import React from "react";
import styled, { useTheme } from "styled-components/macro";
import { IconContext } from "react-icons";
import { useForm } from "react-hook-form";

export default React.forwardRef((props, { register,setValue, name, ...rest }) => {

  const isActive = props.data != "";
  const iconLeft = props.iconLeft;
  const Icon = props.Icon;
  const theme = useTheme();
  let ml = props.ml;
  let mb = props.mb;
  if (theme.mb[props.mb]) {
    mb = theme.mb[props.mb];
  }

  return (
    <Container mb={mb}>
      <Input
        className={iconLeft ? "InputIconL" : ""}
        type={props.type}
        name={name}
        ref={register}
        {...rest}
      />
      {props.iconLeft && (
        <IconContainer>
          <IconContext.Provider value={{ color: "#ffffff", size: "16px" }}>
            {props.Icon}
          </IconContext.Provider>
        </IconContainer>
      )}
      <Label label={props.label} ml={ml} className={isActive ? "Active" : ""}>
        {props.label}
      </Label>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  & .Active {
    transform: translate(4px, -5px) scale(0.95);
    font-size: 14px;
    background: #381aae!important;
    padding: 0 12px;
    margin-left: 0;
    top:-1px;
  }
  margin-bottom: 20px;
  & .InputIconL {
    padding-left: 35px;
  }
`;

const Input = styled.input`
  padding: 14px;
  outline: 0;
  border: 1px solid #dddddd85;
  border-radius: 6px;
  background: none;
  color: #ffffff;
  font-size: 16px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const Label = styled.label`
  color: #ffffff;
  position: absolute;
  top: 23px;
  background: none!important;
  transform-origin: top left;
  transition: all 0.2s ease-out;
  margin-left: ${(props) => props.ml};
  transform: translate(4px, -5px) scale(0.95);
  font-size: 14px;
  padding: 0 12px ;
  ${Input}:focus ~ & {
    transform: translate(4px, -5px) scale(0.95);
    font-size: 14px;
    background: #381aae!important;
    padding: 0 12px;
    margin-left: 0;
    top:-1px;
  }
`;



const IconContainer = styled.div`
  position: absolute;
  padding: 17px 12px;
`;

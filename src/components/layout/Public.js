import React from "react";
import styled from "styled-components";

export default (props) => {
  return(
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${(p) => p.theme.colors.primary};
  min-height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

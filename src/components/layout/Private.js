import React from "react";
import styled from "styled-components";

const component = (props) => {
  return <Container>{props.children}</Container>;
};

export default component;

const Container = styled.div`
  background: ${(p) => p.theme.colors.grey};
  min-height: 100vh;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

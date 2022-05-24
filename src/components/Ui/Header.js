import React from "react";
import styled, {useTheme} from "styled-components/macro";
import Logo from '../../assets/img/logo.png'

export default (props) => {

  return(
    <Container>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 30px;
  border-radius: 0px 0px 24px 24px;
  background: ${(p) => p.theme.colors.primary};
  box-shadow: 0px 10px 13px -7px #00000057;
  display: flex;
  min-height: 200px;
`
const LogoContainer = styled.div`
  
`

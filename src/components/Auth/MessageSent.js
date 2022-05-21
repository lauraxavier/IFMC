import React from 'react';
import styled, {useTheme} from "styled-components/macro";
import Check from '../../assets/img/check.png'


export default (props) => {
  return(
    <Container>
      <ImageContainer>
        <img src={Check} />
      </ImageContainer>
      <TextContainer>
        <h1>e-mail enviado</h1>
        <p>Acesse seu e-mail e siga as orientações para recuperar a sua senha</p>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px 10px 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items: center;
`
const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
  h1 {
   font-weight: 900;
   text-transform: uppercase;
   margin-bottom: 30px;
 };
  p {
   line-height: 130%;
 }
`

const ImageContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
`

import React from "react";
import styled from "styled-components/macro";
import Public from "../../components/layout/Public";
import Form from "../../components/Auth/Forgot";
import Logo from "../../assets/img/logo.png";
import Card, { CardStyle } from "../../components/Ui/Card";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Public>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
      <CardContainer>
        <Card shadow="primary" cardSize="sm">
          <Form />
        </Card>
      </CardContainer>
      <LinkContainer>
        <LinkCreate to="/">entrar</LinkCreate>
      </LinkContainer>
    </Public>
  );
};

const LogoContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-bottom: 40px;
`;
const CardContainer = styled.div`
  width: 100%;
  align-self: flex-start;
  justify-content: center;
  display: flex;
`;

const LinkContainer = styled.div`
  width: 100%;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  text-align: center;
  line-height: 1;
`;

const LinkCreate = styled(Link)`
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 18px;
`;

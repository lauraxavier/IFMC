import React from "react";
import styled, {useTheme} from "styled-components/macro";

export default (props) => {
  const theme = useTheme();
  let bg = props.bg || 'rgba(255,255,255,0.01)';
  if (theme.colors[props.bg]) {
    bg = theme.colors[props.bg]
  }

  let cardSize = props.cardSize;
  if (theme.cardSize[props.cardSize]) {
    cardSize = theme.cardSize[props.cardSize]
  }

  let shadow = props.shadow || 'none';
  if (theme.shadow[props.shadow]) {
    shadow = theme.shadow[props.shadow]
  }

  return(
    <CardStyle bg={bg} shadow={shadow} cardSize={cardSize} >
      {props.children}
    </CardStyle>
  )
}

export const CardStyle = styled.div`
  padding: 15px;
  border-radius: 8px;
  background: ${props => props.bg};
  box-shadow: ${props => props.shadow};
  display: flex;
  width: ${props => props.cardSize};
`

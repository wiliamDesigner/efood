import styled from "styled-components";
import { cores } from "../../Styles";
export const CardContainer = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${cores.vermelha};
  padding: 16px;
  background-color: ${cores.branco_mais_claro};
  
`;

export const CardImageSushi = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`;

export const CardText = styled.div`
  font-size: 20px;
  font-family: "Roboto";
  color: ${cores.vermelha};
`;

export const CardImageGroupSushi = styled.div`
   display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 40px; 
`;

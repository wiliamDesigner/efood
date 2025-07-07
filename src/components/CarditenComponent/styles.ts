// styles.ts
import styled from "styled-components";
import { cores } from "../../Styles"; // ajuste esse caminho conforme a localização do seu arquivo

export const CardContainer = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${cores.vermelha};
  padding: 16px;
  background-color: ${cores.branco_mais_claro};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CardText = styled.div`
  font-size: 20px;
  font-family: "Roboto";
  color: ${cores.vermelha};
`;

import styled from "styled-components";
import { cores } from "../../Styles";

export const Cardes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 40px;
  align-items: start;
  background-color: ${cores.branco_mais_claro};
  color: ${cores.vermelha};
  padding-top: 220px;
`;

export const CardItem = styled.div`
  width: 472px;
  height: 181px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
  color: ${cores.vermelha};
  border: 1px solid ${cores.vermelha};
  font-size: 18px;
  font-family: "Roboto";
`;

export const Sushi = styled.img`
  grid-template-rows: auto;
  position: absolute;
  width: 472px;
  height: 217px;
`;

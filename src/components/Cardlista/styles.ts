import styled from "styled-components";
import { cores } from "../../Styles";

export const CardItem = styled.div`
  width: 472px;
  height: 398px;
  background-color: ${cores.vermelha};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  color: white;
  font-size: 20px;
`;

export const Cardes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 80px;
  align-items: start;
  background-color: ${cores.branco_mais_claro};
  color: ${cores.vermelha};
`;
export const Sushi = styled.img`
  width: 472px;
  height: 217px;
`;

import styled from "styled-components";
import { cores } from "../../Styles";



export const Background = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.branco_mais_claro};
  width: 1366px;
  height: 280px;
  color: ${cores.vermelha};
`;


export const Cartao = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
   /* ou qualquer valor de espaçamento desejado */
`;

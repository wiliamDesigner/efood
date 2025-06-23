import styled from "styled-components";
import backgroundimg from "../../assets/fundo.png";
import { cores } from "../../Styles";

export const Headerbar = styled.header`
  background-image: url(${backgroundimg});
  width: 1366px;
  height: 280px;
  padding: 16px 8px;
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
  margin-left: 621px;
`;

export const Paragrafo = styled.p`
  width: 539px;
  height: 84px;
  color: ${cores.vermelha};
  text-align: center;
  font-size: 36px;
  margin-top: 236px;
  margin-left: 414px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  line-height: 100%;
`;

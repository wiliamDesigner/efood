import { createGlobalStyle } from "styled-components";

export const cores = {
  branca: "#eee",
  preta: "#111",
};

export const Globalcss = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background-color: ${cores.preta};
    color: ${cores.branca};
}
`;

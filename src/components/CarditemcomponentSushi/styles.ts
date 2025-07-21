import styled from "styled-components";


export const CardImageSushi = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`;

export const CardImageGroupSushi = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  column-gap: 40px; 
  row-gap: 0px; 
`;

export const CardSushiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px; 
`;

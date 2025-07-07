import React from 'react';
import { CardContainer, CardImage, CardText } from './styles';

interface CardItemProps {
  imagem: string;
  texto: string;
}

const CardItemComponent: React.FC<CardItemProps> = ({ imagem, texto }) => (
  <CardContainer>
    <CardImage src={imagem} alt="Imagem do card" />
    <CardText>{texto}</CardText>
  </CardContainer>
);

export default CardItemComponent;
import React from "react";
import { CardImageSushi, CardImageGroupSushi } from "./styles";

interface CardItemProps {
  imagem: string;
}
const CarditemcomponentSushi: React.FC<CardItemProps> = ({ imagem }) => (
  <CardImageGroupSushi>
    <CardImageSushi src={imagem} alt="Imagem do card " />
  </CardImageGroupSushi>
);
export default CarditemcomponentSushi;

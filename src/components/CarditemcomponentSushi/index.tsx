import React from "react";
import { CardImageSushi, CardImageGroupSushi } from "./styles";
import { CardItem } from "../Cardlista/styles";

interface CardItemProps {
  imagem1: string;
  imagem2: string;
}

const CarditemcomponentSushi: React.FC<CardItemProps> = ({ imagem1, imagem2 }) => (
  <CardImageGroupSushi>
    <CardImageSushi src={imagem1} alt="Imagem 1" />
    <CardImageSushi src={imagem2} alt="Imagem 2" />
    <CardItem>
    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>  
    </CardItem>
    <CardItem>
      <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
    </CardItem>    
  </CardImageGroupSushi>

  
);

export default CarditemcomponentSushi;

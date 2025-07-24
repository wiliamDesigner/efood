// CarditemcomponentSushi.tsx
import React from "react";
import {
  CardImageSushi,
  CardImageGroupSushi,
  CardSushiWrapper,
  NomedaComida,
  TipodeComida,
  DestaquedaSemana,
  DescricaodoPrato,
  SaibaMais,
  AvaliacaoNotas,
  LinhaDoTitulo
} from "./styles";
import { CardItem } from "../Cardlista/styles";

interface CardItemProps {
  imagem1: string;
  imagem2: string;
}

const CarditemcomponentSushi: React.FC<CardItemProps> = ({ imagem1, imagem2 }) => (
  <CardImageGroupSushi>
    <CardSushiWrapper>
      <CardImageSushi src={imagem1} alt="Imagem 1" />
      <DestaquedaSemana>DestaquedaSemana</DestaquedaSemana> 
      <TipodeComida>Japonesa</TipodeComida>
      <CardItem>
        <LinhaDoTitulo>
        <NomedaComida>Hioki Sushi</NomedaComida>
         <AvaliacaoNotas>⭐ 4.8</AvaliacaoNotas>
         </LinhaDoTitulo>
        <DescricaodoPrato>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</DescricaodoPrato>
        <SaibaMais>Saiba mais</SaibaMais>
      </CardItem>
    </CardSushiWrapper>

    <CardSushiWrapper>
      <CardImageSushi src={imagem2} alt="Imagem 2" />
       <TipodeComida>Italiana</TipodeComida>
      <CardItem>
        <LinhaDoTitulo>
        <NomedaComida>La Dolce Vita Trattoria</NomedaComida>
         <AvaliacaoNotas>⭐ 4.8</AvaliacaoNotas>
         </LinhaDoTitulo>
        <DescricaodoPrato>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</DescricaodoPrato>
         <SaibaMais>Saiba mais</SaibaMais>
      </CardItem>
    </CardSushiWrapper>

    <CardSushiWrapper>
      <CardImageSushi src={imagem2} alt="Imagem 3" />
      <TipodeComida>Italiana</TipodeComida>
      <CardItem>
        <LinhaDoTitulo>
        <NomedaComida>La Dolce Vita Trattoria</NomedaComida>
         <AvaliacaoNotas>⭐ 4.8</AvaliacaoNotas>
         </LinhaDoTitulo>
        <DescricaodoPrato>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</DescricaodoPrato>
         <SaibaMais>Saiba mais</SaibaMais>
      </CardItem>
    </CardSushiWrapper>

    <CardSushiWrapper>
      <CardImageSushi src={imagem2} alt="Imagem 4" />
      <TipodeComida>Italiana</TipodeComida>
      <CardItem>
        <LinhaDoTitulo>
        <NomedaComida>La Dolce Vita Trattoria</NomedaComida>
         <AvaliacaoNotas>⭐ 4.8</AvaliacaoNotas>
         </LinhaDoTitulo>
        <DescricaodoPrato>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</DescricaodoPrato>
         <SaibaMais>Saiba mais</SaibaMais>
      </CardItem>
    </CardSushiWrapper>

  <CardSushiWrapper>
      <CardImageSushi src={imagem2} alt="Imagem 5" />
      <TipodeComida>Italiana</TipodeComida>
      <CardItem>
        <LinhaDoTitulo>
        <NomedaComida>La Dolce Vita Trattoria</NomedaComida>
         <AvaliacaoNotas>⭐ 4.8</AvaliacaoNotas>
         </LinhaDoTitulo>
        <DescricaodoPrato>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</DescricaodoPrato>
         <SaibaMais>Saiba mais</SaibaMais>
      </CardItem>
    </CardSushiWrapper>

  <CardSushiWrapper>
      <CardImageSushi src={imagem2} alt="Imagem 6" />
      <TipodeComida>Italiana</TipodeComida>
      <CardItem>
        <LinhaDoTitulo>
        <NomedaComida>La Dolce Vita Trattoria</NomedaComida>
         <AvaliacaoNotas>⭐ 4.8</AvaliacaoNotas>
         </LinhaDoTitulo>
        <DescricaodoPrato>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</DescricaodoPrato>
         <SaibaMais>Saiba mais</SaibaMais>
      </CardItem>
    </CardSushiWrapper>

  </CardImageGroupSushi>

  

  
);

export default CarditemcomponentSushi;

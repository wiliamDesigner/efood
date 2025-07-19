import { CardItem } from "../Cardlista/styles";
import { CardContainerMacarao, CardImageGroupMacarao } from "./styles";

interface CardItemProps {
  imagem3: string;
  imagem4: string;
}

const CarditemcomponentMacarao: React.FC<CardItemProps> = ({
  imagem3,
  imagem4,
}) => (
  <CardContainerMacarao>
    <CardImageGroupMacarao>
      <img src={imagem3} alt="imagem de macarrão" />
      <img src={imagem4} alt="imagem de macarrão" />
    </CardImageGroupMacarao>
    <CardItem/>
  </CardContainerMacarao>
);

export default CarditemcomponentMacarao;

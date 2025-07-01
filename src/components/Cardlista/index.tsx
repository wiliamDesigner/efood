import { Cardes, CardItem, Sushi } from "../Cardlista/styles";
import imagensuchi from "../../assets/sushi.png";

const Cardlist = () => (
  <Cardes>
    <CardItem>
      <Sushi src={imagensuchi} alt="Imagens de suchi" />
      <p>Possivel texto</p>
    </CardItem>
    <CardItem>wiliam</CardItem>
    <CardItem>Vera</CardItem>
    <CardItem>Jorge</CardItem>
    <CardItem>gustavo</CardItem>
    <CardItem>wiliam</CardItem>
  </Cardes>
);

export default Cardlist;

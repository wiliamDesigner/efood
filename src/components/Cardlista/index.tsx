import { Cardes, CardItem } from "../Cardlista/styles";
import imagensuchi from "../../assets/sushi.png";

const Cardlist = () => (
  <Cardes>
    <CardItem>
      <img src={imagensuchi} alt="Imagens de suchi" />
    </CardItem>
    <CardItem>wiliam</CardItem>
    <CardItem>Vera</CardItem>
    <CardItem>Jorge</CardItem>
    <CardItem>gustavo</CardItem>
    <CardItem>wiliam</CardItem>
  </Cardes>
);

export default Cardlist;

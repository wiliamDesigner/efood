import { Cardes, CardItem, Sushi } from "../Cardlista/styles";
import imagensuchi from "../../assets/sushi.png";

const Cardlist = () => (
  <div>
    <Sushi src={imagensuchi} alt="Imagens de suchi" />
    <Cardes>
      <CardItem>primeiro card</CardItem>
      <CardItem>outro card2</CardItem>
      <CardItem>outro card3</CardItem>
      <CardItem>outro card4</CardItem>
    </Cardes>
  </div>
);

export default Cardlist;

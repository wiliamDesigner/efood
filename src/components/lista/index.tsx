import Cardlist from "../Cardlista";
import { Cardes } from "../Cardlista/styles";
import CardItemComponent from "../CarditenComponent";
import imagensuchi from "../../assets/sushi.png";

const Lista = () => (
  <>
  <div>
     <CardItemComponent imagem={imagensuchi} />
    <Cardes>
      <Cardlist />
        <Cardlist />
    </Cardes>
  </div>
  </>
);

export default Lista;

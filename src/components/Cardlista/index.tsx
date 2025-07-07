import { Cardes } from "../Cardlista/styles";
import imagensuchi from "../../assets/sushi.png";
import CardItemComponent from "../CarditenComponent";

const Cardlist = () => (
  <>
    <div>
      <Cardes>
        <CardItemComponent imagem={imagensuchi} texto="Primeiro card" />
        <CardItemComponent imagem={imagensuchi} texto="Segundo card" />
        <CardItemComponent imagem={imagensuchi} texto="Terceiro card" />
      </Cardes>
    </div>
  </>
);

export default Cardlist;

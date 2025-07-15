import Cardlist from "../Cardlista";
import { Cardes } from "../Cardlista/styles";
import CardItemComponent from "../CarditenComponent";
import imagensuchi from "../../assets/sushi.png";
import imagemmacarao from"../../assets/macarão.png"
import CarditemcomponentSushi from "../CarditemcomponentSushi";


const Lista = () => (
  <>
  <div>
      <CarditemcomponentSushi imagem={imagensuchi} />
      <CardItemComponent imagem={imagemmacarao} />
    <Cardes>
      <Cardlist />
        <Cardlist />
    </Cardes>
  </div>
  </>
);

export default Lista;

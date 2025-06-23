import { Headerbar, Logo, Paragrafo } from "./styles";
import Logoimg from "../../assets/logo.png";
const Header = () => (
  <Headerbar>
    <Logo src={Logoimg} alt={Logo}></Logo>
    <Paragrafo>Viva experiências gastronômicas no conforto da sua casa</Paragrafo>
  </Headerbar>
);

export default Header;

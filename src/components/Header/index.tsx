import { Headerbar, Logo } from "./styles";
import Logoimg from "../../assets/logo.png"
const Header = () =>
     <Headerbar>
        <Logo src={Logoimg} alt={Logo}></Logo>
     </Headerbar>;


export default Header

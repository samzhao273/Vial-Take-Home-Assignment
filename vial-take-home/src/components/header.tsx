import "./styles/header.css";
import Vial from "../assets/vial.svg";

export default function Header() {
  return (
    <div className="header">
        <div className="header__logo">
        <img src={Vial} style={{ width: 36, height: 36 }}></img>
        <div className="header__logo--title"> Vial Take Home Assignment</div>
      </div>
    </div>
  );
}

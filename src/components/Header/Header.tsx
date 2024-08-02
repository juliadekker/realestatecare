import "./Header.scss";
import Logo from "../../assets/logo.svg";
import { Bell, Cog } from "../../Icons";
import Icon from "@mdi/react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} />
      </div>
      <Icon path={Bell} className="header-icon" />
      <Icon path={Cog} className="header-icon" />
    </div>
  );
};

export default Header;

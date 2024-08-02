import Icon from "@mdi/react";
import "./Footer.scss";
import { Home, Info, Search } from "../../Icons";

const FooterIcon = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="footer-icon">
      <Icon className="footer-option-icon" path={icon} />
      <p className="footer-option-title">{title}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <FooterIcon title="Hoofdscherm" icon={Home} />
      <FooterIcon title="Zoeken" icon={Search} />
      <FooterIcon title="Informatie" icon={Info} />
    </div>
  );
};

export default Footer;

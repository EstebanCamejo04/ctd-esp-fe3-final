import React from "react";
import dhLogo from "../assets/DH.png";
import facebookLogo from "../assets/ico-facebook.png";
import instagramLogo from "../assets/ico-instagram.png";
import tikTokLogo from "../assets/ico-tiktok.png";
import whatsappLogo from "../assets/ico-whatsapp.png";
import footerStyle from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <p>Powered by Esteban Camejo</p>

      <img src={dhLogo} alt="dh-logo" />

      <div className={footerStyle.socialIcon}>
        <img src={facebookLogo} alt="facebook-logo" />
        <img src={instagramLogo} alt="instagram-logo" />
        <img src={tikTokLogo} alt="tiktok-logo" />
        <img src={whatsappLogo} alt="whatsapp-logo" />
      </div>
    </footer>
  );
};

export default Footer;

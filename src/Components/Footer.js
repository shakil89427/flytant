import React from "react";
import {
  AppIndicator,
  Apple,
  Envelope,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import logo from "../Assets/logo.png";
import { footerStyles } from "../Styles/Styles";

const Footer = () => {
  const icons = [
    [<Instagram />, <Youtube />, <Facebook />],
    [<Linkedin />, <Twitter />, <Envelope />],
  ];

  const links = [
    ["Home", "About", "Blogs", "Career"],
    ["Contact", "Terms", "Ads", "Privacy"],
  ];

  return (
    <div className={footerStyles.main}>
      <div className={footerStyles.wrapper}>
        {/* Logo Part */}
        <div className={footerStyles.info}>
          <img className={footerStyles.logo} src={logo} alt="" />
          <p className={footerStyles.infoText}>
            Connecting Brands & Influencers
          </p>
          {/* Icons Part */}
          <div className={footerStyles.iconMain}>
            {icons.map((arr) => (
              <div key={Math.random()} className={footerStyles.iconWrapper}>
                {arr.map((item) => (
                  <div key={Math.random()} className={footerStyles.icon}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Links Part */}
        <div className={footerStyles.linksMain}>
          {links.map((arr) => (
            <div key={Math.random()}>
              {arr.map((item) => (
                <p key={item} className={footerStyles.link}>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        {/* Apps Part */}
        <div className={footerStyles.appMain}>
          <p className={footerStyles.appHead}>Get the apps!</p>
          <div className={footerStyles.appBtn}>
            <Apple className={footerStyles.appIcon} />
            <div>
              <p className={footerStyles.download}>Download on the</p>
              <p className={footerStyles.appCatagory}>App Store</p>
            </div>
          </div>
          <div className={footerStyles.appBtn}>
            <AppIndicator className={footerStyles.appIcon} />
            <div>
              <p className={footerStyles.download}>Download our</p>
              <p className={footerStyles.appCatagory}>Android App</p>
            </div>
          </div>
        </div>
      </div>
      <p className={footerStyles.copyright}>© Flytant 2022</p>
    </div>
  );
};

export default Footer;

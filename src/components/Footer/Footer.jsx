import React from "react";
import "./Footer.css";
import Email from "./../Email/Email";
import logo from "../../images/logo.svg";
import { IoLocationSharp } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Email />
      <footer>
        <img src={logo} alt="logo" />
        <div className="footer__container-content">
          <div>
            <span className="location">
              <IoLocationSharp className="location__icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                doloribus temporibus praesentium modi expedita, vel quibusdam,
                aut quam vero eveniet sit fugiat consectetur deleniti excepturi
                commodi! Sit natus eos voluptatum.
              </p>
            </span>
          </div>
          <div className="contacts__container">
            <span className="contacts">
              <TbPhoneCall className="contacts__icon" />
              <p>+1-543-123-4567</p>
            </span>
            <span className="contacts">
              <MdOutlineMail className="contacts__icon" />
              <p>example@fylo.com</p>
            </span>
          </div>
          <div className="footer__links-container">
            <p className="footer__links">About Us</p>
            <p className="footer__links">Jobs</p>
            <p className="footer__links">Press</p>
            <p className="footer__links">Blog</p>
          </div>
          <div>
            <p className="footer__links">Contact Us</p>
            <p className="footer__links">Terms</p>
            <p className="footer__links">Privacy</p>
          </div>
          <span className="socials">
            <div className="socials__container">
              <TiSocialFacebook />
            </div>
            <div className="socials__container">
              <AiOutlineTwitter />
            </div>
            <div className="socials__container">
              <AiOutlineInstagram />
            </div>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

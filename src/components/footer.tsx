import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <img src="f4.png" alt="" className="topp" />

      <div className="mid">
        <div className="first">
          <img src="fh3.png" alt="" />
          <p>
            Floodhelp is a digital plartform for collection of donation to be
            distributed to people in need
          </p>
          <div className="social">
            <FaFacebookF className="Ficon" />
            <FaTwitter className="Ficon" />
            <FaLinkedinIn className="Ficon" />
            <AiFillInstagram className="Ficon" />
          </div>
        </div>

        <div className="second">
          <ul>
            <p>Quick Link</p>
            <li>Donations</li>
            <li>Features</li>
            <li>Catigories</li>
            <li>Volunteer</li>
          </ul>
          <ul>
            <p>Donations</p>
            <li>Donations</li>
            <li>Features</li>
            <li>Catigories</li>
            <li>Volunteer</li>
          </ul>
          <ul>
            <p>About Us</p>
            <li>Donations</li>
            <li>Features</li>
            <li>Catigories</li>
            <li>Volunteer</li>
          </ul>
        </div>
      </div>
        <img src="f3.png" alt="" className="Fbottom" />
    </div>
  );
};

export default Footer;

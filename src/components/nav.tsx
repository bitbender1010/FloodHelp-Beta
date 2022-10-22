import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {FaTimes} from 'react-icons/fa'

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="nav">
      <a href="/">
        <img src="/fh3.png" alt="logo" />
      </a>
      <div className={open ? "activee" : " container"}>
        <ul className={open ? "active " : " navLink"}>
          <FaTimes onClick={handle} className="close" />

          <li>About Us</li>
          <li>FAQ</li>
          <li className="con">Contact Us</li>
        </ul>
      </div>

      <GiHamburgerMenu onClick={handle} className="navIcon" />
    </nav>
  );
};

export default Nav;

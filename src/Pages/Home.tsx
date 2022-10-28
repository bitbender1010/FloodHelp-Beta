import React from "react";
import "../App.css";
import { BsPlay, BsArrowRightCircle } from "react-icons/bs";
import Nav from "../components/nav";
import Donate from "../components/donate";
import Register from "../components/register";
import Faq from "../components/faq";
import Footer from "../components/footer";



function Home() {
  return (
    <div className="App">
      <Nav />
      <header className="header">
        <div className="text">
          <h2>
            Help over <span>200 thousand</span> <br /> displaced flood victims
            in Nigeria
          </h2>
          <p>
            Donate money, food, clothes, boats and any other relief material to
            assist these flood victims.
          </p>

          <div className="btn">
          <a href="/donation" className="btn-link"> <button>Donate Now</button> </a>
            <div className="play">
              <BsPlay className="icon" />
            </div>
          </div>
        </div>

        <div className="headImg">
          <img src="fh2.png" alt="header Pic" />
        </div>
      </header>

      <section className="aboutTop">
        <div className="aboutTopp">
          <div className="secCap">
            <img src="fhh4.png" alt="icon" />

            <div className="secText">
              <p>50+</p>
              <span>Dontions Recieved</span>
            </div>
          </div>
          <div className="secCap">
            <img src="fhh3.png" alt="icon" />

            <div className="secText">
              <p>2,000+</p>
              <span>Lives Impacted</span>
            </div>
          </div>
          <div className="secCap">
            <img src="fhh2.png" alt="icon" />

            <div className="secText">
              <p>12+</p>
              <span>Active Campaigns</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <h3>
          <span>Support</span> local community <br /> NGOs in 3 major ways
        </h3>

        <div className="aboutCap">
          <div className="capCon">
            <img src="fhh1.png" alt="" />

            <h2>Donations</h2>
            <p>
              We are fundraising to provide relief materials, including food
              such as rice, beans, noodles, water purification tabs.
            </p>
            <a href="/">
              Learn more <BsArrowRightCircle className="abtIcon" />
            </a>
          </div>
          <div className="capCon">
            <img src="fhh3.png" alt="" />

            <h2>Awareness</h2>
            <p>
              We are fundraising to provide relief materials, including food
              such as rice, beans, noodles, water purification tabs.
            </p>
            <a href="/">
              Learn more <BsArrowRightCircle className="abtIcon" />
            </a>
          </div>
          <div className="capCon">
            <img src="fhh2.png" alt="" />

            <h2>Volunteering</h2>
            <p>
              We are fundraising to provide relief materials, including food
              such as rice, beans, noodles, water purification tabs.
            </p>
            <a href="/">
              Learn more <BsArrowRightCircle className="abtIcon" />
            </a>
          </div>
        </div>
      </section>

      <section className="donatePage">
        <Donate />
      </section>
      <section className="reg">
        <Register />
      </section>
      <section className="faq">
        <Faq />
      </section>
      <Footer />
    </div>
  );
}

export default Home;

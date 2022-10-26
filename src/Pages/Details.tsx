import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Register from "../components/register";
import "../styles/details.css";

// @ts-expect-error this module doesn't have types and I was lazy adding them.
import Bounce from "react-reveal/Bounce";

const Details = () => {
  return (
    <div>
      <div className="details">
        <Nav />

        <div className="b4Div">
          <h2 className="h22">
            Bauchi State flood victims fundraising campaign
          </h2>
          <div className="detailsCap">
            <div className="lef">
              <img src="/fh1.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
                viverra tellus, amet proin in semper arcu. Leo quis vitae
                scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Rutrum viverra tellus, amet proin in semper
                arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Rutrum viverra tellus,
                amet proin in semper
              </p>
              <hr />

              <span>Created 7 days ago</span>
              <hr />
              <Bounce left>
                <div className="drop">
                  <h2>Organizer</h2>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p className="pp">Solomon Okonkwo</p>
                      <button>Contact</button>
                    </div>
                  </div>
                </div>
              </Bounce>

              <hr />

              <div className="drop">
                <h2>Drop off location</h2>

                <Bounce left>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p>Lagos state</p>
                      <span>
                        No 21 Olawale Cole Onitiri Avenue, Lekki Phase 1 -
                        Johathan Irondi +2349033202021{" "}
                      </span>
                    </div>
                  </div>
                </Bounce>
                <Bounce left>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p>Lagos state</p>
                      <span>
                        No 21 Olawale Cole Onitiri Avenue, Lekki Phase 1 -
                        Johathan Irondi +2349033202021{" "}
                      </span>
                    </div>
                  </div>
                </Bounce>
                <Bounce left>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p>Onitsha, Anambra State</p>
                      <span>
                        No 21 Olawale Cole Onitiri Avenue, Lekki Phase 1 -
                        Johathan Irondi +2349033202021{" "}
                      </span>
                    </div>
                  </div>
                </Bounce>
              </div>
              <hr />

              <div className="drop">
                <h2>Office Account</h2>

                <Bounce left>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p>Guaranty Trust Bank Naira Account</p>
                      <span>
                        Account Number - 0023412632 <br />
                      </span>
                      <span>Account Name - Jonathan Irondi</span>
                    </div>
                  </div>
                </Bounce>
                <Bounce left>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p>Access Bank - Dollar Account</p>
                      <span>
                        Account Number - 0023412632 <br />
                      </span>
                      <span>Account Name - Jonathan Irondi</span>
                    </div>
                  </div>
                </Bounce>
              </div>
              <hr />

              <div className="supp">
                <h2>Words Of Support (25)</h2>
                <Bounce left>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <span>Abu Waris</span>
                      <p>$150,000</p>
                      <h6>(2 days ago)</h6>
                    </div>
                  </div>
                </Bounce>

                <Bounce left>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <span>Abu Waris</span>
                      <p>$150,000</p>
                      <h6>(2 days ago)</h6>
                    </div>
                  </div>
                </Bounce>

                <Bounce left>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <span>Abu Waris</span>
                      <p>$150,000</p>
                      <h6>(2 days ago)</h6>
                    </div>
                  </div>
                </Bounce>
              </div>
            </div>
            <Bounce right>
              <div className="rig">
                <div className="proG">
                  <div className="proB"></div>
                </div>
                <div className="nm">
                  <div className="gg">
                    <h3>Goal</h3>
                    <span>$150,000</span>
                  </div>
                  <div className="gg">
                    <h3>Raise</h3>
                    <span>$150,000</span>
                  </div>
                </div>
                <button className="btnD">Donate Now</button> <br />
                <button className="btnW">Share</button>
                <div className="dAmt">
                  <h3>Donation(15)</h3>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p>Abu Waris</p>
                      <span>$150,000</span>
                      <h6>(2 days ago)</h6>
                    </div>
                  </div>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p>Abu Waris</p>
                      <span>$150,000</span>
                      <h6>(2 days ago)</h6>
                    </div>
                  </div>
                  <div className="orgaN">
                    <img src="fh1.png" alt="" />
                    <div className="name">
                      <p>Abu Waris</p>
                      <span>$150,000</span>
                      <h6>(2 days ago)</h6>
                    </div>
                  </div>
                </div>
                <button className="btnW hgh">Share</button>
              </div>
            </Bounce>
          </div>
        </div>

        <div className="nrr">
          <Bounce left>
            <Register />
          </Bounce>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;

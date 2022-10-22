import Nav from "../components/nav";
import "../styles/donation.css";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BsFillFlagFill } from "react-icons/bs";
import Footer from "../components/footer";
import Register from "../components/register";

const Donation = () => {
  return (
    <div className="donation">
      <Nav />
      <header className="dHeader">
        <h2>
          Find <span> local community</span> <br /> NGOs to donate
        </h2>


        <div className="input">
          {/* <AiOutlineSearch className="dIcon" /> */}
          <input type="text" placeholder="search NGOs and Location"/>
        </div>

        <div className="region">
          <div className="location">
            <p>Location</p>
            <select name="" id="">
              <option value="Lagos">Lagos</option>
              <option value="Lagos">Abia</option>
              <option value="Lagos">Kwara</option>
              <option value="Lagos">Kano</option>
            </select>
          </div>
          <div className="location">
            <p>Sort By</p>
            <select name="" id="">
              <option value="Lagos">Most Popular</option>
              <option value="Lagos">Most Flood</option>
            </select>
          </div>
        </div>
      </header>

      <div className="donate">
        <div className="donateCap">
          <div className="dCap">
            <img src="fh1.png" alt="donate" />

            <h3>
              Help a few communities <br /> in Abia State
            </h3>
            <p>
              Donate to a few communities in Abia State that were affected by
              the flood
            </p>

            <div className="prog">
              <div className="progg"></div>
            </div>

            <div className="goal">
              <div className="amt">
                <strong>Goal</strong>
                <span>$50k</span>
              </div>
              <div className="amt">
                <strong>Raise</strong>
                <span>$10k</span>
              </div>
            </div>
            <div className="organize">
              <p>Organizer</p>
              <span>Adewale Alabi</span>
            </div>
          </div>
          <div className="dCap">
            <img src="fh1.png" alt="donate" />

            <h3>Help a few communities in Abia State</h3>
            <p>
              Donate to a few communities in Abia State that were affected by
              the flood
            </p>

            <div className="prog">
              <div className="progg"></div>
            </div>

            <div className="goal">
              <div className="amt">
                <strong>Goal</strong>
                <span>$50k</span>
              </div>
              <div className="amt">
                <strong>Raise</strong>
                <span>$10k</span>
              </div>
            </div>
            <div className="organize">
              <p>Organizer</p>
              <span>Adewale Alabi</span>
            </div>
          </div>
          <div className="dCap">
            <img src="fh1.png" alt="donate" />

            <h3>Help a few communities in Abia State</h3>
            <p>
              Donate to a few communities in Abia State that were affected by
              the flood
            </p>

            <div className="prog">
              <div className="progg"></div>
            </div>

            <div className="goal">
              <div className="amt">
                <strong>Goal</strong>
                <span>$50k</span>
              </div>
              <div className="amt">
                <strong>Raise</strong>
                <span>$10k</span>
              </div>
            </div>
            <div className="organize">
              <p>Organizer</p>
              <span>Adewale Alabi</span>
            </div>
          </div>
        </div>
        <div className="donateCap">
          <div className="dCap">
            <img src="fh1.png" alt="donate" />

            <h3>
              Help a few communities <br /> in Abia State
            </h3>
            <p>
              Donate to a few communities in Abia State that were affected by
              the flood
            </p>

            <div className="prog">
              <div className="progg"></div>
            </div>

            <div className="goal">
              <div className="amt">
                <strong>Goal</strong>
                <span>$50k</span>
              </div>
              <div className="amt">
                <strong>Raise</strong>
                <span>$10k</span>
              </div>
            </div>
            <div className="organize">
              <p>Organizer</p>
              <span>Adewale Alabi</span>
            </div>
          </div>
          <div className="dCap">
            <img src="fh1.png" alt="donate" />

            <h3>Help a few communities in Abia State</h3>
            <p>
              Donate to a few communities in Abia State that were affected by
              the flood
            </p>

            <div className="prog">
              <div className="progg"></div>
            </div>

            <div className="goal">
              <div className="amt">
                <strong>Goal</strong>
                <span>$50k</span>
              </div>
              <div className="amt">
                <strong>Raise</strong>
                <span>$10k</span>
              </div>
            </div>
            <div className="organize">
              <p>Organizer</p>
              <span>Adewale Alabi</span>
            </div>
          </div>
          <div className="dCap">
            <img src="fh1.png" alt="donate" />

            <h3>Help a few communities in Abia State</h3>
            <p>
              Donate to a few communities in Abia State that were affected by
              the flood
            </p>

            <div className="prog">
              <div className="progg"></div>
            </div>

            <div className="goal">
              <div className="amt">
                <strong>Goal</strong>
                <span>$50k</span>
              </div>
              <div className="amt">
                <strong>Raise</strong>
                <span>$10k</span>
              </div>
            </div>
            <div className="organize">
              <p>Organizer</p>
              <span>Adewale Alabi</span>
            </div>
          </div>
        </div>

        <p className="bP">
          {/* End of result <BsFillFlagFill /> */}
        </p>
      </div>
      <div className="rg">
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default Donation;

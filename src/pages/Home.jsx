import './Home.css';
import "../index.css";
import ImAText from "../components/ImaTxt.jsx"
import JHeadshot from '../assets/images/JHeadshot.png'
import 'boxicons'
import HAbXPRec from "../components/HAbXPRec.jsx";
import HProjects from "../components/HProjects.jsx";

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="hero">
        <h1 className='outfit-font'>Hi, I'm Josh</h1>
        <div id="flex-for-homep">
          <div className="left-of-homep">
            <h2>
              From Design to Data.
            </h2>
            <p className='outfit-font'>
              I'm currently learning how to be a data analyst. With a background in graphic design, I'm focusing on data visualization and the impact it has on decision-making.
            </p>
            <Link to="/projects" className='my-work-btn'>View My Work</Link>
          </div>
          <div className="right-of-homep">
            <div className="me-and-social-btns">
              <div className="me-cover">
                <Link to="/about">
                  <img
                    className='me-cover-img'
                    src={JHeadshot}
                    alt="A headshot of what I look like."
                    />
                </Link>
                <div className="learn-more-text-in-headshot">
                  <p>Learn More About Me :&#41;</p>
                </div>
              </div>
              <div className="social-btns">
                <a target="_blank" href="https://www.linkedin.com/in/joshuahillaz0d/" style={{ "--i": 4 }}><i className='bx bxl-linkedin-square' ></i></a>
                <a target="_blank" href="https://github.com/JoshHill1" style={{ "--i": 3 }}><i className='bx bxl-github'></i></a>
                <a target="_blank" href="https://medium.com/@jjhi11240" style={{ "--i": 2 }}><i className='bx bxl-medium' ></i></a>
                <a target="_blank" href="https://www.instagram.com/josh_hil1/" style={{ "--i": 1 }}><i className='bx bxl-instagram-alt'></i></a>
              </div>
            </div>
            <div id="imatextflex">
              <p>I'm A</p>
              <ImAText />
            </div>
          </div>
        </div>
      </div>
      <HAbXPRec />
      {/* <HProjects /> */}
    </div>
    
  );
}

export default Home;
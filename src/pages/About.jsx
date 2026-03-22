import "./About.css";
// import "../index.css";
import { useState, useEffect } from "react";
import JoshBodyPhoto from "../assets/images/AboutCascade/JHeadshot1.png"
import JoshHeadshot from "../assets/images/AboutCascade/20251009_HeadshotE1.png"
import GreenShirt from "../assets/images/AboutCascade/GreenShirt.png"
import MeInTheCar from "../assets/images/AboutCascade/MeInTheCar.png"
import WhiteShirt from "../assets/images/AboutCascade/WhiteShirt.png"

const images = [
  JoshHeadshot,
  MeInTheCar,
  GreenShirt,
  WhiteShirt, 
  JoshBodyPhoto, 
];

function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle the index every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Helper to assign classes based on where the image is relative to the active index
  const getImageClass = (index) => {
    const total = images.length;
    // Calculate "offset": 0 is active, 1 is next, (total-1) is the one exiting
    const offset = (index - activeIndex + total) % total;

    if (offset === 0) return "card-front";
    if (offset === 1) return "card-back-1";
    if (offset === 2) return "card-back-2";
    if (offset === total - 1) return "card-exit";
    
    return "card-hidden"; // For any extra images not currently in the visual stack
  };

  return (
    <div className="aboutp">
      <section className="aboutp-intro">
        <div className="aboutp-intro-text">
          <h1>My name is Joshua Hill.</h1>
          <p>I am a creative thinker with a <span className="highlighted">focus on building data driven insights</span> and helping  <span className="highlighted">make informed decisions through data analytics</span>. I have a passion for <span className="highlighted">building automated workflows</span> and enjoy working with the <span className="highlighted">latest technologies</span> to build innovative solutions that <span className="highlighted">solve real-world problems</span>. While I still appreciate thoughtful design and user experience, I've picked up an <span className="highlighted">understanding of SQL, Python, and Power BI</span>. 
          <br />
          <br /><span className="highlighted">I enjoy video games</span>, allowing my mind to be <span className="highlighted">immersed in a different setting</span> while playing, as it is something I gravitated to in my childhood and plays a factor in <span className="highlighted">where I get my creativity</span> and <span className="highlighted">problem solving skills</span>. Similarly, <span className="highlighted">I enjoy long bike rides</span> and <span className="highlighted">martial arts</span>. I also spend time learning a new language &#40;currently studying Japanese&#41;, reading books, and watching YouTube videos.</p>
        </div>
        {/* Container for the images */}
        <div className="stack-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="An image of me"
              className={`stack-card ${getImageClass(index)}`}
            />
          ))}
        </div>
      </section>
      <div className="certificates">
        
      </div>
    </div>
  );
}

export default About;
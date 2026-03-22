import React from "react";
import "./HAbXPRec.css";
import 'boxicons'

function HAbXPRec() {
  return (
    <div className="profile-container">
      <div className="column about">
        <h2>About Me</h2>
        <p>
          I first got into design when I studied at Arizona State University, where I studied Graphic Information Technology. From there, I got a taste of web design and development, which led me to pursue a career in front-end design. As AI evolved, I pursued a passion towards data driven visualization and insights.
        </p>
        <p>
          My interests involve helping capture, organize, and present data in a way that is easy to understand and actionable. Living in multiple different states has allowed me to thrive in dynamic environments, continuously learning and evolving to meet the demands of the ever-changing data landscape.
        </p>
        <p>
          In addition to my day-to-day work, I stay up to date on the latest AI news and trends and technologies to expand my knowledge of what's possible, and use them for personal projects.
        </p>
        <a target="_blank" className="link-highlight" href="https://www.linkedin.com/in/joshuahillaz0d/">Connect with me on LinkedIn</a>
      </div>

      <div className="column experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <p className="date">July 2025 — Current</p>
          <h4>INTERN, DATA ANALYST <span>/ Rand Technology</span></h4>
          <p>I built reports for the company using Excel and gathered insightful data by running SQL queries while also automating repetative tasks with Python.</p>
        </div>
        <div className="experience-item">
          <p className="date">March 2025</p>
          <h4>WEB DEVELOPER <span>/ Freelance</span></h4>
          <p>Built and deployed a website that fit the clients design expectations.</p>
        </div>
        <div className="experience-item">
          <p className="date">March 2025</p>
          <h4>LOGO DESIGNER <span>/ Freelance</span></h4>
          <p>Helped the client pick out what fonts they want and helped design the look that fit their style.</p>
        </div>
      </div>

      <div className="column recent">
        <h2>Recent</h2>
        <ul className="recent-posts">
          <li><a target="_blank" href="https://github.com/JoshHill1/Calculating-Free-to-Paid-Conversion-Rate-with-SQL"><i className='bx bxl-github'></i>Calculating Free to Paid Conversion Rate with SQL Project</a></li>          
          <li><a target="_blank" href="https://medium.com/@jjhi11240/mysql-journey-4a0576b63ff4"><i className='bx bxl-medium' ></i>MySQL Journey</a></li>          
          <li><a target="_blank" href="https://medium.com/@jjhi11240/hello-world-1fe44f85ab6f"><i className='bx bxl-medium' ></i>Hello World</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HAbXPRec;
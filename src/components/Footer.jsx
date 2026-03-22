import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
import 'boxicons'


function Footer() {
  const [localTime, setLocalTime] = useState('');
  const [copied, setCopied] = useState(false);
  const email = "jjhi11240@gmail.com";

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Los_Angeles',
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setLocalTime(formatter.format(date));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="footer-container">
      <div className='footer-grid'>
        <div className="footer-text">
          <h2>About me</h2>
          <p>A growing Data Analyst with a passion for AI tools and automated integration. Prior to the AI hype, I was passionate for making visually appealing designs.</p>
        </div>

        <div className="footer-text footer-navigation">
          <h2>Navigation</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>

        <div className="footer-text footer-contact">
          <h2>Contact</h2>
          <p>California - <span className='local-time'>{localTime}</span></p>
          <div className="email-container" onClick={handleCopy}>
            <span className="email-text">{email}</span>
            <span className={`email-copy ${copied ? 'copied' : ''}`}>
              {copied ? 'Copied!' : 'Click to copy my email'}
            </span>
          </div>
          <a href='https://www.linkedin.com/in/joshuahillaz0d/'>Connect on LinkedIn</a>
        </div>

        <div className="footer-text">
          <h2>Follow Me Here</h2>
          <div className="footer-social-btns">
            <a target="_blank" href="https://www.linkedin.com/in/joshuahillaz0d/"><i className='bx bxl-linkedin-square' ></i></a>
            <a target="_blank" href="https://github.com/JoshHill1"><i className='bx bxl-github'></i></a>
            <a target="_blank" href="https://medium.com/@jjhi11240"><i className='bx bxl-medium' ></i></a>
            <a target="_blank" href="https://www.instagram.com/josh_hil1/"><i className='bx bxl-instagram-alt'></i></a>
          </div>
        </div>
      </div>
      <div className="footer-text footer-copyright">
        <p>Made with l<span className="heart">❤</span>ve by Joshua Hill. | Copyright 2026</p>
      </div>
    </div>
  )
}

export default Footer
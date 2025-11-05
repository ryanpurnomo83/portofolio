// Main.jsx
import { useState, useEffect } from 'react';
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa";
import Navbar from '../components/Navbar.jsx';
import ProfileImage from '../../public/Ryan-Purnomo.jpg';

function Main() {

  const fullText = "Hi my name is Ryan Purnomo";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i+1));
      i++;
      if(i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          html, body {
            font-family: 'Audiowide', cursive;
            overflow-x: hidden;
          }
          
          .Main{*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }}

          h1 {
            text-align: center;
            margin: 40px 0 20px 0;
            font-size: clamp(24px, 5vw, 40px); /* responsif */
          }

          .section {
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 4%;
            background-color: #2c52b3;
          }

          .container2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 4%;
          }

          .container img {
            width: 100%;
            height: 100%;
            border-radius: inherit;  /* ikut border-radius parent */
            object-fit: cover;       /* isi penuh tanpa distorsi */
            display: block;
          }

          .cursor{
            display: inline-block;
            width: 2px;
            background-color: #fff;
            animation: blink 0.7s steps(1) infinite;
            margin-left: 2px;
          }
          
          .photo-container{
            margin-top: 2%;
            width: 25%;
            background-color: #5a5b6d; 
            border-radius: 50%;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* Social row */
          .social-row {
            margin-top: 2px;
            display: flex;
            gap: 18px;
            align-items: center;
            justify-content: center;
            flex-wrap: nowrap;
          }

          .social-link {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
            background-color: rgba(255,255,255,0.08);
            border: 2px solid rgba(255,255,255,0.12);
            box-shadow: 0 6px 18px rgba(0,0,0,0.25);
            -webkit-tap-highlight-color: transparent;
          }

          .social-link:active {
            transform: scale(0.98);
          }

          .social-link:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 12px 30px rgba(0,0,0,0.35);
            background-color: rgba(255,255,255,0.12);
          }

          .social-icon {
            font-size: 28px;
            line-height: 1;
          }

          @media (max-width: 600px) {

            .container{
              padding-top: 9%;
            }

            .container2 {
              padding-top: 5%;
            }

            .photo-container{
              margin-top: 9%;
              width: 45%;
              background-color: #5a5b6d; 
              border-radius: 50%;
            }
          }
        `}
      </style>
      <div className="Main">
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="photo-container">
                <img src={ProfileImage}/>
            </div>
            <br/>
            <h1 style={{color: "#ffffff"}}>
              {displayedText}
              <span className="cursor"></span>
            </h1>
            <br/>
            <p style={{color: "#ffffff"}}>I'm an Undergraduated Student from Dian Nuswantoro University</p>
            <br/>
            <h2 style={{color: "#ffffff"}}>LET ME INTRODUCE MYSELF</h2>
            <br/>
            <p style={{color: "#ffffff"}}>I have a deep passion for software engineering and UI/UX Design, and i believe I've gained some valuable knowledge along the way</p>
            <p style={{color: "#ffffff"}}>I am proficient in programming languages such as PHP, Flutter, and Javascript</p>
            <p style={{color: "#ffffff"}}>My areas of internet include Web, Mobile and IOT Developer as well as exploring UI/UX Design</p>
            <p style={{color: "#ffffff"}}>I am also passionate about utilizing Library and Framework like Laravel, Flutter, React JS, Next JS</p>
            
            <br/>
            
          </div>
        </section>
        <section>
          <div className="container2">
            <h2>FIND ME ON</h2>
            <div className="social-row" aria-label="social links">
              <a
                className="social-link"
                href={"https://github.com/ryanpurnomo83"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub className="social-icon" />
              </a>

              <a
                className="social-link"
                href={"https://www.linkedin.com/in/ryanpunomo83/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin className="social-icon" />
              </a>

              <a
                className="social-link"
                href={"https://www.instagram.com/drp5870/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
            </div>

            <br/>
            <br/>
            <footer>
              copyright @ 2025 ryan purnomo
              <br/>
              <FaGithub/> <FaLinkedin/> <FaInstagram/>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;

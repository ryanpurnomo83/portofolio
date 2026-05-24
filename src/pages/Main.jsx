// Main.jsx
import { useState, useEffect } from 'react';
import {FaCode, FaPencilRuler, FaMicrochip, FaGlobe, FaMobileAlt, FaLaptopCode, FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa";
import Navbar from '../components/Navbar.jsx';
import ProfileImage from '../../public/Ryan-Purnomo.jpg';

function Main() {

  const fullText = "Ryan Purnomo";
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
      background: #ffffff;
    }

    .Main *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    h1{
      text-align:center;
      margin:20px 0;
      font-size:clamp(28px,5vw,48px);
      font-weight:bold;
    }

    .section{
      min-height:90vh;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    .container{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;

      padding:60px 40px;

      width:90%;
      max-width:1100px;

      margin-top:30px;

      background:
        linear-gradient(
          135deg,
          rgba(44,82,179,.9),
          rgba(30,41,59,.95)
        );

      backdrop-filter:blur(15px);

      border-radius:30px;

      box-shadow:
        0 20px 50px rgba(0,0,0,.3);
    }

    .container2{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;

      padding:60px 20px;
    }

    .container img{
      width:100%;
      height:100%;
      object-fit:cover;
      border-radius:inherit;
    }

    .cursor{
      display:inline-block;
      width:3px;
      height:45px;
      background:white;
      animation:blink .7s infinite;
    }

    .photo-container{
      width:230px;
      height:230px;

      overflow:hidden;

      border-radius:50%;

      border:6px solid rgba(255,255,255,.2);

      box-shadow:
        0 10px 35px rgba(0,0,0,.4);

      transition:.3s;
    }

    .photo-container:hover{
      transform:scale(1.05);
    }

    @keyframes blink{
      50%{
        opacity:0;
      }
    }

    /* skill area */

    .skill-wrapper{
      display:flex;
      gap:25px;
      flex-wrap:wrap;
      justify-content:center;
    }

    .skill-card{
      background:rgba(255,255,255,.08);

      padding:20px;

      border-radius:20px;

      min-width:180px;

      transition:.3s;

      border:1px solid rgba(255,255,255,.1);

      backdrop-filter:blur(10px);
    }

    .skill-card:hover{
      transform:translateY(-8px);

      background:rgba(255,255,255,.15);
    }

    .logo-icon{
      font-size:50px;
      margin-bottom:12px;
    }

    /* social */

    .social-row{
      margin-top:25px;

      display:flex;

      gap:20px;
    }

    .social-link{
      width:70px;
      height:70px;

      border-radius:50%;

      display:flex;

      align-items:center;

      justify-content:center;

      background:white;

      color:#1e293b;

      transition:.3s;

      box-shadow:
        0 8px 20px rgba(0,0,0,.2);
    }

    .social-link:hover{
      transform:
        translateY(-8px)
        rotate(8deg);

      background:#2c52b3;

      color:white;
    }

    .social-icon{
      font-size:30px;
    }

    footer{
      margin-top:40px;

      text-align:center;

      color:#64748b;
    }

    @media(max-width:600px){

      .container{
        padding:40px 20px;
      }

      .photo-container{
        width:170px;
        height:170px;
      }

      .skill-wrapper{
        flex-direction:column;
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
            <p style={{color: "#ffffff"}}>Fresh Graduated Student</p>
            <br/>
            <p style={{
              color:"#ffffff",
              fontSize:"20px",
              letterSpacing:"2px",
              fontWeight:"bold",
              position:"relative",
              paddingBottom:"10px"
            }}>
              ✨ AREAS OF INTEREST
            </p>

            <br/>

            <div style={{
              display:"flex",
              gap:"25px",
              flexWrap:"wrap",
              justifyContent:"center"
            }}>
              <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                color:"#ffffff",
                background:"rgba(255,255,255,0.08)",
                padding:"25px",
                minWidth:"180px",
                borderRadius:"20px",
                backdropFilter:"blur(10px)",
                border:"1px solid rgba(255,255,255,.12)",
                boxShadow:"0 10px 30px rgba(0,0,0,.2)",
                transition:"0.3s"
              }}>
                <FaLaptopCode
                  className="logo-icon"
                  style={{
                    marginBottom:"12px",
                    color:"#8ec5ff"
                  }}
                />
                <p style={{
                  textAlign:"center",
                  lineHeight:"1.7"
                }}>
                  Software
                  <br/>
                  Engineering
                </p>
              </div>

              <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                color:"#ffffff",
                background:"rgba(255,255,255,0.08)",
                padding:"25px",
                minWidth:"180px",
                borderRadius:"20px",
                backdropFilter:"blur(10px)",
                border:"1px solid rgba(255,255,255,.12)",
                boxShadow:"0 10px 30px rgba(0,0,0,.2)"
              }}>
                <FaPencilRuler
                  className="logo-icon"
                  style={{
                    marginBottom:"12px",
                    color:"#ffd86b"
                  }}
                />
                <p style={{
                  textAlign:"center",
                  lineHeight:"1.7"
                }}>
                  UI/UX
                  <br/>
                  Design
                </p>
              </div>
            </div>

            <br/>
            <br/>

            <p style={{
              color:"#ffffff",
              fontSize:"20px",
              letterSpacing:"2px",
              fontWeight:"bold"
            }}>
              🚀 AREAS OF PROFICIENCY
            </p>

            <br/>

            <p style={{
              color:"#ffffff",
              maxWidth:"650px",
              textAlign:"center",
              background:"rgba(255,255,255,0.08)",
              padding:"18px 28px",
              borderRadius:"16px",
              lineHeight:"1.8",
              border:"1px solid rgba(255,255,255,.12)",
              backdropFilter:"blur(10px)",
              boxShadow:"0 8px 25px rgba(0,0,0,.2)"
            }}>
              Web Development • Mobile Development • IoT Engineering
              <br/><br/>
              Exploring UI/UX Design and modern user experiences
            </p>
            <br/>
            
          </div>
        </section>
        <section>
          <div className="container2">
            <h2 style={{ color: "#ffffff"}}>FIND ME ON</h2>
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
                href={"https://www.instagram.com/drp8317/"}
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
              &copy;{ new Date().getFullYear() }
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

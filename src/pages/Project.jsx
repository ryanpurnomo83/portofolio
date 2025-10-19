import RechefImage from '../../public/Rechef-Image-Portofolio.png';
import MbbImage from '../../public/MBB-Image-Portofolio.png';
import NutriducationImage from '../../public/Nutriducation-Image-Portofolio.png';
import CardiOCareImage from '../../public/CardiOCare-Image-Portofolio.png';
import KRBAIImage from '../../public/KRBAI-Image-Portofolio.png';
import AKMImage from '../../public/AKM-Image-Portofolio.png';
import Navbar from '../components/Navbar.jsx';

function Project(){
    return(
    <>
    <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            font-family: 'Audiowide', cursive;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
          }

          h1 {
            text-align: center;
            margin: 30px 0 10px;
            font-size: clamp(24px, 5vw, 40px); /* responsif */
          }

          .project-section{
            padding-top: 550px !important;
            position: relative !important;
          }

          .container {
            padding-right: 15%;
            padding-left: 17%;
            background-color: #2c52b3;
            min-height: 100vh;
          }
          
          .grid-container{
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 4 kolom */
            gap: 20px;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
          }

          .glass-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
            width: 220%;
            max-width: 360px;
            height: 200px;
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 0.05)
            );
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            overflow-x: hidden;
            overflow-y: hidden;
          }

          .code {
            color: #fb2f38;
            transition: color 0.3s ease-out;
          }

          .glass-box:hover .code{
            cursor: pointer;
            color: #fff867;
          }

          .glass-box-label{
             position: absolute;
             bottom: 0;
             left: 0;
             width: 100%; 
             height: 35px; 
             background-color: #fb2f38;
             border-top: 2px solid #fff867;
             border-bottom-left-radius: 15px;
             border-bottom-right-radius: 15px;
             display: flex;
             justify-content: center;
             align-items: center;
             color: #ffffff;
             font-weight: bold;
          }
          
          .glass-box img {
            width: 100%;
            height: 100%;
            border-radius: inherit;  /* ikut border-radius parent */
            object-fit: cover;       /* isi penuh tanpa distorsi */
            display: block;
          }

          @media (max-width: 1024px) {
            .grid-container {
                grid-template-columns: repeat(2, 1fr);
                padding: 10px;
                gap: 5px;
              }

            .container{
              padding-top: 500%;
              padding-right: 36%;
              padding-left: 0%;
            }
          }

          @media (max-width: 600px) {
            .grid-container {
              grid-template-columns: 1fr;
            }
            
            h2{
              justify-content:center;
            }

            .project-section{
              padding-top: 1650px !important;
            }

            .container{
              padding-right: 36%;
              padding-left: 0%;
            }
            
            .glass-box{
              width: 160%;      
              max-width: 160%;  /* boleh penuh */
              height: 200px;    /* kalau mau lebih pendek di hp */
            }
            
            p{
              font-size: 14px;
            }
          }
        `}
      </style>

    <Navbar />
    <div className="project-section">
    <div className="container">
      <h2 style={{color: "#ffffff"}}>Web App Projects</h2>
      <div className="grid-container">
        <div className="glass-box">
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                CG Games (React)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
        <br/>
        <div className="glass-box" onClick={() => (window.location.href="https://github.com/Rechef-Team/rechef-web")}>
          <img src={RechefImage} alt="Rechef"/>
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Rechef (Django)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
      </div>

      <h2 style={{color: "#ffffff"}}>Mobile App Projects</h2>
      <div className="grid-container">
        <div className="glass-box">
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                LokaLingua (Flutter)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
        <br/>
        <div className="glass-box">
          <img src={NutriducationImage} alt="Rechef"/>
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Nutriducation (Flutter, Laravel)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
        <br/>
        <br/>
         <div className="glass-box">
          <img/>
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Livin Mandiri (Kotlin)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
      </div>
        <br/>

        <h2 style={{color: "#ffffff"}}>IOT App Projects</h2>
      <div className="grid-container">
        <div className="glass-box">
          <img src={MbbImage} alt="MBB"/>
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Monitoring BBM (Laravel)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
        <br/>
        <div className="glass-box" onClick={() => (window.location.href="https://cardiocare.my.id/")}>
          <img src={CardiOCareImage} alt="Rechef"/>
            <div className="glass-box-label">
              <p style={{ margin: 0 }}>
                <span className="code">&lt;</span>
                  CardiOCare (HPJ Native + Tailwind)
                <span className="code">&#47;&gt;</span>
              </p>
            </div>
        </div>
      </div>

        <br/>

      <h2 style={{color: "#ffffff"}}>Robotic Projects</h2>
      <div className="grid-container">
        <div className="glass-box">
            <img src={KRBAIImage} alt="Rechef"/>
              <div className="glass-box-label">
                <p style={{ margin: 0 }}>
                  <span className="code">&lt;</span>
                    DN-Aqua (Python, C++)
                  <span className="code">&#47;&gt;</span>
                </p>
              </div>
        </div>
      </div>
        <br/>
      <h2 style={{color: "#ffffff"}}>UI/UX Projects</h2>
      <div className="grid-container">
        <div className="glass-box">
          <img src={AKMImage} alt="Rechef"/>
            <div className="glass-box-label">
              <p style={{ margin: 0 }}>
                <span className="code">&lt;</span>
                  Anjungan Kesehatan Mandiri (Figma)
                <span className="code">&#47;&gt;</span>
              </p>
            </div>
        </div>
      </div>
      
      <br/>

      <h2 style={{color: "#ffffff"}}>Game Projects</h2>
      <div className="grid-container">
        <div className="glass-box">
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Cube Dash Games (Unity, C#)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
      </div>
      
      <br/>

      <h2 style={{color: "#ffffff"}}>Game Projects</h2>
      <div className="grid-container">
        <div className="glass-box">
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Cube Dash Games (Unity, C#)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
      </div>
        
        <br/>

        <h2 style={{color: "#ffffff"}}>Game Projects</h2>
      <div className="grid-container">
        <div className="glass-box">
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Cube Dash Games (Unity, C#)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
      </div>
        
        <br/>
      </div>
      </div>
    </>
    );
}
export default Project;
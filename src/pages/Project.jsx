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

  /* PASTIKAN NAVBAR FIXED */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    z-index: 1000;
    background: your-navbar-color; /* tambahkan background */
  }

  .container {
    padding-top: 80px; /* Jarak dari navbar fixed */
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 40px;
    background-color: #2c52b3;
    min-height: 100vh;
    box-sizing: border-box; /* PENTING! */
  }
  
  .grid-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px 0;
    width: 100%;
    box-sizing: border-box;
  }

  .glass-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 100%; /* UBAH dari 220% menjadi 100% */
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
    overflow: hidden;
    box-sizing: border-box;
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
     box-sizing: border-box;
  }
  
  .glass-box img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 15px 0;
    }

    .container {
      padding-left: 3%;
      padding-right: 3%;
    }
  }

  @media (max-width: 600px) {
    .grid-container {
      grid-template-columns: 1fr;
      gap: 15px;
      padding: 15px 0;
    }
    
    .container {
      padding-top: 140px !important; /* Sesuaikan untuk mobile */
      padding-left: 15px;
      padding-right: 15px;
    }
    
    .glass-box {
      width: 100%; /* UBAH dari 160% menjadi 100% */
      height: 150px;
    }
    
    .glass-box-label p {
      font-size: 14px;
      text-align: center;
      padding: 0 5px;
    }
  }
`}
</style>
    
    <Navbar />
    <div className="container">
      <h2 style={{color: "#ffffff", marginTop: "20px"}}>Web App Projects</h2>
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

      <h2 style={{color: "#ffffff", marginTop: "40px"}}>Mobile App Projects</h2>
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
        <div className="glass-box">
          <img src={NutriducationImage} alt="Nutriducation"/>
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Nutriducation (Flutter, Laravel)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
        <div className="glass-box">
          <div className="glass-box-label">
            <p style={{ margin: 0 }}>
              <span className="code">&lt;</span>
                Livin Mandiri (Kotlin)
              <span className="code">&#47;&gt;</span>
            </p>
          </div>
        </div>
      </div>

      {/* Lanjutkan dengan section lainnya... */}
    </div>
  </>
  );
}
import Navbar from '../components/Navbar.jsx';
import CSharpImage from '../../public/Csharp.png';

function About(){
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
                }
                
                .container{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding-top: 58%;                    
                }

                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr); /* 4 kolom */
                    gap: 20px;
                    padding: 20px;
                }

                .glass-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid rgba(255,255,255,0.2);
                    border-radius: 15px;
                    padding: 20px;
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                    transition: transform 0.2s ease-in-out;
                    cursor: pointer;
                }

                .glass-box:hover {
                    transform: scale(1.05);
                }

                .glass-box img {
                    max-width: 80px;
                    margin-bottom: 10px;
                }

                .glass-box-label p {
                    font-size: 14px;
                    text-align: center;
                    margin: 0;
                }

                /* Responsif: hp jadi 2 kolom, layar kecil jadi 1 */
                @media (max-width: 1024px) {
                    .grid-container {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .grid-container {
                        grid-template-columns: 1fr;
                    }
                    
                    .container{
                        padding-top: 900%;
                    }
                }
            `}
        </style>

        <Navbar/>
        <div className="container">
           <h1>Know Who I'm</h1>
           <p style={{textAlign: "center"}}>Hi everyone, I am Ryan Purnomo from Semarang, Indonesia. I'm an Informatics Engineering Student at Dian Nuswantoro University.</p>
           <p style={{textAlign: "center"}}>Beyond Academics, my experiences outside of university include : </p>

           <h1>Tech I use</h1>
           <div className="grid-container">
                <div className="glass-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Laravel /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://cdn.worldvectorlogo.com/logos/codeigniter.svg" style={{ width: "20%" }}/>
                    <div className="glass-box-label"><p>&lt; CodeIgniter /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://www.php.net//images/logos/php-logo.svg" style={{ width: "45%" }}/>
                    <div className="glass-box-label"><p>&lt; PHP /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; React JS /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://cdn.creazilla.com/icons/3244252/nextjs-icon-md.png" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Next JS /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/>
                    <div className="glass-box-label"><p>&lt; Node JS /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://avatars.githubusercontent.com/u/14101776?s=200&v=4" style={{ width: "22%" }}/>
                    <div className="glass-box-label"><p>&lt; Flutter /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://nextsoftware.io/files/images/logos/main/django-logo.png" style={{ width: "60%" }}/>
                    <div className="glass-box-label"><p>&lt; Django /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Python /&gt;</p></div>
                </div> 
                
                <div className="glass-box">
                    <img src="https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F6d1df49565a2ad20ffa8386f1465ba52039133e3-1920x1080.png&w=3840&q=75" style={{ width: "90%" }}/>
                    <div className="glass-box-label"><p>&lt; Unity /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src={CSharpImage} style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; C# /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" style={{ width: "22%" }}/>
                    <div className="glass-box-label"><p>&lt; C++ /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png" style={{ width: "23%" }}/>
                    <div className="glass-box-label"><p>&lt; C /&gt;</p></div>
                </div> 
               
                <div className="glass-box">
                    <img src="https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Platform IO /&gt;</p></div>
                </div> 
           </div>

           <h1>Tools I use</h1>
           <div className="grid-container">
                <div className="glass-box">
                    <img src="https://code.visualstudio.com/assets/images/code-stable.png" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; VS Code /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBR1mpxxSHRjAeQKNY.14SpGglSw9Q_T17Vj6iz5SLNOCf__D3E7g2HXS_dGjwUnSQiy8CMy2I7RwP_CyVWBj74g-&format=source&h=307" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Arduino IDE /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Postman /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" style={{ width: "14%" }}/>
                    <div className="glass-box-label"><p>&lt; Figma /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://www.apachefriends.org/images/xampp-logo-ac950edf.svg" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Xampp /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://laragon.org/logo.svg" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Laragon /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://img.favpng.com/5/21/1/docker-logo-kubernetes-microservices-cloud-computing-png-favpng-qZv8eQ1wcWx99NuZ6NB8HHHmk.jpg" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Docker /&gt;</p></div>
                </div> 

                <div className="glass-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" style={{ width: "25%" }}/>
                    <div className="glass-box-label"><p>&lt; Github /&gt;</p></div>
                </div> 

                
           </div>
        </div>
        </>
    );
}

export default About;

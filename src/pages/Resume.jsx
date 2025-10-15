import { Document, Page, pdfjs } from 'react-pdf';
// import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';

import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function Resume(){
    {/*const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }*/}

    return(
        <>
        <style>
            {`
                html, body{
                    margin: 0;
                    padding: 0;
                    font-family: 'Audiowide', cursive;
                    width: 100%;
                    height: 100%;
                    overflow-x: hidden;
                }

                .pdf-viewer {
                    padding-top: 20%;
                    width: 100vh;
                    height: 138vh;
                    border: none;
                }

                @media(max-width: 600px){

                    html, body{
                        overflow-y: hidden;
                    }

                    .pdf-viewer {
                        width: 85vw;     /* ubah jadi proporsional ke viewport */
                        height: 140vw;   /* sesuaikan tinggi agar tidak terlalu besar */
                        padding-top: 1%;
                    }
                }
            `}
        </style>
        <Navbar />
        <div className="pdf-viewer">
            <iframe
                src={window.innerWidth <= 600
                    ? "/Indonesia-Resume-Ryan-Purnomo-Kerja.pdf#zoom=44" : "/Indonesia-Resume-Ryan-Purnomo-Kerja.pdf#zoom=100"}
                    className="pdf-viewer"
                    title="Resume PDF"
            ></iframe>

            <div style={{ textAlign: "center", margin: "20px"}}>
                <a href="/Indonesia-Resume-Ryan-Purnomo-Kerja.pdf" download>
                <button type="button" style={{ border: "1px solid #000000" }}>Download CV</button>
                </a>
            </div>
        </div>
        </>
    );
}
export default Resume;
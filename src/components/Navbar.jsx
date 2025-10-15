import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <style>
            {`
                .nav-link {
                color: black;
                text-decoration: none; /* opsional: hilangkan underline */
                font-weight: bold;     /* opsional */
                }

                .nav-link:hover {
                color: blue;
                }
            `}
        </style>
        <div>
            <div style={{
                width: "100%",
                backgroundColor: "#ffffff",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                color: "#fb2f38",
                padding: "15px 20px",
                display: "flex", // pakai flex supaya teks kiri & burger kanan
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
                position: "fixed",   // biar selalu di atas
                top: 0,
                left: 0,
                zIndex: 1000,
                boxSizing: "border-box"
            }}>
                <span>Ryan Purnomo</span>
                <FaBars size={24} color="#fb2f38" style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}/>
            </div>
            
            <div style={{
                display: isOpen ? "block" : "none",
                width: "100%",
                backgroundColor: "#ffffff",
                position: "fixed",   // ✅ ini penting
                top: 50,             // kasih offset sesuai tinggi navbar (misalnya 60px)
                left: 0,
                zIndex: 999,
                boxSizing: "border-box"
            }}>
                <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "10px 0 0 0",
                width: "100%",
                }}>
                 <li style={{ padding: "8px 0" }}>
                    <Link to="/" className="nav-link">
                    <FaHome /> Home
                    </Link>
                 </li>
                 <li style={{ padding: "8px 0" }}>
                    <Link to="/about" className="nav-link">
                    <FaUser /> About
                    </Link>
                 </li>
                 <li style={{ padding: "8px 0", color: "#eee" }}>
                    <Link to="/project" className="nav-link">
                    <FaProjectDiagram/> Projects
                    </Link>
                 </li>
                 <li style={{ padding: "8px 0" }}>
                    <Link to="/resume" className="nav-link">
                    <FaFileAlt/> Resume    
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </>
    );
}
export default Navbar;

// #fff867
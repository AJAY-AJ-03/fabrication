"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaIndustry, FaCogs, FaTools, FaMapMarkerAlt, FaCalculator } from "react-icons/fa"; 

export default function Navbar() {
   const [isHidden, setIsHidden] = useState(false);
   const [selectedItem, setSelectedItem] = useState("/");
    // let lastScrollY = 0;
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 150) {
          // Scrolling down, hide the header
          setIsHidden(true);
        } else {
          // Scrolling up, show the header
          setIsHidden(false);
        }
        // lastScrollY = window.scrollY;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <nav>
      {/* <div className={`headerContainer ${isHidden ? 'hidden' : ''}`}> */}
      <div className={`navbar ${isHidden ? 'hidden' : ''}`}>
        {/* Residential */}
        <Link href="/" onClick={()=>selectedItem("/")}  className={`nav-item ${selectedItem === "/" ? "selected" : ""} ${isHidden ? 'hidden' : ''}`}>
          <FaHome className={`nav-icon ${isHidden ? 'hidden': ''}`} /><p className={`para ${isHidden ? 'hidden': ''}`}> Residential</p>
        </Link>

        {/* <div style={{width: '2px', height: '100px', backgroundColor: 'black'}}>

        </div> */}
        <div className={`line ${isHidden ? 'hidden' : ''}`}>

        </div>

        {/* Commercial */}
        <Link
          href="/About"
          onClick={() => setSelectedItem("/About")}
          className={`nav-item ${selectedItem === "/About" ? "selected" : ""} ${isHidden ? "hidden" : ""}`}
        >
          <FaIndustry className={`nav-icon ${isHidden ? 'hidden': ''}`} /><p className={`para ${isHidden ? 'hidden': ''}`}> Commercial</p>
        </Link>

        <div className={`line ${isHidden ? 'hidden' : ''}`}>

        </div>
        

        {/* Industrial */}
        <Link
          href="/Services"
          onClick={() => setSelectedItem("/Services")}
          className={`nav-item ${selectedItem === "/Services" ? "selected" : ""} ${isHidden ? "hidden" : ""}`}
        >
          <FaCogs className={`nav-icon ${isHidden ? 'hidden': ''}`} /> <p className={`para ${isHidden ? 'hidden': ''}`}> Industrial</p>
        </Link>

        <div className={`line ${isHidden ? 'hidden' : ''}`}>
          
        </div>

        {/* Automation */}
        <Link
          href="/Testimonials"
          onClick={() => setSelectedItem("/Testimonials")}
          className={`nav-item ${selectedItem === "/Testimonials" ? "selected" : ""} ${isHidden ? "hidden" : ""}`}
        >
          <FaTools className={`nav-icon ${isHidden ? 'hidden': ''}`} /><p className={`para ${isHidden ? 'hidden': ''}`}> Automation</p>
        </Link>

        <div className={`line ${isHidden ? 'hidden' : ''}`}>
          
        </div>

        {/* MEP */}
        <Link
          href="/Location"
          onClick={() => setSelectedItem("/Location")}
          className={`nav-item ${selectedItem === "/Location" ? "selected" : ""} ${isHidden ? "hidden" : ""}`}
        >
          <FaMapMarkerAlt className={`nav-icon ${isHidden ? 'hidden': ''}`} /> <p className={`para ${isHidden ? 'hidden': ''}`}> MEP</p>
        </Link>

        <div className={`line ${isHidden ? 'hidden' : ''}`}>
          
        </div>

        {/* Calculator */}
        <Link
          href="/Contact"
          onClick={() => setSelectedItem("/Contact")}
          className={`nav-item ${selectedItem === "/Contact" ? "selected" : ""} ${isHidden ? "hidden" : ""}`}
        >
          <FaCalculator className={`nav-icon ${isHidden ? 'hidden': ''}`} /> <p className={`para ${isHidden ? 'hidden': ''}`}> Calculator</p>
        </Link>
      </div>
    </nav>
  );
}

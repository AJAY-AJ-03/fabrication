"use client"
import { useEffect, useState } from 'react';
import '../styles/header.css';

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
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
    <div className={`headerContainer ${isHidden ? 'hidden' : ''}`}>
      <div className='first'>
        <img src="https://mcclellandsroofing.com/nitropack_static/wQTNgAfQgfqSNTklVYDSqhOUzhJdHcBp/assets/images/optimized/rev-c7a786b/mcclellandsroofing.com/wp-content/uploads/2024/10/Group-1000009420.svg" alt="" />
      </div>
      <div className='middle'>
        <a href="https://mcclellandsroofing.com">
          {/* <img
            src="https://mcclellandsroofing.com/nitropack_static/wQTNgAfQgfqSNTklVYDSqhOUzhJdHcBp/assets/images/optimized/rev-c7a786b/mcclellandsroofing.com/wp-content/uploads/2024/06/output-onlinegiftools.gif"
            alt="Flat Roofing In Pittsburgh, PA | Pittsburgh Flat Roof Repair"
            decoding="async"
            className="lazyloaded"
            id="MjQzOjE1NQ==-1"
          /> */}
          <img src="/K-logo.png" alt="" />
        </a>
      </div>
      <div className='last'>
        <img src="/nav-right.jpeg" alt="" />
      </div>
    </div>
  );
}

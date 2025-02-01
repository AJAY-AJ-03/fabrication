// import "../styles/hero.css"

// import React from "react";

// const FlatRoofing = () => {
//   return (
//     <div style={{marginTop:"200px"}} className="flat-roofing-container">
//       <div className="heading">
//       <h1 className="title">FLAT ROOFING IN PITTSBURGH, PA</h1>
//       </div>
      
//       <div className="image-section">
//         <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/XV/NB/AG/2132833/light-duty-fabrication-work.jpg  " alt="Roof 1" className="image" />
//         {/* <div className="icon">
//           <span className="icon-text">⚙️</span>
//         </div> */}
//         <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/XV/NB/AG/2132833/light-duty-fabrication-work.jpg" alt="Roof 2" className="image" />
//       </div>
//       <div className="content">
//         <p>
//           When you are looking for a roofing system that will last and provide
//           you with a way to save money, a flat roofing system in Pittsburgh, PA,
//           might be the best option for you and your home.
//         </p>
//         <p>
//           With this type of system, you can get the look you want, the
//           protection you need, and all at a price that fits your budget.
//         </p>
//         <p>
//           There are many styles to choose from when choosing a flat roofing
//           system. You can go with the traditional style or go with one of the
//           newer options available today.
//         </p>
//       </div>
//       {/* <button className="quote-button">Instant Quote</button> */}
//     </div>
//   );
// };

// export default FlatRoofing;


// import "../styles/hero.css"
// export default function HeroSection() {
//   return (
//     <div className="hero-section">
//       <h1>Professional Fabrication Company</h1>
//       <p>We Go Above and Beyond!</p>
//       <div className="call-button">(412) 206-6706</div>
//     </div>
//   );
// }

import React from "react";
import "../styles/hero.css";

export default function HomePage() {
  return (
    <div style={{marginTop:"186px"}} className="container"/* {styles.container} */>
      {/* Background Video */}
      <video style={{}} className="backgroundVideo"/* {styles.backgroundVideo} */ src="/video3.mp4" autoPlay loop muted playsInline></video>

      {/* Content */}
      {/* <div  className="content">
        <h1>Welcome to Our Website</h1>
        <p>Experience immersive designs and exceptional content</p>
        <button className="button">Get Started</button>
      </div> */}
    </div>
  );
}

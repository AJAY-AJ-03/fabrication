"use client"
import { useEffect, useState, useRef } from "react";
import "../styles/CustomerService.css"
const CustomerService = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const target = 650;
  const duration = 2000; // Animation duration in milliseconds
  const framesPerSecond = 50; // Number of updates per second
  const steps = duration / framesPerSecond; // Total number of updates
  const increment = Math.ceil(target / steps); // Increment per update
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger when visible
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Reset the count when the element becomes visible again
      setCount(0);

      const timer = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + increment;
          return nextCount >= target ? target : nextCount;
        });
      }, 1000 / framesPerSecond); // Update based on FPS

      return () => clearInterval(timer);
    }
  }, [isVisible, increment, target]);
  return (
    <section className="customer-service">
      {/* main */}
      <div className="main-container">
        {/* first */}
        <div className="first-Wrapper">
          {/* para1 */}
          <div className="first-Wrapper-para">
            <p>
              McClellands Contracting and Roofing LLC is a reliable house remodeling and roofing company in Pittsburgh, serving Bridgeville, Sewickley, Ross Township, PA, and nearby areas within 20 miles.
            </p>
          </div>
          {/* img 1 */}
          <div className="first-Wrapper-image">
            <img src="https://mcclellandsroofing.com/nitropack_static/wQTNgAfQgfqSNTklVYDSqhOUzhJdHcBp/assets/images/optimized/rev-c7a786b/mcclellandsroofing.com/wp-content/uploads/2024/05/Rectangle-102.png" alt="" />
          </div>
        </div>

        {/* Second */}
        <div className="second-Wrapper">
          {/* img2 */}
          <div className="second-Wrapper-image">
            <img src="https://mcclellandsroofing.com/nitropack_static/wQTNgAfQgfqSNTklVYDSqhOUzhJdHcBp/assets/images/optimized/rev-c7a786b/mcclellandsroofing.com/wp-content/uploads/2024/05/Rectangle-102.png" alt="" />
          </div>


          <div className="second-Wrapper-para">
            <p>
              We offer unparalleled products and quality customer service. We can help any homeowner in the area with their basement and kitchen remodeling, roofing, siding, soffit, fascia, and gutter needs. We are a GAF Master Elite® contractor providing emergency roofing services and helping with homeowners insurance claims.

              Depending on your needs, we can provide you with stunning bathroom remodeling or a full roof replacement service to protect your investment and family for years to come. Check out our gallery to learn more about our residential roof replacement, soffit & fascia repair, and gutter work!
            </p>
            <div className="bottom-bar">
              {/* first */}
              <div className="item-one" ref={counterRef}>
                <span>{count}+ </span>
                <p>
                  5Star Reviews
                </p>
              </div>

              {/* second */}
              <div className="item-two">
                <img src="https://mcclellandsroofing.com/nitropack_static/wQTNgAfQgfqSNTklVYDSqhOUzhJdHcBp/assets/images/optimized/rev-c7a786b/mcclellandsroofing.com/wp-content/uploads/2024/05/NicePng_owens-corning-logo-png_2405038-1.png" alt="" />

              </div>
              {/* third */}
              <div className="item-three">
                <a href="/">
                  Know More
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default CustomerService
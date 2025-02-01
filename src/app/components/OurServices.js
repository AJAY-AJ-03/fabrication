import "../styles/OurServices.css"
const OurServices = () => {
  return (
    <section>
      <div className="services-title">
        <h1>OUR RESIDENTIAL ROOFING SERVICES</h1>
      </div>

      <div className="service-container">
        <div className="service-body">
          <h3>Roof Inspection</h3>
          <div className="services-para">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, corrupti, assumenda, pariatur repudiandae similique sed ea saepe quod veritatis aspernatur quia odit doloremque explicabo rem? Sunt ducimus minima cum commodi.</p>
          </div>
          <a style={{ color: "#592d2e" }} href="/">Learn more </a>
        </div>

        {/* service types */}
        <div className="type-container">
          {/* <div className="first-maincontainer"> */}
            <div className="first-type">
              <h3>
                Roof Inspection
              </h3>
              <img style={{width:"250px", height:"150px"}} src="https://img.freepik.com/free-photo/arc-welding-steel-construction-site_2831-685.jpg" alt="" />
            {/* </div> */}
          </div>
          {/* <div className="first-maincontainer"> */}
            <div className="first-type">
              <h3>
                Roof Inspection
              </h3>
              <img style={{width:"250px", height:"150px"}} src="https://img.freepik.com/free-photo/arc-welding-steel-construction-site_2831-685.jpg" alt="" />
            </div>
          {/* </div> */}
          {/* <div className="first-maincontainer"> */}
            <div className="first-type">
              <h3>
                Roof Inspection
              </h3>
              <img style={{width:"250px", height:"150px"}} src="https://img.freepik.com/free-photo/arc-welding-steel-construction-site_2831-685.jpg" alt="" />
            </div>
          {/* </div> */}
          {/* <div className="first-maincontainer"> */}
            <div className="first-type">
              <h3>
                Roof Inspection
              </h3>
              <img style={{width:"250px", height:"150px"}} src="https://img.freepik.com/free-photo/arc-welding-steel-construction-site_2831-685.jpg" alt="" />
            </div>
          {/* </div> */}
        </div>
      </div>

    </section>
  )
}
export default OurServices
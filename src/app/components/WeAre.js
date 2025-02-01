import "../styles/WeAre.css"
const WeAre = () => {
  return (
    <section className="my-container">
      {/* main */}
      <div className="main-container">
        {/* for first */}
        <div className="first-container">
          {/* we are... */}
          <div className="image-container">
            <img src="https://t4.ftcdn.net/jpg/04/88/36/87/360_F_488368758_x4bf8mcVimr9gSZW7WJ0Dfpd9GfpRVFZ.jpg" alt="" />
          </div>
          {/* logo */}
          <div className="logo-container">
            <p>abc</p>
            {/* <img src="/K-logo.png" alt="" /> */}
          </div>
        </div>
        {/* second */}
        <div className="second-container">
          <div className="para-container">
            <p>If Our Name Goes On It,
              We Stand Behind It, So You Can Stand In It</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WeAre
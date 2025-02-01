
import "../styles/testimonial.css"
const Testimonial = () => {
  const testimonials = [
    {
      name: "Abbey Walters",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww", // Replace with actual image URL
      feedback:
        "The entire team we had working on our basement was extremely professional and made sure everything was meticulously addressed. All projects are nuanced, but the guys made sure to check-in with us daily on progress and decisions needed. I can’t recommend McClellands enough!",
    },
    {
      name: "Mike DaVia",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww", // Replace with actual image URL
      feedback:
        "Great pricing, outstanding professionalism, and work done right the first time! I will be using and recommending McClellands to anyone in earshot!",
    },
    // {
    //   name: "Sarah Johnson",
    //   rating: 5,
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww", // Replace with actual image URL
    //   feedback:
    //     "The team was exceptional in their craft and communication. I’ve never seen a company so dedicated to making sure their clients are happy every step of the way.",
    // },
    // {
    //   name: "John Smith",
    //   rating: 5,
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww", // Replace with actual image URL
    //   feedback:
    //     "Absolutely thrilled with the work done! Every little detail was handled with professionalism and care. Highly recommend McClellands!",
    // },
  ];
  return (
    <section className="TestimonialContainer">
      <div className="MainContainer">

        {/* Testimonial Items */}
        <div className="ItemContainer">

          {/* Title */}
          <div className="CustomerTitle">
            <h2>Our Happy Customers</h2>
          </div>

          {/* Google */}
          <div className="googleReview">
            <img src="/gf.svg" alt="" />
          </div>

          {/* Car  */}
          <div className="carImg">
            <img style={{ width: "400px" }} src="/car.webp" alt="" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="Testimonial">
          {testimonials.map((d) => [
            <div className="test-sub" key={d}>
              <div className="feedback-profile">
                <img style={{ width: "70px", height: "70px", borderRadius: "50%" }} src={d.image} alt="" />


                <p>{d.name}</p>
              </div>

              <div className="feedback-para">
                <p>{d.feedback}</p>
              </div>


            </div>
          ])}

        </div>

      </div>
    </section>
  )
}
export default Testimonial
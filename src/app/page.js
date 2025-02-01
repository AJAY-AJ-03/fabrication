
import Form from "./components/Form";
import GoogleReview from "./components/Testimonial";
import HeroSection from "./components/HeroSection";
import WeAre from "./components/weAre";
import CustomerService from "./components/CustomerService";
import OurVideo from "./components/OurVideo";
import OurServices from "./components/OurServices";
import CommercialServices from "./components/CommercialServices";
import FabricationProcess from "./components/FabricationProcess";
import Material from "./components/Material";

export default function Home() {
  return (
    <main>
      {/* <TopBar />
      <Header />
      <Navbar /> */}
      <HeroSection />
      <GoogleReview />
      <WeAre />
      <CustomerService />
      {/* <Form /> */}
      <OurVideo />
      <OurServices />
      <CommercialServices />
      <FabricationProcess />
      <Material />
      
      
    </main>
  );
}

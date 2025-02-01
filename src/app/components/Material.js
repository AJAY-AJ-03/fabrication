"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const images = [
  "https://media.istockphoto.com/id/1413740278/photo/snow-guard-for-safety-in-winter-on-house-roof-top-covered-with-ceramic-shingles-tiled.jpg?s=612x612&w=0&k=20&c=YD5oDFnuRQVcpet6imZw1brmo0_aKP50sbckVnpBg4U=",
  "https://media.istockphoto.com/id/1413740278/photo/snow-guard-for-safety-in-winter-on-house-roof-top-covered-with-ceramic-shingles-tiled.jpg?s=612x612&w=0&k=20&c=YD5oDFnuRQVcpet6imZw1brmo0_aKP50sbckVnpBg4U=",
  "https://media.istockphoto.com/id/1413740278/photo/snow-guard-for-safety-in-winter-on-house-roof-top-covered-with-ceramic-shingles-tiled.jpg?s=612x612&w=0&k=20&c=YD5oDFnuRQVcpet6imZw1brmo0_aKP50sbckVnpBg4U=",
  "https://media.istockphoto.com/id/1413740278/photo/snow-guard-for-safety-in-winter-on-house-roof-top-covered-with-ceramic-shingles-tiled.jpg?s=612x612&w=0&k=20&c=YD5oDFnuRQVcpet6imZw1brmo0_aKP50sbckVnpBg4U=",
  "https://media.istockphoto.com/id/1413740278/photo/snow-guard-for-safety-in-winter-on-house-roof-top-covered-with-ceramic-shingles-tiled.jpg?s=612x612&w=0&k=20&c=YD5oDFnuRQVcpet6imZw1brmo0_aKP50sbckVnpBg4U="
];

export default function Material() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      background: "#222",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={prevSlide} style={{ background: "none", border: "none", cursor: "pointer", color: "white" }}>
          <ChevronLeft size={32} />
        </button>
        <div style={{ display: "flex", gap: "10px" }}>
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                height: "200px",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                border: activeIndex === index ? "2px solid gold" : "none"
              }}
            ></div>
          ))}
        </div>
        <button onClick={nextSlide} style={{ background: "none", border: "none", cursor: "pointer", color: "white" }}>
          <ChevronRight size={32} />
        </button>
      </div>
      <div style={{ border:"1px solid white", textAlign: "center", marginTop: "20px", color: "white", padding:"55px" }}>
        <h2 style={{ fontSize: "24px", margin: "10px 0" }}>Asphalt Shingles</h2>
        <p style={{ fontSize: "16px", maxWidth: "500px" }}>
          Cost-effective and durable, asphalt shingles offer various styles for
          residential projects. We ensure proper underlayment and nailing for
          maximum protection.
        </p>
        <a href="#" style={{ color: "gold", textDecoration: "none", fontSize: "18px" }}>
          Learn More <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

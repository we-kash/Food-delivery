import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Foodcard from "../components/Foodcard";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Carousel />
        </div>
        <div className="m-3"> <Foodcard /></div>
        <div className="m-3"> <Foodcard /></div>
        <div className="m-3"> <Foodcard /></div>
        <div className="m-3"> <Foodcard /></div>
        <Footer />
      </div>
    </div>
  );
}

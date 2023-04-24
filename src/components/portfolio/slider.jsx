import React from "react";
import Slider from "react-slick";

function slider() {

  var settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true
  };
  return (
    <Slider {...settings}>
      <div>
        <h1 className="text-center">Analisa.io</h1>
        <a target="_blank" style={{textDecoration: "none"}} href="https://analisa.io" rel="noreferrer">
        <img src="/assets/img/portfolio/mockup-analisa.png" alt="" />
        </a>
      </div>
      <div>
        <h1 className="text-center">Hawksight.co</h1>
        <a target="_blank" style={{textDecoration: "none"}} href="https://hawksight.co" rel="noreferrer">
          <img src="/assets/img/portfolio/mockup-hawksight.png" alt="" />
        </a>
      </div>
      <div>
        <h1 className="text-center">MandiriKartuKredit.com</h1>
        <a target="_blank" style={{textDecoration: "none"}} href="https://mandirikartukredit.com" rel="noreferrer">
          <img src="/assets/img/portfolio/mockup-mandiri-kartukredit.png" alt="" />
        </a>
      </div>
    </Slider>
  )
}

export default slider
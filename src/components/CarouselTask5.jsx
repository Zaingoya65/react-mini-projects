//Task 5

import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImgSlider() {
  const timeIntervals = [2000, 1500, 1000, 500];

  const imgUrl = [
    "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=6000",
    "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const altImg = ["first img", "second img", "third img", "fourth img"];
  const headingCap = [
    "first slide",
    "second slide",
    "third slide",
    "fourth slide",
  ];

  const para =
    "this is para of slide  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, reprehenderit! ";

  return (
    <>
      <Carousel>
        {imgUrl.map((src, index) => (
         <Carousel.Item interval={timeIntervals[index]} key={index} className="imagesSlider">

            <img
              src={imgUrl[index]}
              alt={altImg[index]}
              className="d-block w-100"
            />

            <Carousel.Caption className="text-responsive">
              <h1>{headingCap[index]}</h1>
              <p>{para}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Carousel;




import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CAROUSEL_ELEMENTS from "../../assetsSrc/data/data-homecarousel";

import "./../../css/styles.css";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home-carousel">
      <div className="container-fluid">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={4000}
          pause={"hover"}
          touch={true}
          indicators={false}
        >
          {CAROUSEL_ELEMENTS.map((el) => (
            <Carousel.Item key={el.id}>
              <img
                className="d-block w-100"
                src={el.path}
                alt={el.description}
              />
              <Carousel.Caption>
                <p className="slogan-carousel">{el.slogan}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;

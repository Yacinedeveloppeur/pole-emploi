import React from "react";

//STYLES :
import { CarouselContainer } from "../../styles/headerStyle/carouselStyle";

const Carousel = (props) => {
  return (
    <CarouselContainer className={props.hideCarousel}>
      <section className="carousel" aria-label="Gallery" id="top">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <p>YACINE - DEVELOPPEUR WEB</p>
            </div>
          </li>
          <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <p>WEBMASTER</p>
            </div>
          </li>
          <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <p>WEBDESIGNER</p>
            </div>
          </li>
        </ol>
      </section>
    </CarouselContainer>
  );
};

export default Carousel;

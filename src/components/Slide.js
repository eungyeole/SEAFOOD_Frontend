const React = require('react');
const { Motion, spring } = require('react-motion');
const { useState, useEffect, memo } = React;

const Slider= require('react-slick').default;

require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")
const { faChevronRight, faChevronLeft } = require("@fortawesome/free-solid-svg-icons")

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="next"
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
    </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="prev"
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
         <FontAwesomeIcon icon={faChevronLeft} />
    </div>
    );
  }

const Slide = memo( () => {
    const [state, setState] = useState(0)

    const motionOption = { stiffness: 60, daping: 20, precision: 0 }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        fade: true,
    };

    return (
        <>
            <div className="slide-wrapper">
                    <Slider {...settings}>
                        <div>
                            <div className="red"></div>
                        </div>
                        <div>
                            <div className="orange"></div>
                        </div>
                        <div>
                            <div className="yellow"></div>
                        </div>
                        <div>
                            <div className="blue"></div>
                        </div>
                        <div>
                            <div className="green"></div>
                        </div>
                    </Slider>
            </div>
        </>
    );
});

module.exports = Slide;
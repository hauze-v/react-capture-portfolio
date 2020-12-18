import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Styles
import { Hide } from "../styles";
// Images
import athlete from "../img/athlete-small.png";
import couple from "../img/couple.jpg";
import car from "../img/car.jpg";
// Animations
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  pageAnimation,
  fadeAnim,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
// Components
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  // useScroll State
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <>
      <ScrollTop />
      <Work
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ background: "#fff" }}
      >
        <motion.div variants={sliderContainer} className="div">
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>

        <Movie>
          <motion.h2 variants={fadeAnim}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <Hide>
              <motion.img variants={photoAnim} src={athlete} alt="athlete" />
            </Hide>
          </Link>
        </Movie>
        <Movie
          ref={element}
          variants={fadeAnim}
          animate={controls}
          initial="hidden"
        >
          <h2>The Racer</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-racer">
            <img src={car} alt="a racer" />
          </Link>
        </Movie>
        <Movie
          ref={element2}
          variants={fadeAnim}
          animate={controls2}
          initial="hidden"
        >
          <h2>Good Times</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/good-times">
            <img src={couple} alt="good times" />
          </Link>
        </Movie>
      </Work>
    </>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    padding-bottom: 5rem;
    h2 {
      font-size: 3rem;
    }
  }
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;

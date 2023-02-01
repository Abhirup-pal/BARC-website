import React from 'react'
import classes from 'assets/css/Gallery_module.css'
import classnames from "classnames";

import {
  Container,
  Col,
  Button,
  UncontrolledCarousel
} from "reactstrap";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, width: "100%", transition: { duration: 0.5 } },
  hidden: { opacity: 0, width: 0 }
};

const carouselItems = [
  {
    src: require("assets/img/2019_D.jpg"),
    altText: "Slide 1"
  },
  {
    src: require("assets/img/DSC_0180.JPG"),
    altText: "Slide 3"
  },
  {
    src: require("assets/img/2018_A.jpg"),
    altText: "Slide 4"
  },
  {
    src: require("assets/img/2018_E.jpg"),
    altText: "Slide 5"
  },
  {
    src: require("assets/img/DSC_0269.JPG"),
    altText: "Slide 6"
  }
];

function GallerySection() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id="gallery-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>

        <center>
          <Col lg="8" style={{ marginTop: "3rem" }}>
            <h1 className='text-center title'>
              GALLERY
            </h1>
            <UncontrolledCarousel
              items={carouselItems}
              indicators={false}
              autoPlay={true}
            />
          </Col>
        </center>
        <center>
          <Button
            className="btn mt-5"
            color="success"
            to="Gallery"
            tag={Link}
          >
            View more
          </Button>
        </center>
      </Container>

    </motion.div>
  )
}

export default GallerySection;
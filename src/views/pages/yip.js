import React from 'react';
import classes from "assets/css/yip.module.css";
import classnames from "classnames";
import Footer from "components/Footer/Footer.js";
import PageNavbar from "components/Navbars/PageNavbar.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCarousel,
  Button
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/DSC_0180.JPG"),
    altText: "Slide 1"
  },
  {
    src: require("assets/img/DSC_0269.JPG"),
    altText: "Slide 2"
  },
  {
    src: require("assets/img/DSC_0170.JPG"),
    altText: "Slide 3"
  }
];

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      if (obj)
        obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
}


function AboutUs() {

  counter('2019-first', 800, 1200, 1500);
  counter('2019-second', 1600, 2400, 1500);
  counter('2019-third', 1, 32, 1500);
  counter('2018-first', 700, 1000, 1500);
  counter('2018-second', 700, 1000, 1500);
  counter('2018-third', 1, 24, 1500);
  counter('2017-first', 100, 200, 1500);
  counter('2017-second', 200, 400, 1500);
  counter('2017-third', 1, 6, 1500);

  const [iconTabs, setIconsTabs] = React.useState(1);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <>
      <PageNavbar></PageNavbar>
      <div
        className="section section-download "
        data-background-color="black"
        id="download-section"
      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>

          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h1 className="title">
                Young Innovators' Program
              </h1>
              <h4 className="description">
                <p>
                  Young Innovator's Program is a platform to foster young minds with scientific enthusiasm and a credo to solve the problems facing the globe. IIT Kharagpur has launched this program with a motive of recognizing students with creative ability to conduct scientific research. In a two day visit to IIT Kharagpur, the students will get a chance to explore the scientific environment within and an opportunity to present their projects in front of distinguished researches and guests.
                </p>
                <p>
                  ELIGIBILITY CRITERIA: The competition aims to recognize the creative ability of school students studying in classes VIII-X only.
                </p>
                <Button color="success" href="https://www.yip.iitkgp.ac.in" className='mt-4' target='_blank'>
                View YIP's website
              </Button>
              </h4>
              
              <Card>
                <h3 className="title">
                  Young Innovators' Program Stats
                </h3>
                <CardHeader className='d-flex justify-content-center align-items-center'>
                  <Nav className="nav-tabs-success" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 1
                        })}
                        onClick={(e) => setIconsTabs(1)}
                        href="#"
                      >
                        <i className="tim-icons icon-spaceship text-success pr-1" />
                        <span className='text-success' style={{ fontSize: "1rem" }}>YIP 2019</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 2
                        })}
                        onClick={(e) => setIconsTabs(2)}
                        href="#"
                      >
                        <i className="tim-icons icon-shape-star text-success pr-1" />
                        <span className='text-success' style={{ fontSize: "1rem" }}>YIP 2018</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 3
                        })}
                        onClick={(e) => setIconsTabs(3)}
                        href="#"
                      >
                        <i className="tim-icons icon-bulb-63 text-success pr-1" />
                        <span className='text-success' style={{ fontSize: "1rem" }}>YIP 2017</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                    <TabPane tabId="link1">
                      <div className="d-flex justify-content-center align-items-center mx-4">
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center'><span id='2019-first'>1200</span>+</h1>
                          <div style={{ fontSize: "1.2rem" }}>Schools participated</div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center'><span id='2019-second'>2400</span>+</h1>
                          <div style={{ fontSize: "1.2rem" }}>Students participated</div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center' id='2019-third'>32</h1>
                          <div style={{ fontSize: "1.2rem" }}>Teams came to the IIT campus</div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="link2">
                      <div className="d-flex justify-content-center align-items-center mx-4">
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center'><span id='2018-first'>1000</span>+</h1>
                          <div style={{ fontSize: "1.2rem" }}>Schools participated</div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center'><span id='2018-second'>1000</span>+</h1>
                          <div style={{ fontSize: "1.2rem" }}>Students participated</div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center' id='2018-third'>24</h1>
                          <div style={{ fontSize: "1.2rem" }}>Teams came to the IIT campus</div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="link3">
                      <div className="d-flex justify-content-center align-items-center mx-4">
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center'><span id='2017-first'>200</span>+</h1>
                          <div style={{ fontSize: "1.2rem" }}>Schools participated</div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center'><span id='2017-second'>400</span>+</h1>
                          <div style={{ fontSize: "1.2rem" }}>Students participated</div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
                          <h1 className='h1-seo text-center' id='2017-third'>6</h1>
                          <div style={{ fontSize: "1.2rem" }}>Teams came to the IIT campus</div>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>

            </Col>

            {/* gallery */}

            <Col lg="8" style={{ marginTop: "3rem" }}>
              <h1 className='text-center'>
                Gallery
              </h1>


              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={true}
              />




            </Col>
          </Row>

          <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            {/* <Row className="justify-content-md-center"> */}
            <Col className="text-center" lg="12" md="12">
              <Card className={classes.test}>
                {/* <img alt="..." className="path" src={require("assets/img/path3.png")} /> */}
                <h1 className="title text-center mt-0 fs-1">TESTIMONIALS</h1>
                <div style={{ margin: "0rem 10%" }}>
                  <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                    showIndicators={false}
                  >
                    <div>
                      
                      <div className="myCarousel">
                        <h3>Keystone School, Hyderabad</h3>
                        <h4 className="text-secondary text-success">Vijaylakshmi Sivalenka, Principal (YIP 2019)</h4>
                        <p>
                          We are a project based school and work on real time problems which the children see at home or school or the neighbourhood and try to devise sustainable solutions. For us, we need platforms like this where kids can showcase their work. I like the way the students of IIT Kharagpur have taken up the responsibility for organizing and conducting this program.
                        </p>
                      </div>
                    </div>

                    <div>
                      
                      <div className="myCarousel">
                        <h3>The Crossword School, Guntur</h3>
                        <h4 className="text-secondary text-success">Kesava Reddy MC, Teacher (YIP 2018)</h4>
                        <p>
                          We feel the YIP is a great level field for students from all corners of the country. We took back with us the ideas brought in by the other teams, inputs provided by the IIT professors and the excellent attitude exhibited by the undergraduate students. In other words, our students and I returned with our perspective ‘reoriented’.
                        </p>
                      </div>
                    </div>
                    <div>
                      
                      <div className="myCarousel">
                        <h3>Kaanger Valley Academy, Raipur</h3>
                        <h4 className="text-secondary text-success">Neelam Dwivedi, Teacher (YIP 2018)</h4>
                        <p>
                        I accompanied Manveer Singh and Parineeti Bhura of our school to YIP. The team was awarded the first prize for their project on the anti-pollution mask that is herbal, homemade and reusable. IIT Kharagpur always motivates students to do something good and new for the welfare of the society and our environment. The hospitality and arrangement for the participants were perfect. The event was all about teamwork. We are really thankful to the organizers for changing the way of thinking and developing a scientific attitude in our students. Thank you for becoming our inspiration!
                        </p>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </Card>
            </Col>
            {/* </Row> */}
          </motion.div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
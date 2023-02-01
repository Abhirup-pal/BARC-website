import React from 'react'

import classnames from "classnames";

import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCarousel
} from "reactstrap";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
}

function AboutUs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  counter('2019-first', 800, 1200, 1500);
  counter('2019-second', 1600, 2400, 1500);
  counter('2019-third', 1, 32, 1500);
  counter('2018-first', 700, 1000, 1500);
  counter('2018-second', 700, 1000, 1500);
  counter('2018-third', 1, 24, 1500);
  counter('2017-first', 100, 200, 1500);
  counter('2017-second', 200, 400, 1500);
  counter('2017-third', 1, 6, 1500);
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
    >
      <div
        className="section section-download "
        data-background-color="black"
        id="about-section"

      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h1 className="title">
                ABOUT US
              </h1>
              <h4 className="description">
                Branding and Relations cell is a student body under the aegis of the Office of Alumni Affairs and International Relations. It aims towards positioning IIT Kharagpur as a global leader in the field of science and technology.
              </h4>

              <h3 className="title">
                Young Innovators' Program Stats
              </h3>
              <Card>
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

          </Row>

        </Container>
      </div>
    </motion.div>


  )
}

export default AboutUs
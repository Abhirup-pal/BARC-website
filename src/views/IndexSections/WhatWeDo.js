import React from 'react';
import { Card, Container, Button } from "reactstrap";
import { Link } from 'react-router-dom';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "assets/css/wwd.css";



const boxVariant = {
    visible: { opacity: 1, width: "100%", transition: { duration: 0.5 } },
    hidden: { opacity: 0, width: 0 }
  };
  

function WhatWeDo() {
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
            <Container id='whatWeDo' className='section'>
                <h1 className='text-center title'>WHAT WE DO</h1>
                <div className="card-group d-flex flex-wrap justify-content-center align-items-center ">
                    <Card className="card d-flex justify-content-center align-items-center flex-column m-3 p-5 card_">
                        <h3>
                            Young Innovators Program
                        </h3>
                        <p>
                        Young Innovator's Program is a platform to foster young minds with scientific enthusiasm and a credo to solve the problems facing the globe. In a two day visit to IIT Kharagpur, the students will get a chance to explore the scientific environment within and an opportunity to present their projects in front of distinguished researches and guests.


                        </p>
                        <Button className="btn cardbtn_ mt-3" color="success" type="button" tag={Link} to="/yip" target="_blank">View More</Button>
                    </Card>
                    <Card className="card d-flex justify-content-center align-items-center flex-column m-3 p-5 card_">
                        <h3>
                            UG Achievers Directory
                        </h3>
                        <p>
                        The Branding and Relations Cell's UG Achievers Directory (UGAD) initiative aims to highlight IIT Kharagpur students who have accomplished notable achievements during a particular academic year. The official IIT Kharagpur website features UGAD.
                        </p>
                        <Button className="btn cardbtn_ mt-3" color="success" type="button" tag={Link} to="/ugad" target="_blank">View More</Button>
                    </Card>
                    <Card className="card d-flex justify-content-center align-items-center flex-column m-3 p-5 card_">
                        <h3>
                            Spotlight
                        </h3>
                        <p>
                            The Branding and Relations Cell has launched a ‘Spotlight’ initiative for IIT Kharagpur students, allowing students to highlight their accomplishments and awards. In the Spotlight series, the achievements of students in the fields of sports, academics, technology, sociocultural activities, and work in the field of public welfare are highlighted.
                        </p>
                        <Button className="btn cardbtn_ mt-3" color="success" type="button" tag={Link} to="/spotlight" target="_blank">View More</Button>

                    </Card>

                </div>
            </Container>
        </motion.div>
    )
}

export default WhatWeDo
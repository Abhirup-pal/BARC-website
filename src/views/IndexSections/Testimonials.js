import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};


function Testimonials() {
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
      <div id="testimonials-section">
        <h1 className="text-success mb-3" style={{ fontSize: "1.4rem" }}>WHAT PEOPLE HAVE TO SAY</h1>
        <h1 style={{ fontSize: "2.3rem" }}>TESTIMONIALS</h1>
        <div style={{ margin: "0rem 10%" }}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3100}
            showIndicators={false}
          >
            <div>
              <img
                src={require("assets/img/vkTiwari.jpg")}
                alt="avatar"
                className="rounded-circle shadow-1-strong mb-4"
                style={{ width: "150px" }}
              />
              <div className="myCarousel">
                <h3>Virendra Kumar Tiwari</h3>
                <h4 className="text-secondary text-success">Director, IIT Kharagpur</h4>
                <p>
                  We have to look beyond the
                  classroom, and try to use the knowledge gained in the class to make a difference
                  to our own lives. I am very happy to note that the Young Innovators Program of IIT
                  Kharagpur is encouraging this habit of critical thinking among school children.
                  Imagination comes naturally to children, whose minds are often unfettered by the
                  realities that adults have to deal with. YIP helps them to use their power of imagination
                  to make changes in their own lives and those of others around them. Children are
                  thus encouraged to think about the larger society and be more engaged creatures.
                </p>
              </div>
            </div>

            <div>
              <img
                src={require("assets/img/BBhattacharya.jpeg")}
                alt="avatar"
                className="rounded-circle shadow-1-strong mb-4"
                style={{ width: "150px" }}
              />
              <div className="myCarousel">
                <h3>Baidurya Bhattacharya</h3>
                <h4 className="text-secondary text-success">Associate Dean, Alumni Affairs and Branding, IIT Kharagpur</h4>
                <p>
                  I felt really happy and delighted to see the first ever Young Innovators' Program coming into reality in our campus. Last year around November, when the Branding and Relations Cell pitched this idea to me, it seemed very novel that we will invite school children from all over the country and that we will inculcate in them the credo, the habit of innovation, to bring them to our campus and show them what we do and maybe encourage in them a desire to pursue a career in scientific research and engineering. We launched this in April, we wrote to about 100-400 schools from around the country and we had about 200+ applications and after 2 rounds of eliminations 24 schools were selected for the finals which were held in the IIT Kharagpur campus. The word innovate basically means to alter something or to change something or to create.
                </p>
              </div>
            </div>

          </Carousel>
        </div>
      </div>
    </motion.div>
  )
}

export default Testimonials
import React from "react";

import {
  Container,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems17 = [
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
  },
  {
    src: require("assets/img/DSC_0285.JPG"),
    altText: "Slide 3"
  },
  {
    src: require("assets/img/DSC_0248.JPG"),
    altText: "Slide 3"
  }
];

const carouselItems18 = [
  {
    src: require("assets/img/2018_A.jpg"),
    altText: "Slide 1"
  },
  {
    src: require("assets/img/2018_B.jpg"),
    altText: "Slide 2"
  },
  {
    src: require("assets/img/2018_C.jpg"),
    altText: "Slide 3"
  },
  {
    src: require("assets/img/2018_D.jpg"),
    altText: "Slide 4"
  },
  {
    src: require("assets/img/2018_E.jpg"),
    altText: "Slide 5"
  },
  {
    src: require("assets/img/2018_F.jpg"),
    altText: "Slide 6"
  }
];

const carouselItems19 = [
  {
    src: require("assets/img/2019_A.jpg"),
    altText: "Slide 1"
  },
  {
    src: require("assets/img/2019_B.jpg"),
    altText: "Slide 2"
  },
  {
    src: require("assets/img/2019_C.jpg"),
    altText: "Slide 3"
  },
  {
    src: require("assets/img/2019_D.jpg"),
    altText: "Slide 4"
  },
  {
    src: require("assets/img/2019_E.jpg"),
    altText: "Slide 5"
  },
  {
    src: require("assets/img/2019_F.jpg"),
    altText: "Slide 6"
  }
];

export default function ProfilePage() {
  <PageNavbar />
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <div className="wrapper">
      <PageNavbar />

      <div className="page-header">
        <img
          alt="..."
          className="dots"
          src={require("assets/img/dots.png")}
        />
        <img
          alt="..."
          className="path"
          src={require("assets/img/path4.png")}
        />

        <Container className="align-items-center">
          <Row>
            <Col lg="6" md="6">
              <h1 className="profile-title text-left">Glimpses</h1>
              <h5 className="text-on-back">2019</h5>
              <p className="profile-description">
                The third edition of YIP was a huge success, reaching out to 1200+ schools and participating  2400+ students from all over India. Teams from Singapore, UAE, Indonesia, Malaysia, and Saudi Arabia took part, and some of them successfully made it to the semi-finals. ICICI Bank and Indigene were the corporate sponsors for the YIP 2019.
              </p>

            </Col>
            <Col md="6">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems19} indicators={false} autoPlay={true} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Row className="justify-content-between">
            <Col md="6">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems18} indicators={false} autoPlay={true} />
              </Row>
            </Col>
            <Col md="5">
              <h1 className="profile-title text-left">Glimpses</h1>
              <h5 className="text-on-back">2018</h5>
              <p className="profile-description text-left">
                In this 2nd edition of YIP, participation increased from the previous edition of YIP. YIP 2018 was conducted in four rounds. The first two rounds were online. The top 24 teams were invited to IIT Kharagpur for the semifinal round and were made to demonstrate their models in front of the professors of IIT Kharagpur. Two teams from Singapore participated in the event and successfully made it to the semi-finals, giving YIP worldwide recognition.

              </p>

            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">

        <Container className="align-items-center">
          <Row>
            <Col lg="6" md="6">
              <h1 className="profile-title text-left">Glimpses</h1>
              <h5 className="text-on-back">2017</h5>
              <p className="profile-description">
                More than 1000 schools worldwide participated in this first edition of YIP. There were four rounds in this edition. Three of the six teams who advanced to the finals were chosen as the winners. The teams also went on a campus tour, visited a lab for product analysis and modeling, and participated in a robotics workshop.
              </p>

            </Col>
            <Col md="6">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems17} indicators={false} autoPlay={true} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer backToTop={false} />
    </div>
  );
}

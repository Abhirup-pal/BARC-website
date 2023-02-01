import React from "react";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, width: "100%", transition: { duration: 0.5 } },
  hidden: { opacity: 0, width: 0 }
};


export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [textareaFocus, setTextareaFocus] = React.useState(false);
  const [subjectFocus, setSubjectFocus] = React.useState(false);
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
      <div className="section section-signup" id="contact-section">
        <Container>
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-success" >
                Where to find us{" "}
              </h3>
              <div className="text-white mb-3">
                <div className="my-1">Branding and Relations Cell</div>
                <div className="my-1">Office of Alumni Affairs & Branding</div>
                <div className="my-1">Indian Institute of Technology, Kharagpur Pin-721302</div>
                <div className="my-1">West Bengal, India</div>

                <h5 className="display-4 text-success my-4">
                  Email Us At{" "}
                </h5>
                Email : <a className="text-white" href="mailto: barc@iitkgp.ac.in">barc@iitkgp.ac.in</a>
                <h5 className="display-4 text-success  my-4">
                  Call Us {" "}
                </h5>
                <div className="text-success">Devansh Srivastava</div>
                <div className="my-1"><a className="my-1 text-white" href="tel:9450124028">+91-9450124028</a></div>
                <div className="my-1"><a className="my-1 text-white" href="mailto: devanshrishi26@gmail.com">devanshrishi26@gmail.com</a></div>
                <div className="mt-3 mb-1 text-success">Abhinil Kumar</div>
                <div className="mb-1"><a className="text-white" href="tel:8210169485">+91-8210169485</a></div>
                <div className="my-1"><a className="my-1 text-white" href="mailto: abhinilkumar@gmail.com">abhinilkumar@gmail.com</a></div>
              </div>


              {/* <div className="btn-wrapper">
              <Button color="success" to="register-page" tag={Link}>
                Register Page
              </Button>
            </div> */}
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/00f2c3.jpg")}
                  />
                  <CardTitle tag="h4">Contact</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
                    <InputGroup
                      className={classnames({
                        "input-group-focus": fullNameFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                          </svg>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Full Name"
                        type="text"
                        onFocus={(e) => setFullNameFocus(true)}
                        onBlur={(e) => setFullNameFocus(false)}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": emailFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onFocus={(e) => setEmailFocus(true)}
                        onBlur={(e) => setEmailFocus(false)}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": subjectFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                          </svg>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Subject"
                        type="text"
                        onFocus={(e) => setSubjectFocus(true)}
                        onBlur={(e) => setSubjectFocus(false)}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": textareaFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                          </svg>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Your message"
                        type="textarea"
                        onFocus={(e) => setTextareaFocus(true)}
                        onBlur={(e) => setTextareaFocus(false)}

                      />
                    </InputGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-round" color="success" size="lg">
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-success font-weight-light mb-2">
              Thank you for visiting us!
            </h3>
            <h4 className="mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="twitter"
              id="twitter"
              target="_blank" href="https://www.linkedin.com/company/brandingandrelationscell/mycompany/"
              size="lg"
            >
              <i className="fab fa-linkedin" />
            </Button>
            <UncontrolledTooltip delay={0} target="twitter">
              Connect!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="facebook"
              target="_blank" href="https://www.facebook.com/barciitkgp/"
              id="facebook"
              size="lg"
            >
              <i className="fab fa-facebook-square" />
            </Button>
            <UncontrolledTooltip delay={0} target="facebook">
              Share!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="primary"
              target="_blank" href="https://www.instagram.com/barc_iitkgp/"
              id="tooltip877922017"
              size="lg"
            >
              <i className="fab fa-instagram" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              Follow!
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

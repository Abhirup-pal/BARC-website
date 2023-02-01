import React from "react";
import classes from "assets/css/IndexNavbar_module.css"
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function IndexNavbar() {
  const op = 1;
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [opacity, setOpacity] = React.useState(1);
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-success");
      setOpacity(op);
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
      setOpacity(1);
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const hoverHandler = () => {
    setOpacity(1);
  };
  const blurrHandler = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    )
      setOpacity(op);
  }
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg" style={{ opacity: opacity }} onMouseEnter={hoverHandler} onMouseLeave={blurrHandler}>
      <Container>
        <div className="navbar-translate">
          <span>
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("assets/img/barc_logo.jpg")}
              style={{ width: "40px", margin: "0.4rem" }}
            />
          </span>
          <NavbarBrand id="navbar-brand" href='/'>
            <span style={{ margin: "0.3rem", textTransform: "none" }} href='/'>Branding and Relations Cell </span>
            IIT Kharagpur
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a className="text-success" href='/BARC'>
                  Branding and Relations Cell
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <NavLink
                className="nav-link d-none d-lg-block"
                href='/'
                style={{ fontSize: "1rem" }}
              >
                Home
              </NavLink>
              <a className="d-lg-none d-xl-none menu-link-hover" href='/' style={{ fontSize: "1rem" }}>Home</a>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

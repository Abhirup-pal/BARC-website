import React from "react";
import img from "assets/img/imageedit_2_8135454532.png";
import {
  Button

} from "reactstrap";

import { Container } from "reactstrap";
import { Link } from 'react-router-dom'

export default function PageHeader() {
  return (
    <div className="page-header header-filter" style={{ backgroundImage: `url('${img}')`, backgroundSize: "cover" }} id="home-section">
      <Container>
        <div className="content-center brand">
          <h3 className="d-sm-block" style={{ textTransform: "none", fontSize: "3.7rem", fontWeight: "800", fontFamily: "inherit" }} > Branding and Relations Cell</h3>
          <h3 className="d-sm-block" style={{ fontSize: "2.6rem", fontFamily: "inherit", fontWeight: "800" }}>
            IIT KHARAGPUR
          </h3>

          <Button className="btn-round" size="lg" color="success" type="button" data-placement="bottom"
            rel="noopener noreferrer" target='_blank' style={{ fontSize: "1rem" }} tag={Link} to="yip">
            Young Innovator's Program
          </Button>
        </div>
      </Container>
    </div>
  );
}

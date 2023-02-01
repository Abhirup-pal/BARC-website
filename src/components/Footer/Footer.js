
import React from "react";
import {
  Container,
} from "reactstrap";

export default function Footer(props) {
  return (
    <footer className="footer" style={{ borderTop: "1px #00f2c3 solid" }}>
      <Container>
        <p className="text-center">
          © 2023 | BRANDING AND RELATIONS CELL, IIT KHARAGPUR
        </p>
      </Container>
    </footer>
  );
}

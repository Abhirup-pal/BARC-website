import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/FooterHome.js";
import Testimonials from "views/IndexSections/Testimonials.js";
import Signup from "views/IndexSections/Signup.js";
import AboutUs from "./IndexSections/AboutUs";
import GallerySection from "./IndexSections/GallerySection";
import WhatWeDo from "./IndexSections/WhatWeDo";


export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  
  
  return (
    <>
      <IndexNavbar/>
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <AboutUs/>
          <GallerySection/>
          <WhatWeDo />
          <Testimonials />
          <Signup />
        </div>
        <Footer />
      </div>
    </>
  );
}

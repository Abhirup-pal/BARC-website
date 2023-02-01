import React from 'react'

import classnames from "classnames";
import SquareBG from "react-animated-squares"

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
} from "reactstrap";
import PageNavbar from 'components/Navbars/PageNavbar';
import Footer from 'components/Footer/Footer';


function AboutUs() {
    const [iconTabs, setIconsTabs] = React.useState(1);

    return (
        <>
        <div
            className='section'
            data-background-color="black"
        >
            <SquareBG count={10} speed={0.7} backgroundColor="rgb(10 14 64)"/>

            <PageNavbar/>
            <Container>
                
                <Row className="justify-content-md-center">
                    <Col className="text-center" lg="8" md="12">
                        <h1 className="title">
                            UG ACHIEVERS' DIRECTORY
                        </h1>
                        <h4 className="description">
                            <p>
                                The Branding and Relations Cell's UG Achievers Directory (UGAD) initiative aims to highlight IIT Kharagpur students who have accomplished notable achievements during a particular academic year. The official IIT Kharagpur website features UGAD.
                            </p>
                            <p className='mt-3'>
                                There are two categories for accomplishments: individual and group. This accomplishment includes writing for a journal, publishing a book or research paper, filing a patent, holding department and institution ranks, receiving recommendations and internship awards, and participating in sports, technology, and social-cultural activities. 2 editions of UGAD have been published till now.
                            </p>
                        </h4>
                        <Card className='mt-5'>
                            <CardHeader className='d-flex justify-content-center align-items-center'>
                                <Nav className="nav-tabs-success d-flex justify-content-center align-items-center " role="tablist" tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: iconTabs === 1
                                            })}
                                            onClick={(e) => setIconsTabs(1)}
                                            href="#"
                                        >
                                            <span className='text-success'>2019-2020 Edition</span>
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
                                            <span className='text-success'>2018-2019 Edition</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                                    <TabPane tabId="link1">
                                            <iframe src="http://www.iitkgp.ac.in/files/ugad_1819.pdf"  width="100%" height="500px"></iframe>
                                    </TabPane>
                                    <TabPane tabId="link2">
                                            <iframe src="http://www.iitkgp.ac.in/files/ugad_1920.pdf" width="100%" height="500px"></iframe>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </div >
            <Footer/>
            </>

    )
}

export default AboutUs
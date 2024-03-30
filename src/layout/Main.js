import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Leftsidenav from '../pages/shared/leftsidenav/Leftsidenav';
import { Outlet } from 'react-router-dom';
import Rightsidenav from '../pages/shared/rightsidenav/Rightsidenav';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                    <Leftsidenav></Leftsidenav>
                    </Col>
                    <Col lg="7">
                    <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <Rightsidenav></Rightsidenav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
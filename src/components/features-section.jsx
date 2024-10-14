import React from 'react';

import {Container, Row, Col} from "react-bootstrap";

import {AiOutlineSafety} from "react-icons/ai";
import {HiOutlineStatusOnline} from "react-icons/hi";
import {BiSolidOffer} from "react-icons/bi";


const FeaturesSection = () => {
    return (
    <div id="features-section">
        <Container className="py-5">
            <Row>
                <Col>
                  <h1 className="quinary-color fs-1 p-0 mb-4">WHY CHOOSE US</h1>
                </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <AiOutlineSafety size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Safety &amp; Security</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Our car rental application prioritizes safety and security, offering 24/7 customer support, secure payment options, and vehicles equipped with advanced safety features for a worry-free rental experience. </p>
              </Col>
              <Col xs={4}>
                <HiOutlineStatusOnline size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Online Booking</h4>
                <p className="quinary-color fs-6 m-0 pb-2">With our easy-to-use online booking system, users can quickly reserve their preferred vehicle, customize rental options, and confirm reservations instantly from anywhere, anytime. </p>
              </Col>
              <Col xs={4}>
                <BiSolidOffer size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Best Offers</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Take advantage of our exclusive deals and special discounts, ensuring you get the best rental rates and value for your money, no matter the destination or duration. </p>
              </Col>
            </Row>
        </Container>
    </div> 
    );
};
export default FeaturesSection;

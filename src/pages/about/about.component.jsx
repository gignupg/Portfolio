import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/granada-selfie.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row
                className=" align-items-start p-4 my-details rounded"
                style={{ lineHeight: "32px" }}
              >
                I’m a self-taught Web Developer and language coach. Two years
                ago I got into programming because I wanted to automate parts of
                my language classes. So I started to learn the basics of
                AutoHotkey, an automation scripting language for Windows.
                <br />
                Since then, I’ve started to learn more about software
                development while continuing to teach languages, mainly English
                and German.
                <br />I learned the basics of HTML, CSS and Javascript, built my
                own Telegram chatbot using Google Apps Script, and created a
                declinator app to determine the correct German cases/endings.
                <br />
                By taking a Spanish Udemy Course I learned the MERN stack and
                went on to build two Chrome Extension and one NPM package, which
                have been my biggest projects so far.
                <br />
                Feel free to take a closer look at any of these projects on
                GitHub!
                <Col
                  className="d-flex justify-content-center flex-wrap"
                  style={{ marginTop: "14px" }}
                >
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/gignupg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/11xbz23JCBKFj75IyfbZTtZDH3Pbc3d_y/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ITALKI from "../../assets/img/experience/italki.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <a
                  href="https://teach.italki.com/teacher/3637579"
                  target="blank"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_ITALKI}
                    alt="Accenture logo"
                  />
                </a>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    English/German Teacher
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Professional Coach
                    </strong>
                    <br />
                    <strong>Languages:</strong> English, German, Spanish, French
                    <br />
                    <strong>Duration:</strong> April 2018 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>1698</strong> lessons taught to over{" "}
                        <strong>150</strong> students.
                      </li>
                      <li>
                        Developed{" "}
                        <strong>automatically created vocabulary lists</strong>{" "}
                        for my students using{" "}
                        <strong>Google Apps Script</strong>.
                      </li>
                      <li>
                        Taught <strong>four</strong> different languages.
                        Communicated in <strong>six</strong>.
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;

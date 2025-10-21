import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself!
            </h1>
            <p className="home-about-body">
              I am a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I have explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  Golang, Javascript, TypeScript C++, Python, Node.js, and Java{" "}
                </b>
              </i>
              — and I enjoy working across both the backend and frontend of applications.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  cloud native applications, microservices, and API design,{" "}
                </b>
              </i>
              and exploring new ways to automate tasks and improve efficiency.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Golang </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

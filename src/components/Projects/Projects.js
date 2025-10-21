import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shinkro from "../../Assets/Projects/shinkro.png";
import eduQuery from "../../Assets/Projects/eduQuery.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
     <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Inspired by my passion for learning, I have built a few projects that I am proud of!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shinkro}
              isBlog={false}
              title="shinkro"
              description="Automation tool bridging Plex and MyAnimeList for seamless media library synchronization. Built with Go and React, featuring 45,000+ downloads and an active community. Continuously updated based on user feedback."
              ghLink="https://github.com/varoOP/shinkro"
              docsLink="https://docs.shinkro.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduQuery}
              isBlog={false}
              title="EduQuery"
              description="AI-powered document Q&A system using RoBERTa-large-SQuAD2 and Sentence Transformers, achieving 85%+ accuracy in semantic search and answer extraction. Built with Python/FastAPI backend and React.js frontend using TanStack React Query."
              ghLink="https://github.com/varoOP/eduquery"
              demoLink="https://drive.google.com/file/d/1hZQpKh4UeV96HdlbMq4e7GuWg9ibwaoF/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            I am currently working as a{" "}
            <span className="purple">Graduate Research Assistant</span> at{" "}
            <span className="purple">San Jose State University</span>, and I recently graduated with a Master's degree in{" "}
            <span className="purple">Software Engineering</span> from{" "}
            <span className="purple">San Jose State University</span>.
            <br />
            <br />
            Previously, I have worked as a Software Engineer in the following startups based out of Singapore:
          </p>

          <ul>
            <li className="about-activity">
              <strong>-</strong> Ultra Servers Pte. Ltd. (2022 - 2023)
            </li>
            <li className="about-activity">
              <strong>-</strong> SlashN Services Pte. Ltd. (2021 - 2022)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

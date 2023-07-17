import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherapp from "../../Assets/Projects/Weather_app.PNG";
import gitpedia from "../../Assets/Projects/gitpedia.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitpedia}
              isBlog={false}
              title="GitPedia"
              description="Developed a web app that allows the visitor to search GitHub users and display some useful info (like amount of repos, list of followers, most forked repo and etc..) about the user using Github API. Uses React Router DOM, React Hooks, Fusion charts and Auth0 for our authentication."
              ghLink="https://github.com/shubhamkv/github-users"
              demoLink="https://git-pedia.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Portfolio description"
              ghLink="https://github.com/shubhamkv"
              demoLink="https://git-pedia.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Appy Weather"
              description="Collected the API response from OpenWeather to show temperature(°C), humidity, wind-speed and name of different locations across the world. Weather icon or background image will change depending on weather conditions. Techstack consisted of HTML, CSS and vanilla JavaScript."
              ghLink="https://github.com/shubhamkv/weather-cast"
              demoLink="https://appy-weather.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Realtime Chatbot"
              description="Developed Realtime Chatbot that performs client queries and integrated Socket-io in chat server. Performed authentication for admin using passport.js, express-session and bcrypt enabling the authoritative privileges to perform CRUD operations on selective segments. It was a freelancing project and I procured positive feedback from Client and also received 5 stars contingent to on-time delivery of the product."
              ghLink="https://github.com/shivam-bhadani/Chatbot"
              demoLink="https://shivamchatbotwebsite.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="Developed a Tic Tac Toe Game while I was Learning HTML, CSS, JavaScript."
              ghLink="https://github.com/shivam-bhadani/Tic-Tac-Toed"
              demoLink="https://shivam-bhadani.github.io/Tic-Tac-Toe/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

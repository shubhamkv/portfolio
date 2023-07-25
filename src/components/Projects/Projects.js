import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherapp from "../../Assets/Projects/Weather_app.PNG";
import gitpedia from "../../Assets/Projects/gitpedia.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import comfy from "../../Assets/Projects/comfy.png";

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
              imgPath={comfy}
              isBlog={false}
              title="Comfy Sloth"
              description="Developed a fully responsive furniture e-commerce web app with ReactJS that communicates with external API. Uses Auth0 for authentication purpose. React-Router for navigation across diferent sections and React Hooks for state management. Integrated the Payment Gateway using Stripe."
              ghLink="https://github.com/shubhamkv/react-furniture-app"
              demoLink="https://comfort-furnish.netlify.app"
            />
          </Col>

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
              description="Developed a fully responsive portfolio website with ReactJS. Having the feature of navigation across four different sections - Home, About, Projects and Contact. Uses the React Router DOM for better functionality. In the project section, all the projects are listed with Live link and source code link on github."
              ghLink="https://github.com/shubhamkv/portfolio"
              demoLink="https://shubh-kumar.netlify.app/"
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
              imgPath={}
              isBlog={false}
              title=""
              description="."
              ghLink=""
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a 4th year undergraduate at BIT Mesra major in Computer
              Science.
              <br />
              {/* <br />I am doing <b className="purple">SDE Internship</b> at{" "}
              <b className="purple">Trilogy Innovations (CodeNation)</b>.
              <br /> */}
              <br />I love{" "}
              <a
                className="purple"
                style={{ textDecoration: "none" }}
                href="https://www.stopstalk.com/user/profile/shubh_08"
                target={"_blank"}
              >
                problem solving
              </a>{" "}
              and doing competitive programming.
              <br />
              <br />
              My keen Interest's are developing new &nbsp;
              <i>
                <b className="purple">Front-end Web Apps </b>
              </i>
              .
              <br />
              <br />I am a <b className="purple">self-taught developer</b> and
              always eager to learn and explore things related to{" "}
              <i>
                <b className="purple">Technology and Softwares</b>
              </i>
              .
              <br />
              {/* <br />I also have knowledge of{" "}
              <i>
                <b className="purple">Web3, Cryptography and Blockchain</b>
              </i>
              .
              <br /> */}
              <br />
              Currently I'm learning{" "}
              <i>
                <b className="purple">Full Stack Development</b>
              </i>{" "}
              to develop fully-fledged and functioning applications with
              databases or servers.
              <br />
              <br />
              My hobbies are playing badminton, reading books and{" "}
              <a
                className="purple"
                style={{ textDecoration: "none" }}
                href="https://www.cricketworldcup.com/"
                target={"_blank"}
              >
                watching cricket
              </a>
              .
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shubhamkv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubham-kumar-08/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ImShubh_08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shubh.kumar_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Shubham Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />I am a 4th year undergraduate at BIT Mesra major in Computer
            Science.
            <br />
            <br />
            Some of the highlights of my programming journey are:
          </p>
          <br />
          <ul>
            <li className="about-activity">
              <FaStar /> Started my coding journey with C language
            </li>
            <br />
            <li className="about-activity">
              <FaStar /> Learned <b className="purple">Java</b> and switched to
              C++ for learning and implementing Data Structure and Algorithm
            </li>
            <br />
            <li className="about-activity">
              <FaStar /> Deep Dive into DSA and solved approx. 650+ problems on{" "}
              <a
                className="purple"
                style={{ textDecoration: "none" }}
                href="https://codeforces.com/profile/shubh_08"
                target={"_blank"}
              >
                Codeforces
              </a>
              ,{" "}
              <a
                className="purple"
                style={{ textDecoration: "none" }}
                href="https://www.codechef.com/users/kumar_08"
                target={"_blank"}
              >
                CodeChef
              </a>
              ,{" "}
              <a
                className="purple"
                style={{ textDecoration: "none" }}
                href="https://leetcode.com/say_hii/"
                target={"_blank"}
              >
                leetcode
              </a>{" "}
              and
              <a
                className="purple"
                style={{ textDecoration: "none" }}
                href="https://auth.geeksforgeeks.org/user/shubh08mt4/practice"
                target={"_blank"}
              >
                {" "}
                geeksforgeeks
              </a>
            </li>
            <br />
            <li className="about-activity">
              <FaStar /> Along with DSA , started learning Web Development
            </li>
            <br />
            <li className="about-activity">
              <FaStar /> Learn <b className="purple">Front-end Dev</b> by
              building project
            </li>
            <br />
            {/* <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 2029 (5 Star) on{" "}
              <a
                className="purple"
                style={{ textDecoration: "none" }}
                href="https://www.codechef.com/users/shivambhadani"
                target={"_blank"}
              >
                CodeChef
              </a>
            </li> */}
            <li className="about-activity">
              <FaStar /> Currently, horning my skills in{" "}
              <b className="purple">Back-end Dev</b> to build fully-fledged
              applications
            </li>
            {/* <li className="about-activity">
              <FaStar /> Global Rank 778 (India Rank 512) in Google Kickstart
              Round F 2022
            </li> */}
            {/* <li className="about-activity">
              <FaStar /> Guardian (Max Rating 2246) in{" "}
              <a
                className="purple"
                style={{ textDecoration: "none" }}
                href="https://leetcode.com/shivambhadani/"
                target={"_blank"}
              >
                leetcode
              </a>
            </li> */}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "./avatar.png";

class Main extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid style={{ background: "#222A68" }}>
          <Cell col={12}>
            <div className="avatar">
              <img src={avatar} alt="avatar" style={{ width: "12%" }} />
            </div>
            <div className="banner-text">
            <h1 style={{fontSize:'30px'}}> Katrina Rodkina <br  /> </h1>
              <h1>Full Stack Web Developer</h1>
 <hr  />  
 <div id='myDescription'>
 Fullstack Software developer with experience building both front-end and back-end of web apps using NERD (Node, Express, React, Database/SQL) Stack.
<br  />
A self-starter, fast learner, and enthusiastic individual who is eager to join a team of developers.
   </div>
              <p className="skills">
                <i className="fab  fa-3xfa-html5"></i>{" "}
                <i className="fab  fa-3x fa-css3-alt"></i>
                <i className="fab  fa-3x fa-js-square"></i>{" "}
                <i className="fab  fa-3x fa-react"></i>
                <i className="fab fa-3x fa-node"></i>
                <i className="fab  fa-3x fa-git-square"></i>
              </p>
              <div className="social-links">
                <div>
                  <a
                    href="https://www.linkedin.com/in/ekaterina-rodkina/"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-3x fa-linkedin"
                      id="lin"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/katrinrodkina" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-3x fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Main;

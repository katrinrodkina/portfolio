import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import avatar from "./avatar.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>KATRINA RODKINA</h3>
            <img src={avatar} alt="avatar" style={{ width: "30%" }} />
            <br />
            <div
              id="personalDesc"
              style={{ width: "75%", margin: "auto", paddingTop: "30px" }}
            >
              Fullstack Software developer with experience building both
              front-end and back-end of web apps.
              <br />
              I have experience using NERD (Node, Express, React, Database/SQL)
              Stack.
              <br />A self-starter, fast learner, and enthusiastic individual
              who is eager to join a team of developers.
            </div>
          </Cell>
          <Cell col={6}>
            <h3>Contact Me</h3>
            <hr  />
            <div className="contactList">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontFamily: "Saira Extra Condensed, sans-serif",
                      fontSize: "25px",
                      fontWeight: "bold "
                    }}
                  >
                    <i class="fas fa-phone"></i>
                    732-861-7570
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontFamily: "Saira Extra Condensed, sans-serif",
                      fontSize: "25px",
                      fontWeight: "bold "
                    }}
                  >
                  <i class="fas fa-at"></i>
                  katrinrodkina@gmail.com
                  </ListItemContent>
                </ListItem>
        
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

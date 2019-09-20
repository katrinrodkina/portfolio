import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText
} from "react-mdl";

import timey from "./timey.png";
import mogsy from "./mogsy.png";
import foody from "./foody.png";
import trivia from "./trivia.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
          <CardTitle   className='projectPicBackground'
            style={{
              color: "#fff",
              height: "176px",
              background: `url(${timey})`,
              backgroundSize: "100%"
            }}
          >
            Timey
          </CardTitle>
          <CardText>
            ● Project management board with accountability.
            <br /> ● It allows users to create projects, add, remove edit and
            assign tickets to users. Users can track the time it takes to
            complete a ticket with a timer that is provided on each ticket.
            <br /> ● Tickets can be dragged between the columns.
            <br /> ● All time is accurently tracked and stored into a sortable
            and searchable timesheet that is downloadbale at any time.
            <br /> ● Project board gets updated in real time for every user on
            that project through the use of sockets.
            <br /> ● Users are provided with a bar chart that displays every
            project they are assigned to with all the time they have allocated
            to each project.
            <br /> ● Additionally, there is a pie chart to show every user that
            is assigned to a specific project, and how much time they have
            towards that project in comparrison to other users.
            <br /> <br />● Built with React-DnD, React/Redux, Node/Express,
            PostgreSQL, Sequelize, Socket.io, D3.js, Reactstrap, Moment.js,
            OAuth;
          </CardText>
          <CardActions border>
          <Button colored>
              <a
                style={{ textDecorationLine: "none" }}
                href="http://timetrackerboard.herokuapp.com/"
                target="_blank"  rel="noopener noreferrer"
              >
                Link to Site
              </a>
            </Button>
            <Button colored>
              <a
                style={{ textDecorationLine: "none" }}
                href="https://github.com/green-echo/timetracker"
                target="_blank"  rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
          <CardTitle   className='projectPicBackground'
            style={{
              color: "#fff",
              height: "176px",
              background: `url(${mogsy}) center / cover`,
              backgroundSize: "98%"
            }}
          >
            Mogsy
          </CardTitle>
          <CardText>
            ● E-​commerce web app. Can handle both logged in and guest users,
            manage their carts and allow to check out.
            <br /> ● Implemented RESTful API routes, cart functionality
            persist through sessions.
            <br /> <br />● ​Built with React/Redux, Node/Express, PostgreSQL,
            Sequelize
          </CardText>
          <CardActions border>
          <Button colored>
              <a
                style={{ textDecorationLine: "none" }}
                href='https://grace-shopper-red-dove.herokuapp.com/products'
                target="_blank"  rel="noopener noreferrer"
              >
                Link to Site
              </a>
            </Button>
            <Button colored>
              <a
                style={{ textDecorationLine: "none" }}
                href='https://github.com/red-dove/grace-shopper'
                target="_blank"  rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
          <CardTitle  className='projectPicBackground'
            style={{
              color: "#fff",
              height: "176px",
              background: `url(${foody}) center / cover`,
              backgroundSize: "98%"
            }}
          >
            Foody
          </CardTitle>
          <CardText>
            ● Add/remove recipes site implemented as a Progressive Web App.
            <br />●  Service Workers are handling static and dynamic caching.
            <br />● Utilized Firebase for back-end, which handles offline access
            to data and background sync.
          </CardText>
          <CardActions border>  
          <Button colored>
              <a
                style={{ textDecorationLine: "none" }}
                href='https://foody-cf99c.firebaseapp.com/'
                target="_blank"  rel="noopener noreferrer"
              >
                Link to Site
              </a>
            </Button>
            <Button colored>
              <a
                style={{ textDecorationLine: "none" }}
                href='https://github.com/katrinrodkina/pwa-foody'
                target="_blank"  rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
        <CardTitle className='projectPicBackground'
          style={{
            color: "#fff",
            height: "176px",
            background: `url(${trivia})  center / cover` ,
            backgroundSize: "98%"
          }}
        >
          Trivia
        </CardTitle>
        <CardText>
        ● Created Trivia Quiz site using ​http://jservice.io​ API. <br  />
        ● Implemented using React & Redux.
        </CardText>
        <CardActions border>
        <Button colored>
              <a
                style={{ textDecorationLine: "none" }}
                href='http://my-trivia-quiz.herokuapp.com/'
                target="_blank"  rel="noopener noreferrer"
              >
                Link to Site
              </a>
            </Button>
        </CardActions>
      </Card>
      );
    }
  };

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Timey</Tab>
          <Tab>Mogsy</Tab>
          <Tab>Foody</Tab>
          <Tab>Trivia Quiz</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;

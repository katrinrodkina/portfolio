import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'
import Main from './Main'


class Routes extends Component {


  render() {

    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/portfolio" component={Main} />
        <Route path="/aboutme" component={Main} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
       

       </Switch>
    )
  }
}


export default  Routes


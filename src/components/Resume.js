import React , {Component} from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import resume from './KatrinaRodkina-Resume.pdf'
class Resume extends Component {
    render () {
        return (
        
                <div className="resume-body">
        <Grid className="resume-grid">
          <Cell col={6}>
       <div> Download Resume </div> 
          <a href= {resume}   download><i class="far fa-file"></i>
          </a>
</Cell>
          </Grid>
            </div>
        )
    }
}

export default Resume
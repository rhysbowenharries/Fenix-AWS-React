import React, {Fragment} from 'react'
import './ProjectContainer.css'


const ProjectContainer = (props) => {
  
  return(
    <Fragment>
      <div className  = "project-container">
        <h4>{props.projectOptions}</h4>
      </div>
    </Fragment>
  )

}

export default ProjectContainer;

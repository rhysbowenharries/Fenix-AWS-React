import React, {Fragment} from "react"
import ProjectContainer from './ProjectContainer.js'


const ProjectContainerList = (props) => {

      
      let options = props.projectOptions.map((project, index) => {
      return <ProjectContainer projectOptions={project} key={index}/>
    })

    return (<Fragment>{options}</Fragment>)
  };


export default ProjectContainerList

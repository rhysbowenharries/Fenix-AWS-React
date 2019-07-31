import React, {Fragment} from "react"
import ProjectContainer from './ProjectContainer.js'


const ProjectContainerList = (props) => {


      let options = props.projectOptions.map((project, index) => {
          let aSingleClient = props.clients.map((client) => {
            console.log(client.surname);
            console.log(client.forename)
            console.log(client.projects);
            return client
          })
      return <ProjectContainer projectOptions={project} key={index}  singleClient = {aSingleClient} />
    })

    return (<Fragment>{options}</Fragment>)
  };


export default ProjectContainerList

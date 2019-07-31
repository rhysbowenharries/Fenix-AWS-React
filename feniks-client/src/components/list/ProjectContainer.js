import React, {Fragment} from 'react'
import './ProjectContainer.css'


const ProjectContainer = (props) => {

  console.log(props);

  const clients = props.singleClient.forEach((client) => {
    return (<li> {client.forename} + {client.surname} </li>)
  })

  // const clientForename = props.clientsWithProject.forename
  // const clientSurname = props.clientsWithProject.surname
  const clientProjects = props.projectOptions.projects

  return(
    <Fragment>
      <div className  = "project-container">
        <h4>{props.projectOptions}:</h4>
        <ul>{clients}</ul>
      </div>
    </Fragment>
  )

}

export default ProjectContainer;

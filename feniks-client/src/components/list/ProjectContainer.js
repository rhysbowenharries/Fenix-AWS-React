import React, {Fragment} from 'react'
import './ProjectContainer.css'


const ProjectContainer = (props) => {

  

  // const clients = props.singleClient.forEach((client) => {
  //   return (<li> {client.forename} + {client.surname} </li>)

  // })
// console.log("clients li",clients);

  // const clientForename = props.clientsWithProject.forename
  // const clientSurname = props.clientsWithProject.surname
  // const clientProjects = props.projectOptions.projects

  return(
    <Fragment>
      <div className  = "project-container">
        <h4>{props.projectOptions}:</h4>
        <h4>{props.singleClient[0].client.forename} {props.singleClient[0].client.surname}</h4>
        <h4>{props.singleClient[1].client.forename} {props.singleClient[1].client.surname}</h4>

      </div>
    </Fragment>
  )

}

export default ProjectContainer;

import React, {Fragment} from 'react'
import './ProjectContainer.css'


const ProjectContainer = (props) => {

  const clientList = props.projectClients.map((client, index) => {
    return <li key={index} value={client.id} >
       {client.client.forename} {client.client.surname}
     </li>
 })

return(
  <Fragment>
    <div className  = "project-container">
      <h4>{props.projectOptions}:</h4>
      <ul>
        {clientList}
      </ul>
    </div>
  </Fragment>
)
}

export default ProjectContainer;

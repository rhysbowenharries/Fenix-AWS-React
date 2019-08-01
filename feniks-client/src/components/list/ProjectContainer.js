import React, {Fragment} from 'react'
import './ProjectContainer.css'


const ProjectContainer = (props) => {

  console.log(props);
  const clientList = props.projectClients.map((client, index) => {
    return <li key={index} value={client.id} className ='listItem-project'>
       <p className='client-spacing'>{client.client.forename},    {client.client.surname}</p>  <p className='client-spacing'>{client.client.gender}</p>  <p className='client-spacing'>{client.client.dob}</p>  <button>view details</button>
     </li>
 })

return(
  <Fragment>
    <div className = "project-container">
      <h4>{props.projectOptions}:</h4>
      <ul>
        {clientList}
      </ul>
    </div>
  </Fragment>
)
}

export default ProjectContainer;

import React, {Fragment} from "react"
import ProjectContainer from './ProjectContainer.js'


const ProjectContainerList = (props) => {


  let options = props.projectOptions.map((project, index) => {
    let cleanClientsWithProject = []
    let clientCountProject = 0
    let clientsWithProject = props.clients.forEach((client) => {
        for(let key in client.projects){
          
          if(client.projects[key] === true && key === project){
            clientCountProject += 1
            cleanClientsWithProject.push(client)
          }
        }
      
    })
    if (cleanClientsWithProject[0]){
    return <ProjectContainer projectOptions={project} key={index}  projectClients = {cleanClientsWithProject} />
    } else {
      return null
    }
  })

  return (<Fragment>{options}</Fragment>)
};


export default ProjectContainerList
 
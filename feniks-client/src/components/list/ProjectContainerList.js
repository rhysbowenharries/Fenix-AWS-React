import React, {Fragment} from "react"
import ProjectContainer from './ProjectContainer.js'


const ProjectContainerList = (props) => {


  // let aSingleclient = props.clients.map((client) => {
  //     for(let key in client.projects){
  //       if(client.projects[key] === true){
  //       }
  //     }
  // })


  let options = props.projectOptions.map((project, index) => {
    let cleanClientsWithProject = []
    let clientsWithProject = props.clients.forEach((client) => {
        for(let key in client.projects){
          console.log("client.projects",client.projects);
          console.log("key", key);
          
          
          if(client.projects[key] === "true" && key === project){
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
 
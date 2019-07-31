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
        if(client.projects != undefined){
        for(let key in client.projects){
          if(client.projects[key] === true && key === project){
            return cleanClientsWithProject.push(client)
          }
        }
      }
    })
    return <ProjectContainer projectOptions={project} key={index}  singleClient = {cleanClientsWithProject} />
  })

  return (<Fragment>{options}</Fragment>)
};


export default ProjectContainerList

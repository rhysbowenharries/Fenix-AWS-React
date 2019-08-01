import React, {Fragment} from 'react'

const ProjectSelectBox = ({projectOptions, handleChange}) => {

    const projectList = projectOptions.map((project, index) => {
        return <option key={index} value={project} >
           {project}
         </option>
     })

    return(
        <Fragment>
        <select id="" defaultValue="default" onChange={handleChange}>
          <option disabled value="default">
          Select project
          </option>
          <option value="all">
              all
          </option>
          {projectList}
        </select> 
        </Fragment>
    )

}

export default ProjectSelectBox


import React, {Fragment} from 'react'

const ProjectSelectBox = ({projectOptions, handleChange}) => {

    const projectList = projectOptions.map((project, index) => {
        return <option key={index} value={project} >
           {project}
         </option>
     })

    return(
        <Fragment>
          <h1 className = "client-list-header">Current clients by project</h1>
          <p className = "client-list-sub-header">If you would like to view clients for a particular project, please select from the drop-down below.</p>
        <div className = 'selection-box-container'>
        <select id="" defaultValue="default" onChange={handleChange} className = 'selection-box'>
          <option disabled value="default">
          Select project
          </option>
          <option value="all">
              all
          </option>
          {projectList}
        </select>
        </div>
        </Fragment>
    )

}

export default ProjectSelectBox

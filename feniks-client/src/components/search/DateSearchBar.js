import React, {Component, Fragment} from "react"



const DateSearchBar = (props) => {

  function handleAppoinmentTypeChange(event){
    props.handleAppointmentChange(event)
  }

  function handleToggleNewAppointment(event){
    const newAppointmentContainer = document.getElementById('newAppointmentForm')
    document.getElementById('datePicker').valueAsDate = new Date();
    newAppointmentContainer.classList.remove('visibility')
  }


  function handleSaveAppointment(event){
    event.preventDefault();
    const newAppointmentContainer = document.getElementById('newAppointmentForm')
    newAppointmentContainer.classList.add('visibility')
    props.handleNewAppointment(event)
  }








  return (
    <Fragment>

      <div className = "appointmentHeader">
        <h1 className = "header"> Dashboard </h1>
        <button  className='appointment-button' onClick={handleToggleNewAppointment}>New appointment</button>
      </div>

      <div id="newAppointmentForm" className="visibility new-appointment-container" >
        <form name="submit" onSubmit={handleSaveAppointment} >
          <div className="display-flex-spaceB">
          <div className="flex">
            <label htmlFor="clientSelection">Select a client:</label>
            <select id="clientSelection" name="clientSelection" className="form-appointmentType" >
              <option>Client</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="datePicker">Select a date:</label>
            <input id='datePicker' type="date" ></input>
          </div>
          <div className="flex">
          <label htmlFor="timePicker">Select a time:</label>
          <input id="timePicker" type="time"></input>
          </div>
          <br/>
          <br/>
          </div>
          <input  type="submit" className='appointment-button-save' value ="Save Appointment"></input>
        </form>
      </div>

      <div className = "date-container">
        <label htmlFor="appointmentType">Select Client Type: </label>
        <select id="appointmentType" name="appointmentType" className="form-appointmentType" onChange = {handleAppoinmentTypeChange}  >
          <option>Client type...</option>
          <option value="Priority">Priority</option>
          <option value="Fast-Track">Fast-Track</option>
          <option value="Standard">Standard</option>
        </select>
        <label htmlFor="startDate">Start Date: </label>
        <input  id="startDate" type = 'date' name = 'DateSearchBoxStart'/>
        <label htmlFor="endDate">End Date: </label>
        <input id="endDate" type = 'date' name = 'DateSearchBoxEnd'/>
      </div>
    </Fragment>
  )

}


export default DateSearchBar;

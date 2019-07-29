import React, {Component, Fragment} from "react"
import DateSearchBar from "../components/search/DateSearchBar.js"
import "./DateSearch.css";



class DateSearch extends Component{

  constructor(props){
    super(props)
    this.state  = {
      appointmentType: "",
      startDate: "",
      endDate: ""
    }

    this.handleAppoinmentTypeChange = this.handleAppoinmentTypeChange.bind(this)
    this.handleNewAppointment = this.handleNewAppointment.bind(this)
  }

  handleAppoinmentTypeChange(event){
    this.setState({appointmentType:event.target.value})
  }

  handleNewAppointment(event){
    console.log(event);
  }

  render(){
    return(
      <DateSearchBar  handleAppointmentChange = {this.handleAppoinmentTypeChange} handleNewAppointment= {this.handleNewAppointment}/>
    )
  }

}


export default DateSearch;

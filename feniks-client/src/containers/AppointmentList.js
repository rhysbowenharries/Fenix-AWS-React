import React, {Component, Fragment} from "react"
import ClientAppointmentRenderProfileList from "../components/list/ClientAppointmentRenderProfileList";



class AppointmentList extends Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
  return (
    <ClientAppointmentRenderProfileList/>
  )
  }
}


export default AppointmentList;

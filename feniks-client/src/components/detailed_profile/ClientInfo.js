import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientInfo= (props) => {

  var projects = "";

  for (var key in props.client.projects) {
    var value = props.client.projects[key];
    if (value === true){
      projects = projects + key + " | ";
    }
  }
  console.log(props);

  return (
    
  <Fragment>
    <div className="content-block">
      <div className="row">
        <h4>Client Information</h4>
      </div>
      <div className="row">
        <div className="col-sm-12 btn-group">
          <Link to={"/client-profile/"+ props.client.id} className="btn btn-lg btn-info disabled float-right">Client Details</Link>
          <Link to={"/edit/"+ props.client.id} className="btn btn-lg btn-info float-right">Edit Client</Link>
          <Link to={"/assessment-form/"+ props.client.id} className="btn btn-lg btn-info float-right">Client Assessment</Link>
        </div>
      </div>
    </div>

    <div className="content-block">
      <div className="row">
        <h4>{props.client.title} {props.client.forename} {props.client.surname}</h4>
      </div>
      <div className="row">
        <div className="col-sm-12">
        <p> Date of Birth: {props.client.dob} </p>
        <p>Email: {props.client.email} </p>
        <p>Phone: {props.client.phone} </p>
        <p>Address: <br></br>{props.address.address1} {props.address.address2}<br/>
        {props.address.address3}<br/>
        {props.address.address4} </p>
        <p>Gender: {props.client.gender}</p>
        <p>Nationality: {props.client.nationality}</p>
        <p> Employment: {props.client.employment} </p>
        <p>Notes for Review: {props.client.forreview}</p>

        </div>
      </div>
    </div>

    <div className="content-block">
      <div className="row">
        <h4>Projects</h4>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {projects}
        </div>
      </div>
    </div>
  </Fragment>
)};
export default ClientInfo;

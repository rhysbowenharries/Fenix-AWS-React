import React from 'react';
import {Link} from 'react-router-dom';


const ClientList = (props) => {

  console.log(props);
  return (
    <Link to={"/client-profile/"+ props.client.id}  className="btn btn-lg btn-light btn-block btn-outline-dark btn-shadow">
      {props.client.forename} {props.client.surname}
    </Link>
  );
}


export default ClientList;

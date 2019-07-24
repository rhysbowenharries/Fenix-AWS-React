import React, {Component} from 'react';
import Request from '../helper/Request.js';
import ClientForm from '../components/forms/ClientForm.js';
import {url} from '../helper/AwsRoute.js';

class EditClientContainer extends Component{
  constructor(props){
    super(props)
    this.state = {client: null }

    this.handleClientDelete = this.handleClientDelete.bind(this);
    this.handleClientPut = this.handleClientPut.bind(this);

  }

  componentDidMount(){
    let request = new Request();
    request.get(`${url}${this.props.id}`).then((data) => {
      this.setState({client: data});
    });

  };

  handleClientDelete(id){
    let request = new Request();
    const urldelete = "https://ibog5q1ds7.execute-api.eu-west-1.amazonaws.com/Production/clients/" + id;
    // debugger
    request.delete(urldelete).then(() => {window.location = "/client-list/"})
  }

  handleClientPut(client){
    const request = new Request();
    const urlput = "https://ibog5q1ds7.execute-api.eu-west-1.amazonaws.com/Production/clients/" + this.props.id;
    request.patch(urlput, client).then(() => window.location = "/client-list")
  }

  render(){
    if(!this.state.client){
      return null;
    }
    return <ClientForm  mode="EDIT" client = {this.state.client} handleClientDelete = {this.handleClientDelete} handleClientPut = {this.handleClientPut}/>
  }

};

export default EditClientContainer;

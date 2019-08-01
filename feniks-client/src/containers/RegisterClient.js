import React, {Component} from 'react';
import {url} from '../helper/AwsRoute.js';
import Request from '../helper/Request.js';
import ClientForm from '../components/forms/ClientForm.js';
import {API} from 'aws-amplify';


class RegisterClient extends Component {
    constructor(props){
        super(props)
        this.handleClientPost = this.handleClientPost.bind(this);
    }



    handleClientPost(client){
        console.log(JSON.stringify(client));
        // const jsonClient = JSON.stringify(client)
        // const changeThisVariable = {
        //     body: jsonClient,
        //     header:{'Content-Type': 'application/json'}
        // }
        // debugger
        // const request = new Request()
        // request.post(url, client)
        // //   .then(() => window.location.pathname = "/equality")
        //   .catch(console.error);
        API.post("clients", "/clients", {body: client})
            .then((data) => {
                console.log(data);
                this.setState({clients: data});
                this.setState({filteredClients:data});
            }
            )
    }

    render(){
        return <ClientForm handleClientPost = {this.handleClientPost} />
    }

};

export default RegisterClient;

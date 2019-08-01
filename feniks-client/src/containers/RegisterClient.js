import React, {Component} from 'react';
import {url} from '../helper/AwsRoute.js';
import Request from '../helper/Request.js';
import ClientForm from '../components/forms/ClientForm.js';


class RegisterClient extends Component {
    constructor(props){
        super(props)
        this.handleClientPost = this.handleClientPost.bind(this);
    }



    handleClientPost(client){
        console.log(JSON.stringify(client));
        
        debugger
        const request = new Request()
        request.post(url, client)
        //   .then(() => window.location.pathname = "/equality")
          .catch(console.error);
    }

    render(){
        return <ClientForm handleClientPost = {this.handleClientPost} />
    }

};

export default RegisterClient;

import React, {Component} from 'react';
import {url} from '../helper/AwsRoute.js';
import Request from '../helper/Request.js';
import NewClient from '../components/forms/ClientForm.js';


class RegisterClient extends Component {
    constructor(props){
        super(props)

        this.handleClientPost = this.handleClientPost.bind(this);
    }



    handleClientPost(client){
        debugger
        const request = new Request();
        console.log(client)
        request.post(url, client).then(() => window.location = "/equality")
    }

    render(){
        return <NewClient handleClientPost = {this.handleClientPost} />
    }

};

export default RegisterClient;

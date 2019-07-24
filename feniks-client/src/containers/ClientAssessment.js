import {url} from '../helper/AwsRoute.js';
import Request from '../helper/Request.js';
import React,{Fragment, Component} from 'react';
import ClientAssessmentForm from '../components/forms/ClientAssessmentForm'



class ClientAssessment extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return <ClientAssessmentForm/>
    }

};

export default ClientAssessment;

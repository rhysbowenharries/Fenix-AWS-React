// import {url} from '../helper/AwsRoute.js';
// import Request from '../helper/Request.js';
import React,{Component} from 'react';
import ClientAssessmentForm from '../components/forms/ClientAssessmentForm'



class ClientAssessment extends Component{

    constructor(props){
        super(props)
        this.state = { id:this.props }
    }

    render(){
        return <ClientAssessmentForm client={this.state.id}/>
    }

};

export default ClientAssessment;

import React, {Component} from 'react';
import {url} from '../helper/AwsRoute.js';
import Request from '../helper/Request.js';
import ClientInfo from '../components/detailed_profile/ClientInfo.js';


class DetailedClient extends Component{
    constructor(props){
        super(props)
        this.state = {client: null}
    }

    componentDidMount(){
        let request = new Request();
        request.get(`${url}${this.props.id}`)
        .then((data) => {this.setState({client: data})});
    };

    render(){
        if(!this.state.client){return null}
        return <ClientInfo client = {this.state.client}/>
    }

};



export default DetailedClient;
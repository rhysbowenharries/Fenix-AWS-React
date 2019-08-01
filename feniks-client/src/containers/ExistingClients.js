import React,{Fragment, Component} from 'react';
import { API } from "aws-amplify";
import ProjectContainerList from '../components/list/ProjectContainerList.js'
import ProjectSelectBox from '../components/list/ProjectSelectBox.js'


// import {Link} from 'react-router-dom';
import {url} from '../helper/AwsRoute.js';
import Request from '../helper/Request.js';
import ClientList from '../components/list/ClientList.js';
import ClientSearchForm from '../components/search/ClientSearchForm.js';
import ProjectContainer from '../components/list/ProjectContainer.js'
import './ExistingClients.css'


class ExistingClients extends Component {

  constructor(props){
    super(props);
    this.state = {clients: [],
      filteredClients: [],
      allProjects:[
        "active50",
        "counselling",
        "grouptherapy",
        "toddler",
        "survivors",
        "personaldevelopment",
        "leithcafe",
        "smart",
        "other",
        "unassigned"
      ],
      selectedProjects:[
        "active50",
        "counselling",
        "grouptherapy",
        "toddler",
        "survivors",
        "personaldevelopment",
        "leithcafe",
        "smart",
        "other",
        "unassigned"
    
      ]
    }

      this.handleSelectOption = this.handleSelectOption.bind(this)
    }



    componentDidMount(){
        API.get("clients", "/clients")
            .then((data) => {
                console.log(data);
                this.setState({clients: data});
                this.setState({filteredClients:data});
            }
            )
    }


    handleSelectOption(event){
        console.log("EVENT",event.target.value);
        if (event.target.value === "all"){
            this.setState({selectedProjects:[
                "active50",
                "counselling",
                "grouptherapy",
                "toddler",
                "survivors",
                "personaldevelopment",
                "leithcafe",
                "smart",
                "other",
                "unassigned"
            
              ]})
        }else {

        this.setState({selectedProjects: [`${event.target.value}`]})
        }
      }



    render(){
      return(
        <Fragment>
          <ProjectSelectBox projectOptions = {this.state.allProjects} handleChange={this.handleSelectOption} className = 'selection-box'/>
          <ProjectContainerList projectOptions = {this.state.selectedProjects} clients = {this.state.clients}/>
        </Fragment>
      )
    }

  }

  export default ExistingClients;

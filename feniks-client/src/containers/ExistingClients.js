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
              ]})
        }else {

        this.setState({selectedProjects: [`${event.target.value}`]})
        }
      }


    //
    // handleSearch(search){
    //     const filteredClients = this.state.clients.filter((client) => {
    //         return client.surname.includes(search)
    //     })
    //     this.setState({filteredClients:filteredClients})
    // }
    //
    // handleClientPost(client){
    //     const request = new Request();
    //     request.post(`${url}`, client).then(() => window.location = "/equality-form")
    // }


    render(){
      return(
        <Fragment>
          <ProjectSelectBox projectOptions = {this.state.allProjects} handleChange={this.handleSelectOption} className = 'selection-box'/>
          <ProjectContainerList projectOptions = {this.state.selectedProjects} clients = {this.state.clients}/>
        </Fragment>
      )
    }





    //     <Fragment>
    //
    //     {/* this could be refactored to remove the div */}
    //     {/* <div className="content-block">
    //         <ClientSearchForm handleSearch = {this.handleSearch}/>
    //     </div> */}
    //
    //
    //     <div className="row">
    //       {/*  <div className="col-sm-3">
    //             <div className="column-head">Priority Clients</div>
    //             <div className="column-body">
    //             </div>
    //         </div>
    //
    //         <div className="col-sm-3">
    //             <div className="column-head">FastTrack Clients</div>
    //             <div className="column-body">
    //
    //             </div>
    //         </div>
    //
    //         <div className="col-sm-3">
    //             <div className="column-head">Standard Clients</div>
    //             <div className="column-body">
    //
    //             </div>
    //         </div>
    //
    //         <div className="col-sm-3">
    //             <div className="column-head">Unassigned Clients</div>
    //             <div className="column-body"> */}
    //
    //
    //
    //
    //
    //                 {/* {
    //                     this.state.filteredClients.map((client) =>{
    //                         return (<ClientList key={client.id} client={client} handleClientPost={this.handleClientPost} />);
    //                     })
    //                 } */}
    //             </div>
    //
    //
    //
    // </Fragment>


  }

  export default ExistingClients;

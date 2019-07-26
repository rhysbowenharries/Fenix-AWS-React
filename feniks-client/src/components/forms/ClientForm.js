import React,{Fragment, Component} from 'react';


class ClientForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      address:{ },
      projects:{
        "active50":false,
        "counselling":false,
        "grouptherapy":false,
        "toddler":false,
        "survivors":false,
        "personaldevelopment":false,
        "leithcafe":false,
        "smart":false,
        "other":false
      },
      client: { }
    }


    // For Edit Option
    this.handleSubmit = this.handleSubmit.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.selectingClientTitle = this.selectingClientTitle.bind(this)
    this.selectAllRadioProjectButtons = this.selectAllRadioProjectButtons.bind(this)
    this.selectingClientGender = this.selectingClientGender.bind(this)
    this.selectingClientEmployment = this.selectingClientEmployment.bind(this)
    this.selectAllCheckDetailButtons = this.selectAllCheckDetailButtons.bind(this)
    this.selectAllRadioHearButtons = this.selectAllRadioHearButtons.bind(this)

    this.changeOnSubmitToEdit = this.changeOnSubmitToEdit.bind(this)
    this.handleForeNameChange = this.handleForeNameChange.bind(this)
    this.handleSurnameChange = this.handleSurnameChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDobChange = this.handleDobChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handleNationalityChange = this.handleNationalityChange.bind(this)
    this.handleGpChange = this.handleGpChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleEmploymentChange = this.handleEmploymentChange.bind(this)
    this.handleMailingChange = this.handleMailingChange.bind(this)
    this.handleLeavemessageChange = this.handleLeavemessageChange.bind(this)
    this.handleFromFenicksChange = this.handleFromFenicksChange.bind(this)


    this.handleAddress1Change = this.handleAddress1Change.bind(this)
    this.handleAddress2Change = this.handleAddress2Change.bind(this)
    this.handleAddress3Change = this.handleAddress3Change.bind(this)
    this.handleAddress4Change = this.handleAddress4Change.bind(this)


    this.handleProject1Change = this.handleProject1Change.bind(this)
    this.handleProject2Change = this.handleProject2Change.bind(this)
    this.handleProject3Change = this.handleProject3Change.bind(this)
    this.handleProject4Change = this.handleProject4Change.bind(this)
    this.handleProject5Change = this.handleProject5Change.bind(this)
    this.handleProject6Change = this.handleProject6Change.bind(this)
    this.handleProject7Change = this.handleProject7Change.bind(this)
    this.handleProject8Change = this.handleProject8Change.bind(this)
    this.handleProject9Change = this.handleProject9Change.bind(this)
  }




  handleForeNameChange(event){
    const client = this.state.client
    client.firstname = event.target.value
    this.setState({client})
  }

  handleSurnameChange(event){
    const client = this.state.client
    client.surname = event.target.value
    this.setState({client})
  }

  handleTitleChange(event){
    const client = this.state.client
    client.title = event.target.value
    this.setState({client})
  }

  handleDobChange(event){
    const client = this.state.client
    client.dob = event.target.value
    this.setState({client})
  }

  handleGenderChange(event){
    const client = this.state.client
    client.gender = event.target.value
    this.setState({client})
  }

  handleNationalityChange(event){
    const client = this.state.client
    client.nationality = event.target.value
    this.setState({client})
  }

  handleGpChange(event){
    const client = this.state.client
    client.gp = event.target.value
    this.setState({client})
  }

  handleGpChange(event){
    const client = this.state.client
    client.gp = event.target.value
    this.setState({client})
  }

  handlePhoneChange(event){
    const client = this.state.client
    client.phone = event.target.value
    this.setState({client})
  }

  handleEmailChange(event){
    const client = this.state.client
    client.email = event.target.value
    this.setState({client})
  }

  handleEmploymentChange(event){
    const client = this.state.client
    client.employment = event.target.value
    this.setState({client})
  }

  handleFromFenicksChange(event){
    const client = this.state.client
    client.fromfeniks = event.target.checked
    this.setState({client})
  }

  handleLeavemessageChange(event){
    const client = this.state.client
    client.leavemessage = event.target.checked
    this.setState({client})
  }

  handleMailingChange(event){
    const client = this.state.client
    client.mailing = event.target.checked
    this.setState({client})
  }





  handleAddress1Change(event){
    const address = this.state.address
    address.address1 = event.target.value
    this.setState({address})
  }

  handleAddress2Change(event){
    const address = this.state.address
    address.address2 = event.target.value
    this.setState({address})
  }

  handleAddress3Change(event){
    const address = this.state.address
    address.address3 = event.target.value
    this.setState({address})
  }

  handleAddress4Change(event){
    const address = this.state.address
    address.address4 = event.target.value
    this.setState({address})
  }




  handleProject1Change(event){
    const project = this.state.projects
    project.active50 = event.target.checked
    this.setState({project})
  }
  handleProject2Change(event){
    const project = this.state.projects
    project.counselling = event.target.checked
    this.setState({project})
  }
  handleProject3Change(event){
    const project = this.state.projects
    project.grouptherapy = event.target.checked
    this.setState({project})
  }
  handleProject4Change(event){
    const project = this.state.projects
    project.toddler = event.target.checked
    this.setState({project})
  }
  handleProject5Change(event){
    const project = this.state.projects
    project.survivors = event.target.checked
    this.setState({project})
  }
  handleProject6Change(event){
    const project = this.state.projects
    project.personaldevelopment = event.target.checked
    this.setState({project})
  }
  handleProject7Change(event){
    const project = this.state.projects
    project.leithcafe = event.target.checked
    this.setState({project})
  }
  handleProject8Change(event){
    const project = this.state.projects
    project.smart = event.target.checked
    this.setState({project})
  }
  handleProject9Change(event){
    const project = this.state.projects
    project.other = event.target.checked
    this.setState({project})
  }












  handleSubmit(event){
    event.preventDefault();
    //   this.setState({address:{
    //     "address1": event.target.address1.value,
    //     "address2": event.target.address2.value,
    //     "address3": event.target.address3.value,
    //     "address4": event.target.address4.value
    //   }
    // });
    //
    // this.setState({ projects:{
    //   "active50":event.target.project1.checked,
    //   "counselling":event.target.project2.checked,
    //   "grouptherapy":event.target.project3.checked,
    //   "toddler":event.target.project4.checked,
    //   "survivors":event.target.project5.checked,
    //   "personaldevelopment":event.target.project6.checked,
    //   "leithcafe":event.target.project7.checked,
    //   "smart":event.target.project8.checked,
    //   "other":event.target.project9.checked
    // }})

    this.setState({address:{
      "address1": event.target.address1.value,
      "address2": event.target.address2.value,
      "address3": event.target.address3.value,
      "address4": event.target.address4.value
    }
  },
  { projects:{
    "active50":event.target.project1.checked,
    "counselling":event.target.project2.checked,
    "grouptherapy":event.target.project3.checked,
    "toddler":event.target.project4.checked,
    "survivors":event.target.project5.checked,
    "personaldevelopment":event.target.project6.checked,
    "leithcafe":event.target.project7.checked,
    "smart":event.target.project8.checked,
    "other":event.target.project9.checked
  }},
  {client: {
    "title":event.target.title.value,
    "surname":event.target.surname.value,
    "forename":event.target.forename.value,
    "dob":event.target.dob.value,
    "gender":event.target.gender.value,
    "nationality":event.target.nationality.value,
    "gp":event.target.gp.value,
    "address": this.state.address,
    "phone":event.target.phone.value,
    "email":event.target.email.value,
    "employment":event.target.employment.value,
    "leavemessage":event.target.leavemessage.checked,
    "fromfeniks":event.target.fromfeniks.checked,
    "mailing":event.target.mailing.checked,
    "projects":this.state.projects,
    "hear": event.target.hear.value,
    "forreview": event.target.forreview.value
  }}, this.props.handleClientPost(this.state));
}


// The Following functions are for the EDIT option
selectingClientTitle(){
  const clientTitle = document.getElementById('title')
  for(let i = 0; i < clientTitle.length; i++) {
    let clientTitleOption = clientTitle[i];
    if (clientTitleOption.value === this.props.client.title){
      clientTitleOption.selected = this.props.client.title
    }
  }
}


// For Edit Option
selectingClientGender(){
  const clientGender = document.getElementById('gender')
  for(let i = 0; i < clientGender.length; i++) {
    let clientGenderOption = clientGender[i];
    if (clientGenderOption.value === this.props.client.gender){
      clientGenderOption.selected = this.props.client.gender
    }
  }
}


// For Edit Option
selectingClientNationality(){
  const clientNationality = document.getElementById('nationality')
  for(let i = 0; i < clientNationality.length; i++) {
    let clientNationalityOption = clientNationality[i];
    if (clientNationalityOption.value === this.props.client.nationality){
      clientNationalityOption.selected = this.props.client.nationality
    }
  }
}


// For Edit Option
selectingClientEmployment(){
  const clientEmployment = document.getElementById('employment')
  for(let i = 0; i < clientEmployment.length; i++) {
    let clientEmploymentOption = clientEmployment[i];
    if (clientEmploymentOption.value === this.props.client.employment){
      clientEmploymentOption.selected = this.props.client.employment
    }
  }
}


// For Edit Option
selectAllRadioProjectButtons(){
  let clientsProjectOptions = this.props.client.projects
  for( let key in clientsProjectOptions){
    if(clientsProjectOptions[key] === true){
      const allRadioButtonsSelected = document.getElementsByName(key)
      allRadioButtonsSelected.forEach(selected => {
        selected.checked = true;
      })
    }
  }
}


// For Edit Option
selectAllRadioHearButtons(){
  let clientsProjectOptions = this.props.client.hear
  const allRadioHearOptions = document.getElementsByClassName('hear')
  for(let i = 0; i < allRadioHearOptions.length; i++){
    if(clientsProjectOptions === allRadioHearOptions[i].name){
      allRadioHearOptions[i].checked = true
    }
  }
}


// For Edit Option
selectAllCheckDetailButtons(){
  let contactMessageKey = 'leavemessage'
  let contactFromFenicksKey = 'fromfeniks'
  let contactMailingKey = 'mailing'
  let leaveMessageOption = this.props.client[contactMessageKey]
  let fromFeniksOption = this.props.client[contactFromFenicksKey]
  let mailingOption = this.props.client[contactMailingKey]
  const contactoptionArray = [contactMessageKey,contactFromFenicksKey,contactMailingKey]
  contactoptionArray.forEach(key => {
    if(this.props.client[key] === true){
      const selection = document.getElementsByName(key)
      selection.forEach(selected => {
        selected.checked = true;
      })
    }
  })
}


// For Edit Option
changeOnSubmitToEdit(){
  const submitButton = document.getElementsByName('submit')
  const submitButtonText = document.getElementsByClassName('update')
  const formTitle = document.getElementsByClassName('form-title')
  submitButton[0].onSubmit =  this.props.handleClientPut
  submitButtonText[0].value= "Update Client"
  formTitle[0].innerText = "Update Client Details"
}


// For Edit Option
componentDidMount(){
  if(this.props.mode === "EDIT"){
    console.log("im in edit mode");
    this.selectingClientTitle()
    this.selectingClientGender()
    this.selectingClientNationality()
    this.selectingClientEmployment()
    this.selectAllRadioProjectButtons()
    this.selectAllCheckDetailButtons()
    this.selectAllRadioHearButtons()
    this.changeOnSubmitToEdit()
    this.setState({
      address:this.props.client.address,
      projects:this.props.client.projects,
      client:this.props.client})
    }
  }


















































  render(){
    return(
      <Fragment>
        <form name="submit" onSubmit={this.handleSubmit}>
          <div className="content-block">
            <div className="col-sm-4">
              <h4 className = "form-title">Registration Form</h4>
            </div>
            <div className="row">
              <h4>Personal Information</h4>
            </div>


            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-9">
                <select id="title" name="title" className="form-control" onChange = {this.handleTitleChange} >
                  <option>Select...</option>
                  <option value="Mr">Mr</option>
                  <option value="Miss">Miss</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="surname" className="col-sm-2 col-form-label">Surname(s)</label>
              <div className="col-sm-9">
                <input type="text" id="surname" name="surname" className="form-control"  placeholder="Surname(s)" value = {this.state.client.surname} onChange = {this.handleSurnameChange} />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="forename" className="col-sm-2 col-form-label">Forename(s)</label>
              <div className="col-sm-9">
                <input type="text" id="forename" name="forename" className="form-control"  placeholder="Forename(s)" value = {this.state.client.forename} onChange = {this.handleForeNameChange}/>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
              <div className="col-sm-9">
                <input type="date" id="dob" name="dob" className="form-control"  placeholder="" value = {this.state.client.dob} onChange = {this.handleDobChange}/>
              </div>
            </div>

            {/* <div className="form-group form-check form-check-inline">
            <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
            <br></br>
            <input type="radio" id="gender1" name="gender" className="form-check-input" value="Female"/>
            <label className="form-check-label" htmlFor="gender1">Female</label>
            <input type="radio" id="gender2" name="gender" className="form-check-input" value="Male"/>
            <label className="form-check-label" htmlFor="gender2">Male</label>
            <input type="radio" id="gender3" name="gender" className="form-check-input" value="Other"/>
            <label className="form-check-label" htmlFor="gender3">Other</label>
            <input type="radio" id="gender4" name="gender" className="form-check-input" value="I do not wish to disclose this"/>
            <label className="form-check-label" htmlFor="gender4">I do not wish to disclose this</label>
          </div> */}

          <div className="form-group row">
            <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-9">
              <select id="gender" name="gender" className="form-control" onChange = {this.handleGenderChange} >
                <option>Select...</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
                <option value="nodiscolose">I do not wish to disclose this</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="nationality" className="col-sm-2 col-form-label">Nationality</label>
            <div className="col-sm-9">
              <select id="nationality" name="nationality" className="form-control" onChange = {this.handleNationalityChange}>
                <option>Select...</option>
                <option value="Česká republika / Czech Republic">Česká republika / Czech Republic</option>
                <option value="Eesti / Estonia">Eesti / Estonia</option>
                <option value="Magyarország / Hungary">Magyarország / Hungary</option>
                <option value="Latvija / Latvia">Latvija / Latvia</option>
                <option value="Lietuva / Lithuania">Lietuva / Lithuania</option>
                <option value="Polska / Poland">Polska / Poland</option>
                <option value="Slovensko / Slovakia">Slovensko / Slovakia</option>
                <option value="Slovenija / Slovenia">Slovenija / Slovenia</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="gp" className="col-sm-2 col-form-label" >GP Name and Practice</label>
            <div className="col-sm-9">
              <input type="text" id="gp" name="gp" className="form-control"   placeholder="GP Name and Practice" value = {this.state.client.gp} onChange = {this.handleGpChange}/>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Details</h4>
          </div>

          <div className="form-group row">
            <label htmlFor="address1" className="col-sm-2 col-form-label">Address Line 1</label>
            <div className="col-sm-9">
              <input type="text" id="address1" name="address1" className="form-control"  placeholder="House name / number" value = {this.state.address.address1} onChange = {this.handleAddress1Change}/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="address2" className="col-sm-2 col-form-label">Address Line 2</label>
            <div className="col-sm-9">
              <input type="text" id="address2" name="address2" className="form-control"  placeholder="Street"  value = {this.state.address.address2} onChange = {this.handleAddress2Change}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address3" className="col-sm-2 col-form-label">Address Line 3</label>
            <div className="col-sm-9">
              <input type="text" id="address3" name="address3" className="form-control" placeholder="Town" value = {this.state.address.address3} onChange = {this.handleAddress3Change}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address4" className="col-sm-2 col-form-label">Address Line 4</label>
            <div className="col-sm-9">
              <input type="text" id="address4" name="address4" className="form-control" placeholder="Postcode"  value = {this.state.address.address4} onChange = {this.handleAddress4Change}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-9">
              <input type="number" id="phone" name="phone" className="form-control"  placeholder="Phone Number" value = {this.state.client.phone} onChange={this.handlePhoneChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-9">
              <input type="text" id="email" name="email" className="form-control"  placeholder="Email Address" value = {this.state.client.email}  onChange={this.handleEmailChange}/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="employment" className="col-sm-2 col-form-label">Employment Status</label>
            <div className="col-sm-9">
              <select id="employment" name="employment" className="form-control"  onChange = {this.handleEmploymentChange}>
                <option>Select...</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Retired">Retired</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input type="checkbox" id="leavemessage" name="leavemessage" className="form-check-input" onChange = {this.handleLeavemessageChange}/>
              <label className="form-check-label" htmlFor="leavemessage">Tick if we can leave a message on your voicemail</label>
            </div>

            <div className="form-check">
              <input type="checkbox" id="fromfeniks" name="fromfeniks" className="form-check-input" onChange = {this.handleFromFenicksChange}/>
              <label className="form-check-label" htmlFor="fromfeniks">Tick if we can say we are calling from Feniks</label>
            </div>

            <div className="form-check">
              <input type="checkbox" id="mailing" name="mailing" className="form-check-input" onChange = {this.handleMailingChange}/>
              <label className="form-check-label" htmlFor="mailing">Tick if you agree to be added to our mailing list to be informed about news, services and projects</label>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Projects</h4>
          </div>

          <div className="form-group row">
            <label htmlFor="projects" className="col-sm-12 col-form-label">Which Project(s) would you like to attend? Please tick all relevant boxes.</label>
          </div>

          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project1" name="active50" className="form-check-input project" onChange = {this.handleProject1Change}/>
            <label className="form-check-label" htmlFor="project1" value="1">Active 50+</label>
            <input type="checkbox" id="project2" name="counselling" className="form-check-input project" onChange = {this.handleProject2Change}/>
            <label className="form-check-label " htmlFor="project2" value="1">Counselling / Therapy</label>
            <input type="checkbox" id="project3" name="grouptherapy" className="form-check-input project" onChange = {this.handleProject3Change}/>
            <label className="form-check-label " htmlFor="project3" value="1">Group Therapy</label>
          </div>

          <br/>

          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project4" name="toddler" className="form-check-input project" onChange = {this.handleProject4Change}/>
            <label className="form-check-label " htmlFor="project4" value="1">Toddler Group</label>
            <input type="checkbox" id="project5" name="survivors" className="form-check-input project" onChange = {this.handleProject5Change}/>
            <label className="form-check-label " htmlFor="project5" value="1">Survivors' Group</label>
            <input type="checkbox" id="project6" name="personaldevelopment" className="form-check-input project" onChange = {this.handleProject6Change}/>
            <label className="form-check-label " htmlFor="project6" value="1">Personal Development Workshops</label>
          </div>

          <br/>

          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project7" name="leithcafes" className="form-check-input" onChange = {this.handleProject7Change}/>
            <label className="form-check-label" htmlFor="project7" value="1">Leith Conversation Cafes</label>
            <input type="checkbox" id="project8" name="smart" className="form-check-input" onChange = {this.handleProject8Change}/>
            <label className="form-check-label" htmlFor="project8" value="1">SMART Recovery</label>
            <input type="checkbox" id="project9" name="other" className="form-check-input" onChange = {this.handleProject9Change}/>
            <label className="form-check-label" htmlFor="project9" value="1">Other</label>
          </div>

        </div>

        <div className="content-block">
          <div className="row">
            <h4>Feniks</h4>
          </div>
          <div className="form-group row">
            <label htmlFor="hear" className="col-sm-12 col-form-label">How did you hear about Feniks?</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input type="radio" id="hear1" name="hear" className="form-check-input hear" value="1"/>
            <label className="form-check-label" htmlFor="hear1">Emito</label>
            <input type="radio" id="hear2" name="hear" className="form-check-input hear" value="2"/>
            <label className="form-check-label" htmlFor="hear2">Feniks' Website</label>
            <input type="radio" id="hear3" name="hear" className="form-check-input hear" value="3"/>
            <label className="form-check-label" htmlFor="hear3">Friend / Family Member</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="radio" id="hear4" name="hear" className="form-check-input hear" value="4"/>
            <label className="form-check-label" htmlFor="hear4">GP</label>
            <input type="radio" id="hear5" name="hear" className="form-check-input hear" value="5"/>
            <label className="form-check-label" htmlFor="hear5">Leaflet</label>
            <input type="radio" id="hear6" name="hear" className="form-check-input hear" value="6"/>
            <label className="form-check-label" htmlFor="hear6">Other</label>
          </div>
        </div>

        <div className="content-block">
          <div className="form-group row">
            <label htmlFor="forreview" className="col-sm-2 col-form-label">Items for Review</label>
            <div className="col-sm-9">
              <input type="text" id="forreview" name="forreview" className="form-control"  placeholder="If any item on this client needs reviewed, please advise here" defaultValue = "If any item on this client needs reviewed, please advise here"  value = {this.state.client.forreview}/>
            </div>
          </div>
        </div>


        <div className="content-block">
          <div className="form-group">
            <input type="submit" className="btn btn-lg btn-block btn-success update" value="Save New Client"/>
            <input type="reset" className="btn btn-lg btn-block btn-danger" value="Undo Changes"/>
          </div>
        </div>
      </form>
    </Fragment>
  )
}
}

export default ClientForm;

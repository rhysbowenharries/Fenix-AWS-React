import React,{Fragment, Component} from 'react';

class ClientForm extends Component{

  constructor(props){
    super(props)

    if(props.mode !== "EDIT"){
      this.state = {
        address:{},
        project:{},
        client:{}
      }
    }else{
      this.state = {
        address:props.address,
        project:props.project,
        client:props.client
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.selectingClientTitle = this.selectingClientTitle.bind(this)
    this.selectAllRadioProjectButtons = this.selectAllRadioProjectButtons.bind(this)
    this.selectingClientGender = this.selectingClientGender.bind(this)
    this.selectingClientEmployment = this.selectingClientEmployment.bind(this)
    this.selectAllCheckDetailButtons = this.selectAllCheckDetailButtons.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();

    // Turn address and projects into array
    this.setState({address:{
      "address1": event.target.address1.value,
      "address2": event.target.address2.value,
      "address3": event.target.address3.value,
      "address4": event.target.address4.value
    }
  });

  this.setState({ projects:{
    "active50":event.target.project1.checked,
    "counselling":event.target.project2.checked,
    "grouptherapy":event.target.project3.checked,
    "toddler":event.target.project4.checked,
    "survivors":event.target.project5.checked,
    "personaldevelopment":event.target.project6.checked,
    "leithcafe":event.target.project7.checked,
    "smart":event.target.project8.checked,
    "other":event.target.project9.checked
  }})

  this.setState({client: {
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
    "projects":this.state.project,
    "hear":event.target.hear.value,
    "forreview": event.target.forreview.value
  }})

  this.props.handleClientPost();
  this.props.handleClientPut(this.state);

}


selectingClientTitle(){
  const clientTitle = document.getElementById('title')
  for(let i = 0; i < clientTitle.length; i++) {
    let clientTitleOption = clientTitle[i];
    if (clientTitleOption.value === this.props.client.title){
    }
  }
}


selectingClientGender(){
  const clientGender = document.getElementById('gender')
  for(let i = 0; i < clientGender.length; i++) {
    let clientGenderOption = clientGender[i];
    if (clientGenderOption.value === this.props.client.gender){
    }
  }
}

selectingClientNationality(){
  const clientNationality = document.getElementById('nationality')
  for(let i = 0; i < clientNationality.length; i++) {
    let clientNationalityOption = clientNationality[i];
    if (clientNationalityOption.value === this.props.client.nationality){
    }
  }
}

selectingClientEmployment(){
  const clientEmployment = document.getElementById('employment')
  for(let i = 0; i < clientEmployment.length; i++) {
    let clientEmploymentOption = clientEmployment[i];
    if (clientEmploymentOption.value === this.props.client.employment){
    }
  }
}

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
        console.log(selected);
        selected.checked = true;
      })
    }
  })

  // const contactOptions = [leaveMessageOption, fromFeniksOption, mailingOption ]
  //   if(clientsProjectOptions[key] === true){
  //     const allRadioButtonsSelected = document.getElementsByName(key)
  //     allRadioButtonsSelected.forEach(selected => {
  //       selected.checked = true;
  //     })
  //   }
  }



componentDidMount(){
  this.selectingClientTitle()
  this.selectingClientGender()
  this.selectingClientNationality()
  this.selectingClientEmployment()
  this.selectAllRadioProjectButtons()
  this.selectAllCheckDetailButtons()
}



render(){
  return(
    <Fragment>
      <form onSubmit={this.handleSubmit}>
        <div className="content-block">
          <div className="col-sm-4">
            <h4>Registration Form</h4>
          </div>
          <div className="row">
            <h4>Personal Information</h4>
          </div>


          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-9">
              <select id="title" name="title" className="form-control" required>
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
              <input type="text" id="surname" name="surname" className="form-control"  placeholder="Surname(s)" value = {this.state.client.surname} required/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="forename" className="col-sm-2 col-form-label">Forename(s)</label>
            <div className="col-sm-9">
              <input type="text" id="forename" name="forename" className="form-control"  placeholder="Forename(s)" value = {this.state.client.forename} required/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
            <div className="col-sm-9">
              <input type="date" id="dob" name="dob" className="form-control" value = {this.state.client.dob} placeholder="" required/>
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
            <select id="gender" name="gender" className="form-control" required>
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
            <select id="nationality" name="nationality" className="form-control">
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
          <label htmlFor="gp" className="col-sm-2 col-form-label">GP Name and Practice</label>
          <div className="col-sm-9">
            <input type="text" id="gp" name="gp" className="form-control" value = {this.state.client.gp}  placeholder="GP Name and Practice" />
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
            <input type="text" id="address1" name="address1" className="form-control"  placeholder="House name / number"/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="address2" className="col-sm-2 col-form-label">Address Line 2</label>
          <div className="col-sm-9">
            <input type="text" id="address2" name="address2" className="form-control"  placeholder="Street" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address3" className="col-sm-2 col-form-label">Address Line 3</label>
          <div className="col-sm-9">
            <input type="text" id="address3" name="address3" className="form-control" placeholder="Town"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address4" className="col-sm-2 col-form-label">Address Line 4</label>
          <div className="col-sm-9">
            <input type="text" id="address4" name="address4" className="form-control" placeholder="Postcode" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
          <div className="col-sm-9">
            <input type="number" id="phone" name="phone" className="form-control" value = {this.state.client.phone} placeholder="Phone Number"required/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-9">
            <input type="text" id="email" name="email" className="form-control" value = {this.state.client.email} placeholder="Email Address"/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="employment" className="col-sm-2 col-form-label">Employment Status</label>
          <div className="col-sm-9">
            <select id="employment" name="employment" className="form-control" required>
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
            <input type="checkbox" id="leavemessage" name="leavemessage" className="form-check-input"/>
            <label className="form-check-label" htmlFor="leavemessage">Tick if we can leave a message on your voicemail</label>
          </div>

          <div className="form-check">
            <input type="checkbox" id="fromfeniks" name="fromfeniks" className="form-check-input"/>
            <label className="form-check-label" htmlFor="fromfeniks">Tick if we can say we are calling from Feniks</label>
          </div>

          <div className="form-check">
            <input type="checkbox" id="mailing" name="mailing" className="form-check-input"/>
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
          <input type="checkbox" id="project1" name="active50" className="form-check-input project"/>
          <label className="form-check-label" htmlFor="project1" value="1">Active 50+</label>
          <input type="checkbox" id="project2" name="counselling" className="form-check-input project"/>
          <label className="form-check-label " htmlFor="project2" value="1">Counselling / Therapy</label>
          <input type="checkbox" id="project3" name="grouptherapy" className="form-check-input project"/>
          <label className="form-check-label " htmlFor="project3" value="1">Group Therapy</label>
        </div>

        <br/>

        <div className="form-group form-check form-check-inline">
          <input type="checkbox" id="project4" name="toddler" className="form-check-input project"/>
          <label className="form-check-label " htmlFor="project4" value="1">Toddler Group</label>
          <input type="checkbox" id="project5" name="survivors" className="form-check-input project"/>
          <label className="form-check-label " htmlFor="project5" value="1">Survivors' Group</label>
          <input type="checkbox" id="project6" name="personaldevelopment" className="form-check-input project"/>
          <label className="form-check-label " htmlFor="project6" value="1">Personal Development Workshops</label>
        </div>

        <br/>

        <div className="form-group form-check form-check-inline">
          <input type="checkbox" id="project7" name="leithcafes" className="form-check-input"/>
          <label className="form-check-label" htmlFor="project7" value="1">Leith Conversation Cafes</label>
          <input type="checkbox" id="project8" name="smart" className="form-check-input"/>
          <label className="form-check-label" htmlFor="project8" value="1">SMART Recovery</label>
          <input type="checkbox" id="project9" name="other" className="form-check-input"/>
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
          <input type="radio" id="hear1" name="hear" className="form-check-input" value="1"/>
          <label className="form-check-label" htmlFor="hear1">Emito</label>
          <input type="radio" id="hear2" name="hear" className="form-check-input" value="2"/>
          <label className="form-check-label" htmlFor="hear2">Feniks' Website</label>
          <input type="radio" id="hear3" name="hear" className="form-check-input" value="3"/>
          <label className="form-check-label" htmlFor="hear3">Friend / Family Member</label>
        </div>
        <br/>
        <div className="form-group form-check form-check-inline">
          <input type="radio" id="hear4" name="hear" className="form-check-input" value="4"/>
          <label className="form-check-label" htmlFor="hear4">GP</label>
          <input type="radio" id="hear5" name="hear" className="form-check-input" value="5"/>
          <label className="form-check-label" htmlFor="hear5">Leaflet</label>
          <input type="radio" id="hear6" name="hear" className="form-check-input" value="6"/>
          <label className="form-check-label" htmlFor="hear6">Other</label>
        </div>
      </div>

      <div className="content-block">
        <div className="form-group row">
          <label htmlFor="forreview" className="col-sm-2 col-form-label">Items for Review</label>
          <div className="col-sm-9">
            <input type="text" id="forreview" name="forreview" className="form-control" value = {this.state.client.forreview} placeholder="If any item on this client needs reviewed, please advise here" defaultValue = "If any item on this client needs reviewed, please advise here" />
          </div>
        </div>
      </div>


      <div className="content-block">
        <div className="form-group">
          <input type="submit" className="btn btn-lg btn-block btn-success" value="Save New Client"/>
          <input type="reset" className="btn btn-lg btn-block btn-danger" value="Undo Changes"/>
        </div>
      </div>
    </form>
  </Fragment>
)
}
}

export default ClientForm;

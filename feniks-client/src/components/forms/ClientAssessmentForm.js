import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';

class ClientAssessmentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:props.client.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      schedule: {
        "mondayMorning":event.target.mondayMorning.value,
        "tuesdayMorning":event.target.tuesdayMorning.value,
        "wednesdayMorning":event.target.wednesdayMorning.value,
        "thurdsayMorning":event.target.thursdayMorning.value,
        "fridayMorning":event.target.fridayMorning.value,
        "saturdayMorning":event.target.saturdayMorning.value,
        "mondayAfternoon":event.target.mondayAfternoon.value,
        "tuesdayAfternoon":event.target.tuesdayAfternoon.value,
        "wednesdayAfternoon":event.target.wednesdayAfternoon.value,
        "thursdayAfternoon":event.target.thursdayAfternoon.value,
        "fridayAfternoon":event.target.fridayAfternoon.value,
        "saturdayAfternoon":event.target.saturdayAfternoon.value,
        "mondayEvening":event.target.mondayEvening.value,
        "tuesdayEvening":event.target.tuesdayEvening.value,
        "wednesdayEvening":event.target.wednesdayEvening.value,
        "thursdayEvening":event.target.thursdayEvening.value,
        "fridayEvening":event.target.fridayEvening.value,
        "saturdayEvening":event.target.saturdayEvening.value
    }})

    this.setState({
      sessions: {
        "practitioner": event.target.practitioner.value,
        "sessiontype":event.target.sessiontype.value
      }
    })

    this.setState({
      clientInformation: {
        "healthText": event.target.healthText.value,
        "medicationText": event.target.medicationText.value,
        "alcoholdrugsText": event.target.alcoholdrugsText.value,
        "selfharmText": event.target.selfharmText.value,
        "suicideconsText": event.target.suicideconsText.value,
        "suicidethoughtsText": event.target.suicidethoughtsText.value,
        "therapyText": event.target.therapyText.value,
        "othertherapyText": event.target.othertherapyText.value,
        "socialText": event.target.socialText.value
      }
    })

    this.setState({
      presentingIssues: {
        "abuseTrauma": event.target.abuseTraumaCheckbox.value,
        "adaptation": event.target.adaptationCheckbox.value,
        "alcohol": event.target.alcoholCheckbox.value,
        "drugs": event.target.drugsCheckbox.value,
        "gambling": event.target.gamblingCheckbox.value,
        "otherAddiction": event.target.otherAddictionCheckbox.value,
        "substanceAbuseHistory": event.target.substanceAbuseHistoryCheckbox.value,
        "angerAgression": event.target.angerAgressionCheckbox.value,
        "anxiety": event.target.anxietyCheckbox.value,
        "bereavement": event.target.bereavementCheckbox.value,
        "bullying": event.target.bullyingCheckbox.value,
        "childhoodIssues": event.target.childhoodIssuesCheckbox.value,
        "cognitiveLearning": event.target.cognitiveLearningCheckbox.value,
        "emotions": event.target.emotionsCheckbox.value,
        "depression": event.target.depressionCheckbox.value,
        "domesticViolence": event.target.domesticViolenceCheckbox.value,
        "eatingDisorder": event.target.eatingDisorderCheckbox.value,
        "familyDifficulty": event.target.familyDifficultyCheckbox.value,
        "genderSexuality": event.target.genderSexualityCheckbox.value,
        "interpersonalRelationships": event.target.interpersonalRelationshipsCheckbox.value,
        "isolation": event.target.isolationCheckbox.value,
        "livingWelfare": event.target.livingWelfareCheckbox.value,
        "mentalHealth": event.target.mentalHealthCheckbox.value,
        "moodDisorder": event.target.moodDisorderCheckbox.value,
        "panicAttack": event.target.panicAttackCheckbox.value,
        "personalityDisorder": event.target.personalityDisorderCheckbox.value,
        "phobias": event.target.phobiasCheckbox.value,
        "psychosis": event.target.psychosisCheckbox.value,
        "selfEsteem": event.target.selfEsteemCheckbox.value,
        "selfHarm": event.target.selfHarmCheckbox.value,
        "sexual": event.target.sexualCheckbox.value,
        "stress": event.target.stressCheckbox.value,
        "studies": event.target.studiesCheckbox.value,
        "suicidalThoughts": event.target.suicidalThoughtsCheckbox.value,
        "suicidalAttempts": event.target.suicidalAttemptsCheckbox.value,
        "work": event.target.workCheckbox.value,
        "other": event.target.otherCheckbox.value,
        "currentIssue": event.target.currentIssue.value,
        "counsellingGoal": event.target.counsellinggoalText.value
      }
    })

    this.setState({
      infoForAllocation: {
        "thoughtsText": event.target.thoughtsText.value,
        "appropriateText": event.target.appropriateText.value,
        "typeText": event.target.typeText.value,
        "referralsText": event.target.referralsText.value,
      }
    })

    this.setState({
      notes: {
        "notesText": event.target.notesText.value
      }
    })

    this.props.handleAssessmentPost()

    // TODO: write handleAssessmentPost
  }

  render() {
    return (
      <Fragment>
        <div className="content-block">
          <div className="row">
            <h4>Client Assessment Form</h4>
          </div>
          <div className="row">
            <div className="col-sm-12 btn-group">
              <Link to={"/client-profile/" + this.state.id} className="btn btn-lg btn-info">Client Details</Link>
              <Link to={"/edit/" + this.state.id} className="btn btn-lg btn-info">Edit Client</Link>
              <Link to={"/assess/" + this.state.id} className="btn btn-lg btn-info disabled">Client Assessment</Link>
            </div>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="content-block">
            <div className="row">
              <h4>Basic Information</h4>
            </div>
            <div className="row">
              <ul>
                <li>Client Code</li>
                <li>Assessment Date</li>
                <li>Therapist / Counsellor</li>
                <li>Pathway</li>
                <li>DOB</li>
                <li>Gender</li>
                <li>Nationality</li>
                <li>GP</li>
              </ul>
            </div>
          </div>

          <div className="content-block">
            <div className="row">
              <h4>Schedule</h4>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <label>When is the client able to attend sessions? They are usually held at the same time, either weekly or fortnightly.</label>
              </div>
              <div className="col-sm-12">
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                    </tr>
                    <tr>
                      <td>Morning</td>
                      <td><input type="text" id="mondayMorning" name="mondayMorning" className="form-control" /></td>
                      <td><input type="text" id="tuesdayMorning" name="tuesdayMorning" className="form-control" /></td>
                      <td><input type="text" id="wednesdayMorning" name="wednesdayMorning" className="form-control" /></td>
                      <td><input type="text" id="thursdayMorning" name="thursdayMorning" className="form-control" /></td>
                      <td><input type="text" id="fridayMorning" name="fridayMorning" className="form-control" /></td>
                      <td><input type="text" id="saturdayMorning" name="saturdayMorning" className="form-control" /></td>
                    </tr>
                    <tr>
                      <td>Afternoon</td>
                      <td><input type="text" id="mondayAfternoon" name="mondayAfternoon" className="form-control" /></td>
                      <td><input type="text" id="tuesdayAfternoon" name="tuesdayAfternoon" className="form-control" /></td>
                      <td><input type="text" id="wednesdayAfternoon" name="wednesdayAfternoon" className="form-control" /></td>
                      <td><input type="text" id="thursdayAfternoon" name="thursdayAfternoon" className="form-control" /></td>
                      <td><input type="text" id="fridayAfternoon" name="fridayAfternoon" className="form-control" /></td>
                      <td><input type="text" id="saturdayAfternoon" name="saturdayAfternoon" className="form-control" /></td>
                    </tr>
                    <tr>
                      <td>Evening</td>
                      <td><input type="text" id="mondayEvening" name="mondayEvening" className="form-control" /></td>
                      <td><input type="text" id="tuesdayEvening" name="tuesdayEvening" className="form-control" /></td>
                      <td><input type="text" id="wednesdayEvening" name="wednesdayEvening" className="form-control" /></td>
                      <td><input type="text" id="thursdayEvening" name="thursdayEvening" className="form-control" /></td>
                      <td><input type="text" id="fridayEvening" name="fridayEvening" className="form-control" /></td>
                      <td><input type="text" id="saturdayEvening" name="saturdayEvening" className="form-control" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="row">
              <h4>Sessions</h4>
            </div>
            <div className="form-group row">
              <label htmlFor="practitioner" className="col-sm-2 col-form-label">Seen by Practitioner</label>
              <div className="col-sm-9">
                <input type="text" id="practitioner" name="practitioner" className="form-control" placeholder="Seen by Practitioner" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="sessiontype" className="col-sm-2 col-form-label">Session Type</label>
              <div className="col-sm-9">
                <input type="text" id="sessiontype" name="sessiontype" className="form-control" placeholder="Session Type" />
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="row">
              <h4>Client Information</h4>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="healthText" className="col-sm-12 col-form-label">Any Significant health problems or disabilities</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="healthText" name="healthText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="medicationText" className="col-sm-12 col-form-label">Current relevant medication (What medication, dose if known, why they were prescribed and when)</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="medicationText" name="medicationText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="alcoholdrugsText" className="col-sm-12 col-form-label">Alcohol / Recreational drugs - past/present</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="alcoholdrugsText" name="alcoholdrugsText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="selfharmText" className="col-sm-12 col-form-label">Has the client ever physically harmed themselves in any way</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="selfharmText" name="selfharmText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="suicideconsText" className="col-sm-12 col-form-label">Has the client ever considered taking their own life</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="suicideconsText" name="suicideconsText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="suicidethoughtsText" className="col-sm-12 col-form-label">Does the client have suicidal thoughts as of now</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="suicidethoughtsText" name="suicidethoughtsText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="therapyText" className="col-sm-12 col-form-label">Has the client had therapy / counselling in the past</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="therapyText" name="therapyText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="othertherapyText" className="col-sm-12 col-form-label">Is the client receiving any other form of therapy / seeing any other healthcare professional at present</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="othertherapyText" name="othertherapyText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="socialText" className="col-sm-12 col-form-label">Social situation (occupation, potential financial and social issues, living arrangements, family and friends, environmental issues, emotional support, etc)</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="socialText" name="socialText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="row">
              <h4>Presenting Issues</h4>
            </div>
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="abuseTraumaCheckbox" name="abuseTraumaCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="abuseTraumaCheckbox">Abuse / Trauma</label>
              <input type="checkbox" id="adaptationCheckbox" name="adaptationCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="adaptationCheckbox">Adaptation Problems</label>
              <input type="checkbox" id="alcoholCheckbox" name="alcoholCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="alcoholCheckbox">Addiction: Alcohol</label>
              <input type="checkbox" id="drugsCheckbox" name="drugsCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="drugsCheckbox">Addiction: Drugs</label>
              <input type="checkbox" id="gamblingCheckbox" name="gamblingCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="gamblingCheckbox">Addiction: Gambling</label>
            </div>
            <br />
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="otherAddictionCheckbox" name="otherAddictionCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="otherAddictionCheckbox">Addiction: Other</label>
              <input type="checkbox" id="substanceAbuseHistoryCheckbox" name="substanceAbuseHistoryCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="substanceAbuseHistoryCheckbox">Alcohol / substance abuse in family of origin</label>
              <input type="checkbox" id="angerAgressionCheckbox" name="angerAgressionCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="angerAgressionCheckbox">Anger and Aggression</label>
              <input type="checkbox" id="anxietyCheckbox" name="anxietyCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="anxietyCheckbox">Anxiety</label>
              <input type="checkbox" id="bereavementCheckbox" name="bereavementCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="bereavementCheckbox">Bereavement/Loss</label>
            </div>
            <br />
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="bullyingCheckbox" name="bullyingCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="bullyingCheckbox">Bullying / Mobbing</label>
              <input type="checkbox" id="childhoodIssuesCheckbox" name="childhoodIssuesCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="childhoodIssuesCheckbox">Childhood Issues</label>
              <input type="checkbox" id="cognitiveLearningCheckbox" name="cognitiveLearningCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="cognitiveLearningCheckbox">Cognitive / Learning</label>
              <input type="checkbox" id="emotionsCheckbox" name="emotionsCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="emotionsCheckbox">Dealing with Emotions</label>
              <input type="checkbox" id="depressionCheckbox" name="depressionCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="depressionCheckbox">Depression</label>
            </div>
            <br />
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="domesticViolenceCheckbox" name="domesticViolenceCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="domesticViolenceCheckbox">Domestic Violence</label>
              <input type="checkbox" id="eatingDisorderCheckbox" name="eatingDisorderCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="eatingDisorderCheckbox">Eating Disorder</label>
              <input type="checkbox" id="familyDifficultyCheckbox" name="familyDifficultyCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="familyDifficultyCheckbox">Family Difficulties</label>
              <input type="checkbox" id="genderSexualityCheckbox" name="genderSexualityCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="genderSexualityCheckbox">Gender / Sexuality</label>
              <input type="checkbox" id="interpersonalRelationshipsCheckbox" name="interpersonalRelationshipsCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="interpersonalRelationshipsCheckbox">Interpersonal / Relationships</label>
            </div>
            <br />
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="isolationCheckbox" name="isolationCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="isolationCheckbox">Isolation</label>
              <input type="checkbox" id="livingWelfareCheckbox" name="livingWelfareCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="livingWelfareCheckbox">Living / Welfare</label>
              <input type="checkbox" id="mentalHealthCheckbox" name="mentalHealthCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="mentalHealthCheckbox">Mental Health Diagnosis</label>
              <input type="checkbox" id="moodDisorderCheckbox" name="moodDisorderCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="moodDisorderCheckbox">Mood Disorders</label>
              <input type="checkbox" id="panicAttackCheckbox" name="panicAttackCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="panicAttackCheckbox">Panic Attacks</label>
            </div>
            <br />
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="personalityDisorderCheckbox" name="personalityDisorderCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="personalityDisorderCheckbox">Personality Disorders</label>
              <input type="checkbox" id="phobiasCheckbox" name="phobiasCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="phobiasCheckbox">Phobias</label>
              <input type="checkbox" id="psychosisCheckbox" name="psychosisCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="psychosisCheckbox">Psychosis</label>
              <input type="checkbox" id="selfEsteemCheckbox" name="selfEsteemCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="selfEsteemCheckbox">Self-Esteem</label>
              <input type="checkbox" id="selfHarmCheckbox" name="selfHarmCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="selfHarmCheckbox">Self-Harming</label>
            </div>
            <br />
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="sexualCheckbox" name="sexualCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="sexualCheckbox">Sexual</label>
              <input type="checkbox" id="stressCheckbox" name="stressCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="stressCheckbox">Stress</label>
              <input type="checkbox" id="studiesCheckbox" name="studiesCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="studiesCheckbox">Studies</label>
              <input type="checkbox" id="suicidalThoughtsCheckbox" name="suicidalThoughtsCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="suicidalThoughtsCheckbox">Suicidal Thoughts / Feelings</label>
              <input type="checkbox" id="suicidalAttemptsCheckbox" name="suicidalAttemptsCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="suicidalAttemptsCheckbox">Suicidal Attempts</label>
            </div>
            <br />
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="workCheckbox" name="workCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="workCheckbox">Work</label>
              <input type="checkbox" id="otherCheckbox" name="otherCheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="otherCheckbox">Other</label>
            </div>

            <div className="form-group">
              <div className="row">
                <label htmlFor="currentIssue" className="col-sm-2 col-form-label">Main Current Issue</label>
                <div className="col-sm-9">
                  <input type="text" id="currentIssue" name="currentIssue" className="form-control" placeholder="Main Current Issue" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="counsellinggoalText" className="col-sm-12 col-form-label">What would the client like from therapy / counselling</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="counsellinggoalText" name="counsellinggoalText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="row">
              <h4>Information for Allocation</h4>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="thoughtsText" className="col-sm-12 col-form-label">Assessment therapists / counsellors thoughts and feelings during and after session</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="thoughtsText" name="thoughtsText" className="form-control" rows="7" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="appropriateText" className="col-sm-12 col-form-label">Appropriate for therapy / counselling?</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="appropriateText" name="appropriateText" className="form-control" rows="7" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="typeText" className="col-sm-12 col-form-label">Type of therapist / counsellor required?</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="typeText" name="typeText" className="form-control" rows="7" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="referralsText" className="col-sm-12 col-form-label">Referrals to other projects suggested</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="referralsText" name="referralsText" className="form-control" rows="7" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-block">
            <div className="row">
              <h4>Notes</h4>
            </div>
            <div className="form-group">
              <div className="row">
                <label htmlFor="notesText" className="col-sm-12 col-form-label">All Notes</label>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <textarea id="notesText" name="notesText" className="form-control" rows="14" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-block">
            <div className="form-group">
              <input type="submit" className="btn btn-lg btn-block btn-success" value="Save" />
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}


export default ClientAssessmentForm;

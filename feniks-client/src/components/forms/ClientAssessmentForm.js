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
            <input type="submit" className="btn btn-lg btn-block btn-success" value="Save"/>
          </div>
        
          </div>
        </form>
      </Fragment>
    )
  }
}


export default ClientAssessmentForm;

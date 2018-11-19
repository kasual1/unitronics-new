import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FinalSurveyDataService } from '../final-survey-data.service';
import { AuthService } from '../../auth.service';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';

@Component({
  selector: 'app-final-survey',
  templateUrl: './final-survey.component.html',
  styleUrls: ['./final-survey.component.css']
})
export class FinalSurveyComponent implements OnInit {

  isSurveySubmitted: boolean = false;

  email: string = null;

  errorAlreadyAnswered: boolean = false;

  errorUnexpected: boolean = false;

  finalSurvey = new FormGroup(
    {
      satisfactionHedonic: new FormControl('', Validators.required),
      satisfactionExperienced: new FormControl('', Validators.required),
      satisfactionUtilitarian: new FormControl('', Validators.required),
      satisfactionCredence: new FormControl('', Validators.required),
      comeBackHedonic: new FormControl('', Validators.required),
      comeBackExperienced: new FormControl('', Validators.required),
      comeBackUtilitarian: new FormControl('', Validators.required),
      comeBackCredence: new FormControl('', Validators.required),
      priorExp: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('')
    }
  );

  constructor(
    private dataService: FinalSurveyDataService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.finalSurvey);
    let user = this.authService.getUser();

    // Initialize the Experiment 
    let experiment = new RecommenderExperiment({ userId: user });
    let treatment = experiment.get('recommenderType');

    let surveyAnswers = {
      treatment: treatment,
      satisfactionHed: this.finalSurvey.value.satisfactionHedonic,
      satisfactionExp: this.finalSurvey.value.satisfactionExperienced,
      satisfactionUt: this.finalSurvey.value.satisfactionUtilitarian,
      satisfactionCred: this.finalSurvey.value.satisfactionCredence,
      returnHed: this.finalSurvey.value.comeBackHedonic,
      returnExp: this.finalSurvey.value.comeBackExperienced,
      returnUt: this.finalSurvey.value.comeBackUtilitarian,
      returnCred: this.finalSurvey.value.comeBackCredence,
      experience: this.finalSurvey.value.priorExp,
      gender: this.finalSurvey.value.gender,
      age: this.finalSurvey.value.age,
      email: this.finalSurvey.value.email
    }
    this.dataService.sendSurveyAnswers(user, surveyAnswers).subscribe(
      (data: any) => {
        console.log('RESPONSE:', data);
        this.isSurveySubmitted = true;
      },
      (error: any) => {
        console.log('ERROR:', error);
        switch (error.status) {
          case 409:
            this.errorAlreadyAnswered = true;
            break;
          default:
            this.errorUnexpected = true;
            break;
        }
      }
    );

  }

}

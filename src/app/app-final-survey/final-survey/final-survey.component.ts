import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-final-survey',
  templateUrl: './final-survey.component.html',
  styleUrls: ['./final-survey.component.css']
})
export class FinalSurveyComponent implements OnInit {

  isSurveySubmitted: boolean = false;

  email: string = null;

  finalSurvey = new FormGroup(
    {
      satisfaction: new FormControl('', Validators.required),
      comeBackHedonic: new FormControl('', Validators.required),
      comeBackExperienced: new FormControl('', Validators.required),
      comeBackUtilitarian: new FormControl('', Validators.required),
      comeBackCredence: new FormControl('', Validators.required),
      priorExp: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('')
    }
  );

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.finalSurvey);
    this.isSurveySubmitted = true;
  }

}

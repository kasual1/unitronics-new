import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HedModule } from './hedonic-shop/hed.module';
import { AppRoutingModule } from './app-routing.module';
import { ExpModule } from './experienced-shop/exp.module';
import { UtModule } from './utilitarian-shop/ut.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HedSurveyModule } from './hedonic-survey/hed-survey.module';
import { ExpSurveyModule } from './experienced-survey/exp-survey.module';
import { UtSurveyModule } from './utilitarian-survey/ut-survey.module';
import { FormsModule } from '@angular/forms';
import { CredModule } from './credence-shop/cred.module';
import { CredSurveyModule } from './credence-survey/cred-survey.module';
import { InitialSurveyModule } from './app-initial-survey/initial-survey.module';
import { FinalSurveyModule } from './app-final-survey/final-survey.module';
import { NextShopModalComponent } from './next-shop-modal/next-shop-modal.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NextShopModalComponent
  ],
  imports: [
    ExpModule,
    ExpSurveyModule,
    HedModule,
    HedSurveyModule,
    UtModule,
    UtSurveyModule,
    CredModule,
    CredSurveyModule,
    InitialSurveyModule,
    FinalSurveyModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

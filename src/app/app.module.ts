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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpModule,
    HedModule,
    UtModule,
    AppRoutingModule,
    HttpClientModule,
    HedSurveyModule,
    ExpSurveyModule,
    UtSurveyModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

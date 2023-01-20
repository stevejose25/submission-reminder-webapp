import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectSelectorComponent } from './subject-selector/subject-selector.component';
import { SubmissionTypeComponent } from './submission-type/submission-type.component';
import { DateComponent } from './date/date.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { SubmissionitemComponent } from './submissionitem/submissionitem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectSelectorComponent,
    SubmissionTypeComponent,
    DateComponent,
    SubmissionsComponent,
    SubmissionitemComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

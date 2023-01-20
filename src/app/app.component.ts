import { Component, Input } from '@angular/core';
import { Submission } from './models/submission';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'submission-reminder-webapp';
  subjectSelected =(payload:any) => 
  {

    this.submission.subject_id = payload.subject_id

  }

  click =() => 
  {
    console.log(this.submission)
  }

  @Input() submission: Submission = 
  {
    id: 0,
    subject_id: 0,
    type_id: 0,
    date: ""
  }

}
